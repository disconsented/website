+++
title = "A guide for CPUs in Minecraft"
description = "Because you're all anti-intelectual idiots and I'm sick of explaining it."
date = 2025-08-20T02:26:04.518+13:00
updated = 2025-08-20T02:26:04.518+13:00
draft = true
[taxonomies]
year = ["2025"]
categories = ["Minecraft"]
[extra]
toc = true
+++

### **I. Fundamental Limitations of Parallel Computing (Amdahl's Law)**
- Amdahl's law
    - Scaling isn't linear
    - Some workloads are inherently serial, relying on strictly ordered steps. Like parsing and compression.
    - Data dependencies. Read-after-write hazards & stateful systems
    - Communication overhead. Splitting work isn't free - threads spend time on Synchronisation (locks & messages), Cache coherence traffic or data copying.
- Minecraft's main logic loop is serial, we know this because we can read the code & the yardstick paper https://dl.acm.org/doi/10.1145/3297663.3310307
- We also know this because we can read the source code thanks to decompliation efforts. Worlds are simulated in sequence, they're not ever parallelised.
- Minecraft does need more than one core; the extra cores are needed to give the main thread as much time as possible. Secondary tasks like Garbage collection, networking, or IO are generally easy (enough) to run in parallel.
- Minecraft is considered to scale well between up to 4 cores; you should have at least 2.

> at net.minecraft.server.level.ServerLevel.tick(ServerLevel.java:331)
at net.minecraft.server.MinecraftServer.tickChildren(MinecraftServer.java:1102)
at net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:975)
at net.minecraft.client.server.IntegratedServer.tickServer(IntegratedServer.java:111)
at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:729)
at net.minecraft.server.MinecraftServer.lambda$spin$2(MinecraftServer.java:278)
at net.minecraft.server.MinecraftServer$$Lambda/0x00007fceed2dc238.run(Unknown Source:-1)
at java.lang.Thread.runWith(Thread.java:1596)
at java.lang.Thread.run(Thread.java:1583)
> 
> 
```java
  // net.minecraft.server.level.ServerLevel#tick
 public void tick(BooleanSupplier hasTimeLeft) {
        ProfilerFiller profilerfiller = Profiler.get();
        this.handlingTick = true;
        TickRateManager tickratemanager = this.tickRateManager();
        boolean flag = tickratemanager.runsNormally();
        if (flag) {
            profilerfiller.push("world border");
            this.getWorldBorder().tick();
            profilerfiller.popPush("weather");
            this.advanceWeatherCycle();
            profilerfiller.pop();
        }

        int i = this.getGameRules().getInt(GameRules.RULE_PLAYERS_SLEEPING_PERCENTAGE);
        if (this.sleepStatus.areEnoughSleeping(i) && this.sleepStatus.areEnoughDeepSleeping(i, this.players)) {
            if (this.getGameRules().getBoolean(GameRules.RULE_DAYLIGHT)) {
                long j = this.levelData.getDayTime() + 24000L;
                this.setDayTime(EventHooks.onSleepFinished(this, j - j % 24000L, this.getDayTime()));
            }

            this.wakeUpAllPlayers();
            if (this.getGameRules().getBoolean(GameRules.RULE_WEATHER_CYCLE) && this.isRaining()) {
                this.resetWeatherCycle();
            }
        }

        this.updateSkyBrightness();
        if (flag) {
            this.tickTime();
        }

        profilerfiller.push("tickPending");
        if (!this.isDebug() && flag) {
            long k = this.getGameTime();
            profilerfiller.push("blockTicks");
            this.blockTicks.tick(k, 65536, this::tickBlock);
            profilerfiller.popPush("fluidTicks");
            this.fluidTicks.tick(k, 65536, this::tickFluid);
            profilerfiller.pop();
        }

        profilerfiller.popPush("raid");
        if (flag) {
            this.raids.tick();
        }

        profilerfiller.popPush("chunkSource");
        this.getChunkSource().tick(hasTimeLeft, true);
        profilerfiller.popPush("blockEvents");
        if (flag) {
            this.runBlockEvents();
        }

        this.handlingTick = false;
        profilerfiller.pop();
        boolean flag1 = !this.players.isEmpty() || ForcedChunkManager.hasForcedChunks(this);
        if (flag1) {
            this.resetEmptyTime();
        }

        if (flag1 || this.emptyTime++ < 300) {
            profilerfiller.push("entities");
            if (this.dragonFight != null && flag) {
                profilerfiller.push("dragonFight");
                this.dragonFight.tick();
                profilerfiller.pop();
            }

            // Entiity simulation
            this.entityTickList.forEach((p_359620_) -> {
                if (!p_359620_.isRemoved() && !tickratemanager.isEntityFrozen(p_359620_)) {
                    profilerfiller.push("checkDespawn");
                    p_359620_.checkDespawn();
                    profilerfiller.pop();
                    if (p_359620_ instanceof ServerPlayer || this.chunkSource.chunkMap.getDistanceManager().inEntityTickingRange(p_359620_.chunkPosition().toLong())) {
                        Entity entity = p_359620_.getVehicle();
                        if (entity != null) {
                            if (!entity.isRemoved() && entity.hasPassenger(p_359620_)) {
                                return;
                            }

                            p_359620_.stopRiding();
                        }

                        profilerfiller.push("tick");
                        if (!p_359620_.isRemoved() && !(p_359620_ instanceof PartEntity)) {
                            this.guardEntityTick(this::tickNonPassenger, p_359620_);
                        }

                        profilerfiller.pop();
                    }
                }

            });
            profilerfiller.pop();
            this.tickBlockEntities();
        }

        profilerfiller.push("entityManagement");
        this.entityManager.tick();
        profilerfiller.pop();
    }
```
```java
// net.minecraft.server.MinecraftServer#tickChildren
protected void tickChildren(BooleanSupplier hasTimeLeft) {
    ProfilerFiller profilerfiller = Profiler.get();
    this.getPlayerList().getPlayers().forEach((p_341570_) -> p_341570_.connection.suspendFlushing());
    profilerfiller.push("commandFunctions");
    this.getFunctions().tick();
    profilerfiller.popPush("levels");

    for(ServerLevel serverlevel : this.getWorldArray()) {
        long tickStart = Util.getNanos();
        profilerfiller.push(() -> {
            String var10000 = String.valueOf(serverlevel);
            return var10000 + " " + String.valueOf(serverlevel.dimension().location());
        });
        if (this.tickCount % 20 == 0) {
            profilerfiller.push("timeSync");
            this.synchronizeTime(serverlevel);
            profilerfiller.pop();
        }

        profilerfiller.push("tick");
        EventHooks.fireLevelTickPre(serverlevel, hasTimeLeft);

        try {
            serverlevel.tick(hasTimeLeft);
        } catch (Throwable throwable) {
            CrashReport crashreport = CrashReport.forThrowable(throwable, "Exception ticking world");
            serverlevel.fillReportDetails(crashreport);
            throw new ReportedException(crashreport);
        }

        EventHooks.fireLevelTickPost(serverlevel, hasTimeLeft);
        profilerfiller.pop();
        profilerfiller.pop();
        ((long[])this.perWorldTickTimes.computeIfAbsent(serverlevel.dimension(), (k) -> new long[100]))[this.tickCount % 100] = Util.getNanos() - tickStart;
    }

    profilerfiller.popPush("connection");
    this.tickConnection();
    profilerfiller.popPush("players");
    this.playerList.tick();
    if (GameTestHooks.isGametestEnabled() && this.tickRateManager.runsNormally()) {
        GameTestTicker.SINGLETON.tick();
    }

    profilerfiller.popPush("server gui refresh");

    for(int i = 0; i < this.tickables.size(); ++i) {
        ((Runnable)this.tickables.get(i)).run();
    }

    profilerfiller.popPush("send chunks");

    for(ServerPlayer serverplayer : this.playerList.getPlayers()) {
        serverplayer.connection.chunkSender.sendNextChunks(serverplayer);
        serverplayer.connection.resumeFlushing();
    }

    profilerfiller.pop();
}
```
### **II. Hardware and System Constraints**
- Hardware limitations and System Constraints
    - Many programs are I/O bound (waiting on disk, network) — multiple cores won’t help.
    - Memory bandwidth limits: More threads = more contention.
    - Branch-heavy code: CPUs can’t predict well, so parallelism gains are low.
    - It's expensive to move data between cores; it's more expensive to move data to main memory or between physical CPUs.
- CPU frequency varies depending on a range of factors:
    - Time-limited boost (for mobile processors)
    - Thermal headroom
    - How many cores are active; the more cores are busy, the slower everyone runs
    - Frequency & Voltage have an exponential relationship. Each frequency increment requires significantly more voltage (power) to be stable. Which is why single core and all core turbo's are so different.
- Include the Zen1/Zeppelin graph
    - What each core is doing (SIMD/AVX introduces a significant frequency penalty).
      
![Pinnacle Ridge Voltage vs Frequency](vfreq.png)
[Source](https://forums.anandtech.com/threads/ryzen-strictly-technical.2500572/page-72#post-39391302)

- Speculative execution attacks have required fixes that introduce a significant performance overhead; this is drastically larger in processors older than Intel's Skylake (6000 series). Reducing performance by as much as 60% or more.
- All of AMDs Zen processors or newer also have the cheaper speculative execution mitigations, but, Zen/Zen+ (Ryzen 1000 & Ryzen 2000) are still not recommended as they have lower IPC than Intel's Skylake.
- AMD APUs and Mobile processors have half the L3 Cache as their desktop/server counterparts. Consequently, their IPC is lower.
- Be wary of Heterogenous CPU designs. Apple has been doing this since M series, and Intel has been doing this since Alder Lake. The danger comes from the OS putting server threads on the wrong core and the cost of moving threads between core complexes.
- AMD does currently do Heterogenous CPU designs, but, their approach is different. Their cores are an identical architecture, where they differ is they're using different manufacturing techniques that trade off between size, speed (frequency), and power efficiency.
- RAM generations aren't that important; you generally don't get a choice. We don't know the impact of RAM here directly.
- You _do_ want to prioritise getting 2 DIMMs for dual channel when building a server.
- Be aware of the raptor lake bug (https://en.wikipedia.org/wiki/Raptor_Lake#Instability_and_degradation_issue)

### **III. The Pitfalls of Benchmarking Websites**
- "Benchmarking" sites commit just about every benchmarking crime under the sun
    - Yes, your standards should be higher; it's better to be honest and say there's no data rather than use bad data
    - Userbenchmark (UBM) specifically, is a conspiracy website. See https://rtech.support/learning/userbenchmark/ for specifics
    - Cpubenchmark/passmark are bad, but not as bad as userbenchmark
- Benchmarking crimes:
    - User submitted data is bad, and introduces a lot of bias, noise, and agendas to influence the results
    - These sites are almost always using synthetic benchmarks; these don't reflect the real world (especially not minecraft)
    - These sites are almost always _micro_ benchmarks; you cannot infer the performance based on these
    - benchmarking crimes https://gernot-heiser.org/benchmarking-crimes.html
- Passmark was caught manipulating tests as well https://www.computerbase.de/news/prozessoren/passmark-performancetest-beguenstigt-intel-prozessoren.71279/
- Passmark is also just _wrong_ comparing the 9950X3D vs the 285k; they list between 3.6 to 7.1% difference. Phoronix, an actual reputable source lists 40%. Passmark isn't just wrong, it's wildly wrong.
- Any benchmark website that gives you simple "scores" is feeding you bullshit. It's an over simplification of important details.

### **IV. How to Properly Evaluate CPU Performance**
- What Instructions Per Cycle (IPC) is & the Megahertz myth
- The better way to estimate CPU performance: nominal frequency (highest frequency under load) X the IPC
    - Nominal frequency is the all core turbo, divided by the number of cores.
- Single core performance is what matters the most for Minecraft. This is a combination of Frequency, IPC, Memory Performance (bandwidth & latency) & Cache. Don't bother with trying to use specs; find review data or estimate with IPC * nominal frequency.
- The best source of data would be _reviews_; reviews are great because they're the opposite of these benchmark websites:
    - A wide test suite, including Game benchmarks, which are the closest analogue for Minecraft servers.
    - They use Real-world benchmarks
    - Their methodologies are public and their results are reproducible
    - They don't over simplify the data
    - Because there are no users, the data is much less variable and less likely to be tampered with
    - Of particular note, https://www.phoronix.com/ ("Phoronix is the leading technology website for Linux hardware reviews, open-source news, Linux benchmarks, open-source benchmarks, and computer hardware performance tests.") & https://www.techpowerup.com/ ("Leading tech publication, with fast news, thorough reviews, and a strong community")
    - https://hardware.chat/reference/ has a solid reference of other sources of data to consider
- CPU utilisation doesn't mean what you think it does https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html
- The proof of the pudding is in the eating; theory will only carry you so far. At some point, you need to test.
- A table of IPC, starting from Skylake and ending with Zen 5 for reference. Include Apple's M1,M2,M3 & M4 parts

### **V. Specific CPU Recommendations and Warnings**
- Stop recommending fucking Raspberry Pi's.
    - A Pi4 is a fifth as fast as an i5-4590.
    - The Pi5 is about as fast as an i5-4590.
    - They (both) require more than just the initial purchase price I.E. a UASP enclosure + an SSD because SD cards are too slow and minecraft does care about storage (IO) performance.
    - Overclocking is needed for not terrible performance on the Pi4, but both require a cooler.
    - Both Rpi's should also use a case, which drives up cost again.
- Second hand desktops can be a great way of getting a cheap machine for hosting.
- Another good "cheap" option are the Gracemont based CPUs like the N150. These have Skylake IPC despite being an efficiency core.
- Try to avoid small form factor machines; they tend to use mobile CPUs.
- Mobile CPUs are bad because they're massively power limited and may have a time-limited turbo, moreover.
- Mini PC's tend to run these at higher power limits, but, they're still slower than their desktop counterparts.
- Laptop CPUs tend to have good/okay single core turbo and abysmal all core turbo; that's why they should be avoided.
- https://docs.google.com/spreadsheets/d/15dfYTVEGOiasL6tMgtv3Zc7OFSAlp66Resnf05IfiFM/edit?gid=0#gid=0 Suffix table
- The best CPUs have the best single core performance; this tends to be the newest Desktop CPUs because they'll have all the IPC improvements from the latest architectures, and they'll run at a much higher frequency.
- Old server CPUs are cheap because they cost more for businesses to run them, than the useful work they produce. They're cheap because they suck.
- AMD EPYC 400# processors are their normal desktop siblings, with some extras like ECC validation. Intel also does this with their Xeon-E and E3 server CPUs.

### **VI. The 3D V-Cache Myth for Minecraft**
- 3D Vcache has not been known to improve Minecraft performance. In 3 generations of the technology across several product lines, there has been no real evidence to suggest that there's any real benefit.
    - In particular, the EPYC-X CPUs with their even larger caches show no benefit.
    - Hetzner (a very common infrastructure provider) widely deployed the 7950X3D because it had a much lower power limit than the 7950X.
    - The 9950X3D addressed the frequency deficit with 3D vcache; nobody can display any significant improvements.

### **VII. Practical Server Considerations and Hosting**
- How do servers achieve large player counts
    - Folia, a papermc project. They're quite smart, creating "regions" based around player locations.
    - Networks; these aren't one server. They're many independent ones.
- Folia is a great example of the scaling laws; it also scales fairly poorly.
- It's recommended to have at least 16 cores for Folia; it's not an excuse to try and scale an old server.
- There's no equation to figure out what CPU you need for a server. It depends on so many factors:
    - What Minecraft version; newer versions practically always get harder to run.
    - What kind of server you're actually running; a big SMP world is a lot harder than mini-games for example.
    - What your peak _concurrent_ player count looks like. The only players who are relevant for performance are the ones who are logged in.
    - What server software you're running. Vanilla is very slow. Fabric with performance mods is much faster; Paper is faster still, since it is much more willing to break the slowest parts of Minecraft.
    - Modded servers will be slower than vanilla on their own/without performance mods.
- Players don't contribute much load on their own, but, they build contraptions and cause entities to be simulated, which is the biggest normal point of load.
- Plugin counts & mod counts don't mean anything. What matters is the specific ones in question. A single heavy mod may kill server performance, whilst 100's of tiny ones won't matter.
- You want an SSD for Minecraft. It doesn't appear to matter whether you get a SATA/AHCI SSD or an PCIe/NVMe one. However, larger servers likely will benefit from the latter.
- M.2 is a form factor, and nothing else. It can carry PCIe, SATA or USB. NVMe is not M.2; it's also useless without PCIe to let it go fast.
- Try to avoid Virtual Private Servers. They tend to:
    - Use cost-effective CPUs, which have many slower cores.
    - They tend to over sell their resources, causing contention and slower turbos.
    - They may throttle servers if they're too busy.
    - You eat all the memory overhead with the full OS.
    - The target market is generally bursty applications.
- Oracle cloud's always free tier provides a 4 Core ARM CPU about as fast as an i5-4590. They also provide 24 GiB of RAM. Providing you can get it, it's great for small servers for people who know Linux.
- For home hosting, consider the Total Cost of Ownership, which includes:
    - Cost of power $/KwH; consider the duty cycle.
    - The cost of initial purchases
    - The cost of network upgrades
    - Ongoing network costs
    - The cost of maintenance and upgrades
    - The cost of your time to do all this

### **VIII. The Challenge of Benchmarking Minecraft**
- Nobody has put in the effort to benchmark Minecraft; it's really hard. It's extra difficult to do it in a way that's agnostic to Minecraft versions and server software.
- People try to benchmark with chunk generation; this is pointless, as you're best off pre-generating the world, as that only needs to be done once.
- Spark is an excellent tool for _profiling_ servers, I've observed that most often the causes of load are _entities_ and datapacks.

### **IX. A Final Note**
- If you've been given this, you've probably said something wrong. If you don't take this new information onboard and change what you've said, you're either an idiot or an asshole.
- This article is written _for_ Minecraft but applies to more than just Minecraft.
- Future proofing still isn't a damn thing.

### References

- https://en.wikipedia.org/wiki/Amdahl%27s_law
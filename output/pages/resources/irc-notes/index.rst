.. title: IRC Notes
.. slug: irc-notes
.. date: 2015-08-20 14:15:09 UTC+12:00
.. tags:
.. category: Resource
.. link:
.. description: A collection of notes concerning IRC that don't deserve their own page
.. type: text
.. author: Disconsented

Overview
========

.. class:: list-spaced list-none

- [#]_ CPU overclocking without a T1 GPU.
- [#]_ Backblaze/Seagate.
- [#]_ Streaming builds.
- [#]_ Multi GPU Builds.
- [#]_ Future proofing.
- [#]_ Drivers.
- [#]_ Stubborn.
- [#]_ R5.
- [#]_ Windows version.
- [#]_ 777 build.
- [#]_ Associated cost.
- [#]_ Monitors.
- [#]_ 1070 for 144hz.
- [#]_ Value.
- [#]_ Rudeness.
- [#]_ Work with us.

Notes
=====

.. class:: list-spaced list-none

- .. [#] CPU overclocking requires a large investment via a more **expensive motherboard** (Z97/Z170 etc), **aftermarket cooler** and **CPU(Intel K models)**. For *gaming*, CPU overclocking provides very **little** benefit (`even in "CPU intensive" games like ARMA 3 <http://www.techspot.com/articles-info/712/bench/CPU_01.png>`_) and instead that money should **always** be put into the GPU (unless you're using a T1 GPU which start at $600+ USD inside the current generation). For `other games <http://www.ocaholic.ch/modules/smartsection/item.php?itemid=3942&page=4>`_ its effectively no difference (including `CS:GO <http://techx1.thessdreview1.netdna-cdn.com/wp-content/uploads/2015/08/fx-8370-vs-5960x_gaming-csgo_gtx960.jpg>`_).

- .. [#]  `(1) <http://www.tweaktown.com/articles/6028/dispelling-backblaze-s-hdd-reliability-myth-the-real-story-covered/index.html>`_ `(2) <https://www.backblaze.com/blog/wp-content/uploads/2015/10/blog_q3stats_manufacturer-e1444680042365.jpg>`_ `(3) <http://www.enterprisestorageforum.com/storage-hardware/selecting-a-disk-drive-how-not-to-do-research-1.html>`_ `(4) <http://www.forbes.com/sites/tomcoughlin/2015/01/29/hdd-annual-unit-shipments-increase-in-2014>`_ `(5) <http://www.hardware.fr/articles/920-6/disques-durs.html>`_ TL;DR Backblaze and anecdote are irrelevant and intellectually dishonest when talking about HDD reliability (there is no valid data available).

- .. [#] For Streaming you have two real choices: Stream using a GPU based technology (NVENC, VCE(legacy), AMF, `QuickSync <https://www.youtube.com/watch?v=idhkZy-tMTU>`_ for Nvidia, AMD and Intel GPU's respectively) or build a dedicated capture system with a capture card. CPU streaming is not viable or acceptable. This is because that even with modern CPU's the overhead is too much and using the GPU to encode especially with twitch being capable of accepting 6Mb is significantly more efficient both in terms overhead and financial cost. For those who are partnered consider a capture card streaming setup with a dedicated system.

- .. [#] Multi-GPU solutions (SLI and CrossFire) are only ever worth using with top-tier cards ($600+ USD). For weaker cards, a step up to a stronger single card will bring better performance than adding another weaker card into a SLI/CrossFire setup. In addition, SLI/CrossFire also have generally poor support, to the point where some games perform worse in multi-GPU setups. In addition multi card setups increase power consumption and temperature linearly with the amount of cards added. `Techpowerup <https://www.techpowerup.com/reviews/AMD/RX_480_CrossFire/21.html>`_ found that "only 6 out of 16 tests are taking advantage of the second card." for Crossfire Rx480's(Thanks Gleeb). `Nvidia <https://www.techpowerup.com/reviews/NVIDIA/GeForce_GTX_1080_SLI/23.html>`_ isn’t any better.

- .. [#] Future proofing is about hardware not becoming obsolete however due to generational release cycles this is impossible. The closest thing you can do is make smart choices today and pocket some money for an upgrade tomorrow.

- .. [#] Windows (especially modern versions like 10) are very good when it comes to handling drivers, as a result the only drivers you should be installing are those for things that don't work (and always grab the latest drivers from the manufacturers website, so throw away that disk!); except for GPU drivers which you should always keep up to date!

- .. [#] <fwaggle> "look i'm already set on riding a motorcycle without a helmet i'm just looking for advice on which seatbelt is best for my hayabusa, not a lecture on helmets thanks".

- .. [#] For the information we have avaliable even after all the troubles that the AM4 platform has had we're seeing generally `better metrics of lower fps <http://www.gamersnexus.net/hwreviews/2875-amd-r5-1600x-1500x-review-fading-i5-argument>`_ even with Nvidia drivers presenting issues `[1] <http://images.anandtech.com/graphs/graph11244/86346.png>`_ `[2] <http://images.anandtech.com/graphs/graph11244/86430.png>`_

- .. [#] Retail Windows is the only version of Windows *most* people should consider as it can be moved between systems, unlike OEM Windows which is bound to the motherboard it is first activated with.

- .. [#] This especially popular i7(k) #7## with a ##70 is a very poor build due to spending too much on the CPU relative to the GPU (especially when having overclocking parts, see above). You're better off with dropping down the CPU and saving money for later or spending it on other things like a monitor (especially if you only have a 1080p and not a 1440p monitor).

- .. [#] Many parts do not work properly or make sense on their own and such the prices of these extra parts need to be taken into account. An example of this is the locked i7 vs an unlocked i7(k) where the unlocked (k) version requires an aftermarket cooler ($100+ USD), more expensive motherboard ($40-$100+) as well as the CPU itself being more expensive.

- .. [#] Monitors are very often overlooked part of a build and they must be taken into account especially with features like adaptive sync (gsync,freesync) it is worth losing GPU performance for these parts since they last a lot long and mitigate some on the performance issues. Additionally these fall into associated cost, buying a T1 card but running it with a basic monitor creates a poor experience and stops you from getting the most out of it.

- .. [#] Another very popular misconception, achieving 1080p 144hz in any practical sense requires introducing an artificial cpu bottleneck in order to get the highest and most stable frame rate. This is further compounded by only a small subset of games actually being applicable for this (CS:GO). High refresh rate gaming is a direct trade off of visual fidelity for competitive edge (remember 'smoothness' includes frame consistency). Meaning that ##70 card's are a complete waste at this point and that money is much better served in getting a better monitor.

- .. [#] Most parts should be chosen based upon their value, this is particularly aimed at storage where people buy `PCIe/NVMe SSD's when they shouldn't be <https://disconsented.com/posts/effective-marketing-or-why-you-dont-need-an-nvme-ssd/>`_. Instead they need to be chosen based on value (how much you pay for x GB) rather than anything else.

- .. [#] Sometimes you may feel that others are rude. You may get a response like “Pcpartpicker list?” Although this is a very brief reply it is likely not meant to be rude. Text chat is often like human interaction without all the friendly bits. Other people have probably answered your question a dozen times today and they just want to help you solve the problem – not become close friends with you. Don’t be offended by it.

- .. [#] We're probably trying to help 5 people at once or have done the same thing 5 times in the same day please make ours and your lives easier by being clear what you want, how much money you have to make it happen, the country you live in, what you have and just communicating with use. We're happy to talk you through concerns if you actually raise them with us.



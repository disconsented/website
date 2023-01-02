.. title: Hardware is Hard
.. slug: hardware-is-hard
.. date: 2019-07-24 21:47:23 UTC+13:00
.. tags: Minecraft, Server Admin, Technical
.. category: Guide
.. link:
.. description: A guide to understanding and choosing hardware for Minecraft servers
.. type: text

================
Hardware is Hard
================
A guide to understanding and choosing hardware for Minecraft servers

The topic of server hardware appears quite frequently in `/r/syscraft <https://reddit.com/r/syscraft>`_. Sadly, this is poorly misunderstood and is at times hard to research. This article serves to help guide you through choosing the hardware for your server be it a dedicated server or a system.

| N.B.:
|    This guide presumes you're proficient with a sensible server OS(Linux) and have an appropriate network connection. It will not discuss anything about running said server, that is a whole topic of its own.


.. TEASER_END


1. What do I need?_
2. How do I evaluate performance?
3. What is the best?
4. What should I avoid?


What do I need?
---------------
There is nothing particularly special about what constitutes a server, like every other computer they're constituted with the same basic set of parts:

---
CPU
---

A Central Processing Unit is essentially a rock that we tricked into thinking, this rock is what runs your server. One key thing to understand about these is that to the untrained eye *none* of its specifications matter but instead you need evaluate its performance based on the model E.G. R7-1700 or i7-8700k. Part of the reason for this is the concept of Instructions Per Cycle (IPC) which is the amount of work a CPU can do within a cycle. This is the reason why CPU clocks are not an accurate representation of performance for further reading see the megahertz myth [2]_.

-----------
Motherboard
-----------

The motherboard is what ties everything together, without it all you have is an expensive paper weight.

------------
RAM (Memory)
------------

As fast as a CPU is, it has very limited storage capacity. RAM is used to store data that is not needed immediately.

--------------------
Storage (Not memory)
--------------------

Commonly an Solid State Drive (SSD) or Hard Disk Drive (HDD), this is what you store information on long term.

------------
Power supply
------------

Power supply, it supplies power.


How do I evaluate performance?
------------------------------

Performance is a minefield of a tricky information to decrypt that takes experience to really understand however, its not as hard as you would think to understand.

At its core evaluating performance is making use of one key technique benchmarking [0]_. In layman's terms benchmarking is the act of measuring the performance of a given thing (either software or hardware) in a given scenario. Thankfully, you do not need to do this yourself since there are many publications out there that do this for you.

However, there are a lot of bad benchmarks out there so you need to consider the following rules:

- Real world benchmarks released by major publications are king.
	Benchmarking when done properly, is time consuming which is why we rely on people who have put in the work to gather a large suite of data reliability in order to draw conclusions.

- Self-selection bias invalidates all sites using user submitted data.
	Alternate title: Don't use Userbenchmark, Cpubenchmark, Cpuboss etc. Simply put, when users are free to submit any data they're free to manipulate any data they wish. This is not always malicious but it is always problematic.

- Youtube is not a good primary source of information.
	Personal integrity of youtubers is problematic at best, with everything from endorsing grey market reselling, to personal agendas influencing reviews and everything in between. Youtube is a cesspit of at best bad information.
	
- If a testing methodology is not presented then the information should be discarded.
	We try to be at least a little bit scientific here.

- Conclusions cannot be drawn from micro-benchmarks.
	Micro-benchmarks are where you test one very specific thing consequently, this is not representative of complex systems. You don't judge the road speed of a car based on its engine RPM, same thing applies here.

- No information is always better than bad information.
	Its fine to say "I don't know", once that has been established you can make better choices suited to what you wish to achieve.
	

What is the best?
-----------------

At its core Minecraft's main logic loop is a single thread this is a fundamental issue that dictates how it runs. Consequently, Minecraft is primarily concerned with single core performance. You still need at least two cores however, the second is to offload things like Garbage Collection and non core logic threads (networking, io) to so they don't steal time from the main loop.

At the time of writing Minecraft will synchronously read/write to disk. This means that Minecraft pauses whilst it loads the world from the disk, as a result an SSD is highly recommended as their excellent *random* performance ensures that the parts of the world that need to be loaded can be found quickly.

RAM is considered by the uninformed as the most important factor for a servers performance and understandingly so as it is the one thing you can objectively measure accurately. However, RAM is very much an 'enough is enough' kind of thing and adding more will not improve things (unlike a faster CPU). I'll generally agree Aikar's recommendation of up to 10GB of RAM. [1]_

In summary:

- Single core performance is king but you still need at least 2 cores at all times.
- SSDs are strongly recommended.
- RAM is not as important as you think, 4GB might be fine, 10GB is great but 16GB probably won't help.


What should I avoid?
--------------------

This section is dedicated to those people using cheap SBCs (Raspberry Pis) and old Xeon servers. They are simply terrible for Minecraft due to their mediocre at best single core performance. You really do get what you pay for.

References
----------

.. [0] https://en.wikipedia.org/wiki/Benchmark_(computing)
.. [1] https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/
.. [2] https://en.wikipedia.org/wiki/Megahertz_myth

.. title: How should I choose my RAM?
.. slug: how-should-i-choose-my-ram
.. date: 2015-08-20 12:34:24 UTC+12:00
.. tags: resource
.. category: resource
.. link: 
.. description: How to choose RAM for a computer
.. type: text

At its simplest only two things matter for RAM: The DDR SDRAM Standard [#]_ and the capacity per DIMM [#]_.

Standard (commonly referred to as DDR3 or DDR4) should be chosen based on what your motherboard supports.

Capacity per DIMM(stick) should be chosen based on the number of slots divided by the total memory capacity of your motherboard. So a motherboard with 2 slots that supports 16GB of RAM should be using 8GB DIMM's (16/2=8).

RAM is chosen like this so that you do not need to replace it down the road in order to get full capacity. In addition running in dual channel mode does little [#]_.

How not to choose ram
---------------------

- Clock rate
- RAM timings [#]_
- Brand [#]_

The reason why for all of these things is that they have almost no effect in real world situations, you should only contemplate it when you're working in enterprise
..

        N.B: *If clock rate,timings matter for your workload 
        you shouldn't be using this as a guide*
        
        
        
        
.. [#] https://en.wikipedia.org/wiki/DDR_SDRAM#Variations/
.. [#] https://en.wikipedia.org/wiki/DIMM
.. [#] http://www.gamersnexus.net/guides/1349-ram-how-dual-channel-works-vs-single-channel/Page-3
.. [#] http://www.anandtech.com/show/7364/memory-scaling-on-haswell/7
.. [#] `Brand. </stories/brand/>`_

.. title: IRC Notes
.. slug: irc-notes
.. date: 2015-08-20 14:15:09 UTC+12:00
.. tags: 
.. category: Resource
.. link: 
.. description: A collection of notes concerning IRC that don't deserve their own page
.. type: text
.. author: Disconsented


.. [#] CPU overclocking without a T1 GPU.
.. [#] Backblaze/Seagate.
.. [#] Streaming builds.
.. [#] Multi GPU Builds.
.. [#] Future proofing.
.. [#] Drivers.
.. [#] Stubborn.
.. [#] R5.
.. [#] Windows version.

.. class:: list-spaced

- [#]_ CPU overclocking requires a large investment via a more **expensive motherboard** (Z97/Z170 etc), **aftermarket cooler** and **CPU(Intel K models)**. For *gaming*, CPU overclocking provides very **little** benefit (`even in "CPU intensive" games like ARMA 3 <http://www.techspot.com/articles-info/712/bench/CPU_01.png>`_) and instead that money should **always** be put into the GPU (unless you're using a T1 GPU which start at $600+ USD inside the current generation). For `other games <http://www.ocaholic.ch/modules/smartsection/item.php?itemid=3942&page=4>`_ its effectively no difference (including `CS:GO <http://techx1.thessdreview1.netdna-cdn.com/wp-content/uploads/2015/08/fx-8370-vs-5960x_gaming-csgo_gtx960.jpg>`_).

- [#]_  `(1) <http://www.tweaktown.com/articles/6028/dispelling-backblaze-s-hdd-reliability-myth-the-real-story-covered/index.html>`_ `(2) <https://www.backblaze.com/blog/wp-content/uploads/2015/10/blog_q3stats_manufacturer-e1444680042365.jpg>`_ `(3) <http://www.enterprisestorageforum.com/storage-hardware/selecting-a-disk-drive-how-not-to-do-research-1.html>`_ `(4) <http://www.forbes.com/sites/tomcoughlin/2015/01/29/hdd-annual-unit-shipments-increase-in-2014>`_ `(5) <http://www.hardware.fr/articles/920-6/disques-durs.html>`_ TL;DR Backblaze and anecdote are irrelevant and intellectually dishonest when talking about HDD reliability (there is no valid data available).

- [#]_ For Streaming you have two real choices: Stream using a GPU based technology (NVENC, VCE(legacy), AMF, `QuickSync <https://www.youtube.com/watch?v=idhkZy-tMTU>`_ for Nvidia, AMD and Intel GPU's respectivley) or build a dedicated capture system with a capture card. CPU streaming is not viable or acceptable.

- [#]_ Multi-GPU solutions (SLI and CrossFire) are only ever worth using with top-tier cards (such as the GTX 1080). For weaker cards, a step up to a stronger single card will bring better performance than adding another weaker card into a SLI/CrossFire setup. In addition, SLI/CrossFire also have generally poor support, to the point where some games perform worse in multi-GPU setups. In addition multi card setups increase power consumption and temperature linearly with the amount of cards added. `Techpowerup <https://www.techpowerup.com/reviews/AMD/RX_480_CrossFire/21.html>`_ found that "only 6 out of 16 tests are taking advantage of the second card." for Crossfire Rx480's(Thanks Gleeb). `Nvidia <https://www.techpowerup.com/reviews/NVIDIA/GeForce_GTX_1080_SLI/23.html>`_ isn’t any better.

- [#]_ Future proofing is about hardware not becoming obsolete however due to generational release cycles this is impossible. The closest thing you can do is make smart choices today and pocket some money for an upgrade tomorrow.

- [#]_ Windows (especially modern versions like 10) are very good when it comes to handling drivers, as a result the only drivers you should be installing are those for things that don't work (and always grab the latest drivers from the manufacturers website, so throw away that disk!); except for GPU drivers which you should always keep up to date!

- [#]_ <fwaggle> look i'm already set on riding a motorcycle without a helmet i'm just looking for advice on which seatbelt is best for my hayabusa, not a lecture on helmets thanks

- [#]_ For the information we have avaliable even after all the troubles that the AM4 platform has had we're seeing generally `better metrics of lower fps <http://www.gamersnexus.net/hwreviews/2875-amd-r5-1600x-1500x-review-fading-i5-argument>`_ even with Nvidia drivers presenting issues `[1] <http://images.anandtech.com/graphs/graph11244/86346.png>`_ `[2] <http://images.anandtech.com/graphs/graph11244/86430.png>`_

- [#]_ Retail Windows is the only version of Windows *most* people should consider as it can be moved between systems, unlike OEM Windows which is bound to the motherboard it is first activated with.
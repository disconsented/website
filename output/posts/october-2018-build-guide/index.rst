.. title: October 2018 Build Guide
.. slug: october-2018-build-guide
.. date: 2018-10-27 19:30:38 UTC+13:00
.. tags: Build Guide
.. category: Build Guide
.. link: 
.. description: Ding dong the witch is dead
.. type: text

This has been a long time coming, I decided to skip over the Raven Ridge an Pinnacle Ridge releases since we had an accurate idea of what they were going to be. However, Coffee Lake-R and Turing have both entered the fray. It has been an exciting few months to say the least. On the plus side Pascal, Polaris and Vega are at sensible prices again.


.. TEASER_END

Changelog
---------

#. Added Nvidia Turing
#. Added Intel Coffee Lake-R
#. Added CPU Tier 0
#. Removed EVGA G3 due to OCP issues
#. Replaced S12/M12 PSU's with CM Masterwatt
#. Removed Titan V
#. Added Z390 VRM note
#. Reshuffled CPU tiers

(Thanks `/u/awesomegamer919 <https://old.reddit.com/user/awesomegamer919>`_)

.. class:: pure-table pure-table-horizontal

+-----------------------------------------------------+------+--------------+------------------------+
| GPU                                                 | Tier | MSRP         | Recommended Resolution |
+=====================================================+======+==============+========================+
| Titan X(Pascal), Titan XP [7]_, RTX 2080ti          | 0    | >$900        | 1440p+, 2160p [8]_     |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1080ti, RTX 2080                                | 1    | $700, $700+  | 1440p+, 2160p [8]_     |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1080, RX Vega 64, RTX 2070                      | 2    | $600         | 1440p                  |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1070 ti, RX Vega 56                             | 3    | $450, $500   | 1440p                  |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1070                                            | 4    | $380         | 1440p                  |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1060 6GB, RX 580                                | 5    | $250, $230   | 1080p+ [8]_            |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1060 3GB, RX 570                                | 6    | $200, $170   | 1080p                  |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1050ti                                          | 7    | $140         | 1080p                  |
+-----------------------------------------------------+------+--------------+------------------------+
| RX 560                                              | 8    | $100         | 720p                   |
+-----------------------------------------------------+------+--------------+------------------------+
| GTX 1050                                            | 9    | $110         | 720p                   |
+-----------------------------------------------------+------+--------------+------------------------+
| RX 550                                              | 10   | $80          |                        |
+-----------------------------------------------------+------+--------------+------------------------+
| GT 1030, 2400G (Vega 11)                            | 11   | $80, $170    |                        |
+-----------------------------------------------------+------+--------------+------------------------+
| 2200G (Vega 8)                                      | 12   | $100         |                        |
+-----------------------------------------------------+------+--------------+------------------------+

Much the same as any other update except for the tiering of Turing, due to its current pricing and the real lack of rasterisation performance improvements. I do _NOT_ recommend the Turing cards for gaming under any circumstances, because of these two factors buy Pascal whilst you can at these prices.

 
|	N.B. These lists generally only cover parts you would look at for gaming which means you won't see HEDT/Workstation parts here.
|	2. Tier 0 exists to show what is out there, its generally recommended that you avoid tier 0.

CPU, RAM, Motherboard
---------------------
.. class:: pure-table pure-table-horizontal


+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| Tier [5]_| CPU                                         | CPU Cooler                                                                | Motherboard [4]_                                                                            | RAM                                     |
+==========+=============================================+===========================================================================+=============================================================================================+=========================================+
| 0        | i9-9900k                                    | Good 240MM CLC (CFL-R is soldered)                                        | Z390 with above average VRMs[11]_, 4 RAM slots (when not mITX)                              | 2x8 or 1x16 DDR4 2666MHz 288 pin SDRAM  |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 1        | i7-8700k, i5-8600k, i7-9700k, i5-9600k      | Good 240MM CLC with delid(CFL-R is soldered)                              | Z370 (Z270 is not compatible), 4 RAM slots (when not mITX)                                  | 2x8 or 1x16 DDR4 2666MHz 288 pin SDRAM  |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 2        | R7-2700, 2700x [3]_                         | Good single tower air cooler like an Cryorig H5 Universal or Wraith Prism | B450, X470, 4 RAM slots (when not mITX), 0 PCI slots with above average VRM                 | 2x8 or 1x16 DDR4 3GHz+ 288 pin SDRAM    |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 2        | i7-8700 (non k) [10]_                       | M9i [10]_                                                                 | Z370, H370, B360 (Z/B/H2## motherboards are not compatible), 4 RAM slots (when not mITX)    | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 3        | R7-2700                                     | Wraith Spire (Stock cooler)                                               | B450, X470, 4 RAM slots (when not mITX), 0 PCI slots                                        | 2x8 or 1x16 DDR4 3GHz+ 288 pin SDRAM    |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 3        | i5-8400, i5-8500, i5-8600,                  | Intel Stock Cooler                                                        | Z370, H370, B360 (Z/B/H2## motherboards are not compatible), 4  RAM slots (when not mITX)   | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 3        | R5-2600, R5-2600x [3]_                      | Wraith Stealth (Stock Cooler), Wraith Spire (Stock Cooler), Cryorig M9A   | B450, X470, 4 RAM slots (when not mITX), 0 PCI slots                                        | 2x8 or 1x16 DDR4 2666MHz+ 288 pin SDRAM |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 4        | 2400G                                       | Wraith Stealth (Stock Cooler), Cryorig M9A [6]_                           | B450, X470, 4 RAM slots (when not mITX), 0 PCI slots                                        | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+
| 5        | 2200G                                       | Wraith Stealth (Stock Cooler), Cryorig M9A [6]_                           | B450, X470, 4 RAM slots (when not mITX), 0 PCI slots                                        | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+----------+---------------------------------------------+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------+

Coffee Lake-R is a mixed bag here, the slightly higher boost clocks are nice but not enough to offset its price premium. It is soldered but not as well as we would like so its not much of an improvement and lastly, the i7-9900k sits between two stools here due to its price. Need single core performance? Overclock and 8700k. Cores? Pinacle Ridge (and save a ton) or Colfax (Threadripper+) and enjoy 32c.

|	N.B. Much like above Tier 0 exsists as 'probably shouldn't  buy' set of parts.

Everything Else
---------------
.. class:: pure-table pure-table-horizontal


+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| Tier [5]_  | SSD (Required) [1]_       | HDD (Recommended) [2]_  | PSU                                                                                                                             | Monitor [5]_                         | GPU Tier |
+============+===========================+=========================+=================================================================================================================================+======================================+==========+
| 1          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 650w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M                                              | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1        |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 2          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M                                              | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1        |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 3          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M                                              | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1-4      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 3          | 480 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M                                              | 1080p+, 1440p                        | 1-4      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 4          | 240 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M                                              | 1080p+, 1440p                        | 2-5      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 4          | 240 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label) , Fractal Integra M or BeQuiet Pure Power 10                         | 1080p+, 1440p                        | 2-5      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 5          | 240 GB SATA (M.2 or 2.5") | >1 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label) , Fractal Integra M or BeQuiet Pure Power 10                         | 1080p IPS                            | 5-6      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 6          | 240 GB SATA (M.2 or 2.5") | >1 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label), CM Masterwatt, Fractal Integra M or BeQuiet Pure Power 10           | 1080p IPS                            | 5-6+     |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+


Footnotes
---------

.. [1] NVMe, PCIe drives should be avoided, see `"Effective marketing or why you don't need an NVMe SSD" <https://disconsented.com/posts/effective-marketing-or-why-you-dont-need-an-nvme-ssd/>`_ and `"M.2, NVMe, Optane and You" <https://disconsented.com/posts/m2-nvme-optane-and-you/>`_ for why.
.. [2] 7200 RPM HDD's provide the best value, there is no valid data on reliability.
.. [3] These are all the same CPU, the difference is stock clocks and the bundled cooler. They overclock to the same point.
.. [4] When presented with multiple choices choose the cheapest that has the features that you will actually use.
.. [5] Assumption of gaming.
.. [6] This general price range of cooler, never get the CooleMaster 212 unless there is no better option (last choice.)
.. [7] Please do not buy these for gaming.
.. [8] The + means that it is a bit more powerful than needed for the tier or high refresh/adaptive sync.
.. [9] You normally want to choose the Raven Ridge equivalent over these since they both feature an on-board GPU and have a single CCX removing the primary reason for high clocked RAM.
.. [10] This is a special case in that it requires both an after-market cooler (due to thermal throttling on stock) and above average VRMs (VRM throttling) as reported by `TechSpot <https://www.techspot.com/review/1603-intel-b360-chipset/>`_.
.. [11] `Handy guide <https://cdn.discordapp.com/attachments/266659797712109568/506772541130670092/VRMZ390.PNG>`_


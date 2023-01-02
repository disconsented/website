.. title: April 2018 Build Guide
.. slug: april-2018-build-guide
.. date: 2018-04-21 10:31:30 UTC+12:00
.. tags: Build Guide
.. category: Build Guide
.. link: 
.. description: Another day another release
.. type: text

We've had a couple of 'exciting' months in terms of releases! Pinnacle Ridge and Raven Ridge have both been released into the wild along with Intel's reactive motherboard's (B360, H310 and H370) and CPUs (i5-8600). All up this has been a somewhat exciting couple of months since the last guide, PR narrows the gap with both clocks and IPC (thanks to AMD's improvements to the cache `espically L2 <https://www.anandtech.com/show/12625/amd-second-generation-ryzen-7-2700x-2700-ryzen-5-2600x-2600/4>`_) but this ultimately doesn't change my person recommendations of if it's not an 8700k go with Zen.


.. TEASER_END

Changelog
---------

#. Moved the 2400G to T11 along side the GT 1030.
#. Moved the 2200G to T12.
#. Replaced Summit Ridge recommendations with Pinnacle Ridge.
#. Removed remaining Summit Ridge recommendations in favour of Raven Ridge.
#. Split up tables for mobile/Non-Widescreen users.
#. Added a note concerning the i7-8700 thermal and VRM throttling.

GPU Tiers
---------
.. class:: pure-table pure-table-horizontal

+------------------------------------------+------+--------------+------------------------+
| GPU                                      | Tier | MSRP         | Recommended Resolution |
+==========================================+======+==============+========================+
| Titan V, Titan X(Pascal), Titan XP [7]_  | 0    | >$900        | 1440p+ [8]_            |
+------------------------------------------+------+--------------+------------------------+
| GTX 1080ti                               | 1    | $700         | 1440p+ [8]_            |
+------------------------------------------+------+--------------+------------------------+
| GTX 1080, RX Vega 64                     | 2    | $600         | 1440p                  |
+------------------------------------------+------+--------------+------------------------+
| GTX 1070 ti, RX Vega 56                  | 3    | $450, $500   | 1440p                  |
+------------------------------------------+------+--------------+------------------------+
| GTX 1070                                 | 4    | $380         | 1440p                  |
+------------------------------------------+------+--------------+------------------------+
| GTX 1060 6GB, RX 580                     | 5    | $250, $230   | 1080p+ [8]_            |
+------------------------------------------+------+--------------+------------------------+
| GTX 1060 3GB, RX 570                     | 6    | $200, $170   | 1080p                  |
+------------------------------------------+------+--------------+------------------------+
| GTX 1050ti                               | 7    | $140         | 1080p                  |
+------------------------------------------+------+--------------+------------------------+
| RX 560                                   | 8    | $100         | 720p                   |
+------------------------------------------+------+--------------+------------------------+
| GTX 1050                                 | 9    | $110         | 720p                   |
+------------------------------------------+------+--------------+------------------------+
| RX 550                                   | 10   | $80          | -                      |
+------------------------------------------+------+--------------+------------------------+
| GT 1030, 2400G (Vega 11)                 | 11   | $80, $170    | -                      |
+------------------------------------------+------+--------------+------------------------+
| 2200G (Vega 8)                           | 12   | $100         | -                      |
+------------------------------------------+------+--------------+------------------------+

N.B. There are musings that crypto is starting to die down a bit due to the ETH ASIC miner but it hasn't crashed just yet so be careful.

CPU, RAM, Motherboard
---------------------
.. class:: pure-table pure-table-horizontal


+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| Tier [5]_  | CPU                       | CPU Cooler                                                                | Motherboard [4]_                                                                               | RAM                                     |
+============+===========================+===========================================================================+================================================================================================+=========================================+
| 1          | 8700k, 8600k              | Good 240MM CLC with delid                                                 | Z370 (Z270 is not compatible), 4 RAM slots (when not mITX)                                     | 2x8 or 1x16 DDR4 2666MHz 288 pin SDRAM  |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 2          | R7-2700, 2700x [3]_       | Good single tower air cooler like an Cryorig H5 Universal or Wraith Prism | B350, X470, 4 RAM slots (when not mITX), 0 PCI slots with above average VRM                    | 2x8 or 1x16 DDR4 3GHz+ 288 pin SDRAM    |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 3          | R7-2700                   | Wraith Spire (Stock cooler)                                               | B350, X470, 4 RAM slots (when not mITX), 0 PCI slots                                           | 2x8 or 1x16 DDR4 3GHz+ 288 pin SDRAM    |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 3          | i7-8700 (non k) [10]_     | M9i [10]_                                                                 | Z370, H370, B360 (Z/B/H2## motherboards are **not** compatible), 4 RAM slots (when not mITX)   | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 4          | i5-8400, i5-8500, i5-8600 | Intel Stock Cooler                                                        | Z370, H370, B360 (Z/B/H2## motherboards are **not** compatible), 4 RAM slots (when not mITX)   | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 4          | R5-2600, R5-2600x [3]_    | Wraith Stealth (Stock Cooler), Wraith Spire (Stock Cooler), Cryorig M9A   | B350, X470, 4 RAM slots (when not mITX), 0 PCI slots                                           | 2x8 or 1x16 DDR4 2666MHz+ 288 pin SDRAM |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 5          | 2400G                     | Wraith Stealth (Stock Cooler), Cryorig M9A [6]_                           | B350, X470, 4 RAM slots (when not mITX), 0 PCI slots                                           | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+
| 6          | 2200G                     | Wraith Stealth (Stock Cooler), Cryorig M9A [6]_                           | B350, X470, 4 RAM slots (when not mITX), 0 PCI slots                                           | 2x8 or 1x16 DDR4 2400MHz+ 288 pin SDRAM |
+------------+---------------------------+---------------------------------------------------------------------------+------------------------------------------------------------------------------------------------+-----------------------------------------+

Everything Else
---------------
.. class:: pure-table pure-table-horizontal


+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| Tier [5]_  | SSD (Required) [1]_       | HDD (Recommended) [2]_  | PSU                                                                                                                             | Monitor [5]_                         | GPU Tier |
+============+===========================+=========================+=================================================================================================================================+======================================+==========+
| 1          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 650w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M and EVGA G3                                  | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1        |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 2          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M and EVGA G3                                  | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1        |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 3          | 480 GB SATA (M.2 or 2.5") | >3 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M and EVGA G3                                  | 1440p Adaptive Sync IPS, 4k IPS, 4K+ | 1-4      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 3          | 480 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M and EVGA G3                                  | 1080p+, 1440p                        | 1-4      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 4          | 240 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | Good 550w+  80+ Gold PSU like Corsair RMx, Seasonic Focus Plus, Bitfenix Whisper M and EVGA G3                                  | 1080p+, 1440p                        | 2-5      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 4          | 240 GB SATA (M.2 or 2.5") | >2 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label) , Fractal Integra M or BeQuiet Pure Power 10                         | 1080p+, 1440p                        | 2-5      |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 5          | 240 GB SATA (M.2 or 2.5") | >1 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label) , Fractal Integra M or BeQuiet Pure Power 10                         | 1080p IPS                            | 5-11     |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+
| 6          | 240 GB SATA (M.2 or 2.5") | >1 TB 7200 RPM          | <= Good 500w 80+ Bronze PSU like Corsair CXM (white label), Seasonic  S12 II/M12 II, Fractal Integra M or BeQuiet Pure Power 10 | 1080p IPS                            | 5-11     |
+------------+---------------------------+-------------------------+---------------------------------------------------------------------------------------------------------------------------------+--------------------------------------+----------+

Footnotes
---------

.. [1] NVMe, PCIe drives should be avoided, see `"Effective marketing or why you don't need an NVMe SSD" <https://disconsented.com/posts/effective-marketing-or-why-you-dont-need-an-nvme-ssd/>`_ and `"M.2, NVMe, Optane and You" <https://disconsented.com/posts/m2-nvme-optane-and-you/>`_ for why.
.. [2] 7200 RPM HDD's provide the best value, there is no valid data on reliability.
.. [3] These are all the same CPU, the difference is stock clocks and the bundled cooler. They overclock to the same point.
.. [4] When presented with multiple choices choose the cheapest that has the features that you will actually use.
.. [5] Assumption of gaming.
.. [6] This general price range of cooler, never get the Coolermaster 212 unless there is no better option (last choice.)
.. [7] Please do not buy these for gaming.
.. [8] The + means that it is a bit more powerful than needed for the tier or high refresh/adaptive sync.
.. [9] You normally want to choose the Raven Ridge equivalent over these since they both feature an onboard GPU and have a single CCX removing the primary reason for high clocked RAM.
.. [10] This is a special case in that it requires both an aftermarket cooler (due to thermal throttling on stock) and VRM throttling as reported by `TechSpot <https://www.techspot.com/review/1603-intel-b360-chipset/>`_.

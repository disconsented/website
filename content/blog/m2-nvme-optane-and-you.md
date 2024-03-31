+++
title = "M.2, NVMe, Optane and You"
date = 2017-05-19T10:50:56+12:00
updated = 2017-05-19T10:50:56+12:00
draft = false
[taxonomies]
year = ["2017"]
+++

This is a legacy article from the old version of this site, it is included for posterity. 

There\'s a lot of confusion out in the wilds about SSD\'s and their
various technologies so I am going to provide a reference of what
everything is.

<!-- more -->

To start with we have a handful of relevant terms:

-   [M.2/NGFF](https://en.wikipedia.org/wiki/M.2)
-   [Advanced Host Controller Interface
    (AHCI)](https://en.wikipedia.org/wiki/Advanced_Host_Controller_Interface)
-   [Non-Volatile Memory Express
    (NVMe)](https://en.wikipedia.org/wiki/NVM_Express)
-   [Serial AT Attachment
    (SATA)](https://en.wikipedia.org/wiki/Serial_ATA)
-   [Peripheral Component Interconnect Express
    (PCIe)](https://en.wikipedia.org/wiki/PCI_Express)

We will start with M.2 since it\'s the most misunderstood. People tend
to think it means the interface or protocol (PCIe or NVMe respectively).
In reality, the important thing to understand is that it is simply a
form factor and has little impact on the real world (boot times, load
times) performance of the drive. This is best compared to the 2.5" and
PCIe form factors (not to be confused with the PCIe interface).

M.2 has the ability to use SATA, PCIe, or USB 3.0 interfaces, but for
our purposes we're only concerned with PCIe and SATA.

AHCI is the legacy (read: old) protocol developed by Intel for
interfacing mechanical hard drives(controllers) with the rest of the
system.

NVMe is the replacement for AHCI; the important thing here is that it
has been designed to be used specifically with SSD's and as a result can
allow them to better utilize the bandwidth provided via the PCIe bus.

SATA is the interface that most SSD's use to transfer information
between the SSD and the rest of the computer. Although technically not
legacy, it has been superseded by PCIe.

PCIe is another relatively old interface. The important distinction
between this and SATA is that PCIe is not just for storage devices due
to it having massively more bandwidth. A single PCIe 3.0 lane provides
7.88Gb/s of bandwidth which scales up to 126Gb/s with 16 lanes. This is
what enables modern SSD's raw bandwidth.

This is great and all but what does it mean for the average user?

Practically nothing, the problem is that the performance difference just
doesn\'t matter for consumers.

As shown by [Techreport's Samsung 960 EVO
review](http://techreport.com/review/30993/samsung-960-evo-ssd-reviewed/5),
there is no noticeable difference in boot times or application
(including game) load times when compared to the older SATA based SSDs.
PCIe/NVMe SSD's are just **not worth the price premium**, so when
shopping for an SSD look for what is the **best value drive (\$/GB)**.

[3D Xpoint (also known as
Optane)](https://en.wikipedia.org/wiki/3D_XPoint) is a collaborative
effort between Intel and Micron to attempt to bridge the gap between
DRAM and classic NAND storage. This provides many of the performance
benefits, to a lesser extent, of DRAM (specifically in low latencies and
higher bandwidth) but with the bonus of it being Non-Volatile. In
English, this means when the drive is unpowered it will keep what\'s
stored on it. Ultimately besides this being a fledgling technology this
has the same practical problem as PCIe SSD's. It's not worth what it
costs and is only really a consideration for workstations and servers.

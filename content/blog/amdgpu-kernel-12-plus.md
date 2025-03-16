+++
title = "An AMDGPU regression in 6.12"
date =  2025-03-17
updated = 2025-03-17
draft = false
[taxonomies]
year = ["2025"]
categories = ["amd", "amdgpu", "linux"]
+++

> TL;DR Linux Kernel 6.11.10+/6.12/6.13 has AMDGPU regressions.
>
> Add `Option "SWCursor" "True"` to `/usr/share/X11/xorg.conf.d/10-amdgpu.conf` to resolve.
>
> Other's note `amdgpu.dcdebugmask=0x10` as a kernel parameter helps, didn't work for me.


<!-- more -->



https://community.frame.work/t/amd-framework-13-7840u-fedora-41-kernel-6-13-4-freezing/65188/3

https://bbs.archlinux.org/viewtopic.php?id=290868

`inxi -Gxx | grep compositor`

```
❯ inxi -Gxx | grep compositor

~
```

Updating to Kernel 6.12, (after waiting for zfs-dkms to take a proverbial forever) I'd noticed that _after opening an
application in AwesomeWM_ moving the mouse would bring my system to a halt.

I'd run into a regression on the kernel side of things with 6.11.10 which I'd not upgraded to. At the time, I just
migrated back to kernel 6.6.67 and moved on for a while.

ZFS (and zfs-dkms) now support 6.13, so I was forced to revisit this after updating. A few folks recommended setting
`amdgpu.dcdebugmask=0x10` as a kernel parameter, this didn't work.

https://www.reddit.com/r/archlinux/comments/1gzy0xd/amdgpu_regression_on_kernel_612_choppy/

Digging around, I'd noticed a post on the arch forums that suggested this may be an issue with the compositor. However,
I am presently not using any with AwesomeWM.

https://bbs.archlinux.org/viewtopic.php?id=290868

About this time, I checked Plasma, and, interestingly enough, the issue was not present there. Maybe this can be due to
my _lack_ of a compositor?

Regardless, I'd also observed I had a little bit of time until this issue cropped up, namely opening in Firefox. At this
time, I was able to observe in htop that xorg was pegging a core at 100% for a while. Thankfully, this let me find this
obscure comment on the _Manjaro_ forum.

https://forum.manjaro.org/t/high-cpu-use-by-xorg-with-kernel-6-12/174418/12

So I modified my `/etc/X11/xorg.conf.d/20-amdgpu.conf` to the following:

```
❯ cat /etc/X11/xorg.conf.d/20-amdgpu.conf
───────┬─────────────────────────────────────────────
       │ File: /etc/X11/xorg.conf.d/20-amdgpu.con
       │ f
───────┼─────────────────────────────────────────────
   1   │ Section "OutputClass"
   2   │      Identifier "AMD"
   3   │      MatchDriver "amdgpu"
   4   │      Driver "amdgpu"
   5   │      Option "VariableRefresh" "true"
   6   │      Option "SWCursor" "true"
   7   │ EndSection
───────┴─────────────────────────────────────────────
```

Trying it out, and, success!

```bash
❯ neofetch | lolcat
                   -`                    disconsented@cadia
                  .o+`                   ------------------
                 `ooo/                   OS: Arch Linux x86_64
                `+oooo:                  Host: B650 Pro RS
               `+oooooo:                 Kernel: 6.13.7-arch1-1
               -+oooooo+:                Uptime: 1 hour, 15 mins
             `/:-:++oooo+:               Packages: 1556 (pacman)
            `/++++/+++++++:              Shell: fish 4.0.1
           `/++++++++++++++:             Resolution: 3440x1440
          `/+++ooooooooooooo/`           WM: awesome
         ./ooosssso++osssssso+`          Theme: Breeze-Dark [GTK2/3]
        .oossssso-````/ossssss+`         Icons: breeze [GTK2/3]
       -osssssso.      :ssssssso.        Terminal: alacritty
      :osssssss/        osssso+++.       CPU: AMD Ryzen 9 7950X3D (32)
     /ossssssss/        +ssssooo/-       GPU: AMD ATI Radeon RX 7900 XT
   `/ossssso+/:-        -:/+osssso+-     GPU: AMD ATI 11:00.0 Raphael
  `+sso+:-`                 `.-/+oso:    Memory: 18258MiB / 63402MiB
 `++:.                           `-/+/
 .`                                 `/

```

At this point, I am not entirely sure what's gone on. And, frankly I lack the skills and interest to dig further. I hope
my process and discovery is helpful to someone else!



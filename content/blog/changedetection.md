+++
title = "ChangeDetection.io success"
date =  2025-02-10T01:07:07.691
updated = 2025-02-10T01:07:07.691
draft = false
[taxonomies]
year = ["2025"]
+++
I've found myself often distracted waiting for websites to update, specifically checking for deals or show releases. So, like any good engineer, I've decided to automate this using [changedetection.io](https://github.com/dgtlmoon/changedetection.io), and, here's what I've come up with to satisfy my undefined requirements.
<!-- more -->
## PriceSpy daily deals

Short and simple, we're just concatenating the children of a given element. 
```xpath
xpath://html/body/div[1]/div[3]/section/section/div[2]/div/div/div[2]/div/section/div[2]/div[2]/div[2]/div[*]/concat(div[1]/div/div[2]/div/span, " (",a/div/div[2]/div[1]/div/span[2],"): ", a/div/div[1]/span[2], " (", a/div/div[1]/span[1], ")")
```
```shell,hide_lines=3-30
12% ($89.00): SteelSeries Aerox 3 (Mice & Pointing Devices)
11% ($144.99): TP-Link Deco X20 Whole-Home Mesh WiFi Router (1-pack) (Routers)
19% ($101.20): MikroTik LtAP mini LTE kit RB912R-2nD-LTm&R11e-LTE (Access Points, Bridges & Repeaters)
15% ($425.44): Fiio SP3 Aktive (PC Speakers)
10% ($98.98): Razer Basilisk V3 X HyperSpeed (Mice & Pointing Devices)
15% ($241.96): LaCie Mobile Drive Secure 4tb Grå, Silver (External Hard Drives)
14% ($295.32): TP-Link JetStream TL-SG3428MP (Switches)
13% ($258.00): Oppo A78 5G Dual SIM 4GB RAM 128GB (Mobile Phones)
17% ($199.00): Benq GW2780 27" Full HD IPS (Monitors)
14% ($148.00): HyperX Alloy Origins HyperX Aqua (EN) (Computer Keyboards)
14% ($309.01): J5Create Thunderbolt 4 Dockningsstation (Laptop Docking Stations)
43% ($59.00): One NZ Smart T23 2GB RAM 32GB (Mobile Phones)
10% ($175.19): Satechi USB4 Multiport Adapter with 8K HDMI (Laptop Docking Stations)
10% ($108.00): Satechi 2-in-1 Headphone Stand With Wireless Charger (Wireless Chargers)
13% ($119.25): SanDisk USB 3.1 iXpand Flip 256GB (USB Flash Drives)
11% ($337.49): Goal Zero Boulder 100 (Power Banks)
16% ($2,554.05): HP Aruba 6100 48G 4SFP+ (JL676A) (Switches)
25% ($622.08): Mimosa B24 (Access Points, Bridges & Repeaters)
15% ($727.00): Apple Mac Mini (2023) - M2 CPU/GPU 10C 8GB 256GB (Desktop PCs)
29% ($471.53): Seagate FIRECUDA 540 NVME SSD 2TB (SSD (Solid State Drives))
12% ($778.83): LaCie 1big Dock Thunderbolt 3 8TB (NAS Servers)
12% ($545.00): Audioengine A5+ Wireless (PC Speakers)
```

## Anime schedule

This one's a tad more complex, and, something I put together earlier before working out how to concat results.

Thankfully, their markup is well annotated so we can do some simple child class/id selectors.

```xpath
xpath://*[@id="active-day"]//div[not(contains(@class, 'filtered-out'))]//*[contains(@class, 'show-title') or contains(@class, 'show-episode')]
```
And we format the notification with the following jinja2 template.
```python
    {% set list1 = current_snapshot.split('\n') %}
    # Todays Releases
    ```diff
    {% for i in range(0, list1 | count, 3) %}+ {{list1[i]}} - {{list1[i+2]}}
    {% endfor %}
    ```
```
Which results in:
```markdown
    ChangeDetection.io Notification - https://animeschedule.net/
    
    # Todays Releases
    ```diff
    + Blue Lock VS. U-20 JAPAN - Ep 14F
    + A-Rank Party wo Ridatsu shita Ore wa, Moto Oshiego-tachi to Meikyuu Shinbu wo Mezasu. - Ep 3
    + Maou 2099 - Ep 12F
    + Solo Leveling 2nd Season: Arise from the Shadow - Ep 4
    + Ao no Exorcist: Yosuga-hen - Ep 3
    + Medalist - Ep 6
    + Yu☆Gi☆Oh! Go Rush!! - Ep 5
    + SAKAMOTO DAYS - Ep 6
    ```
```
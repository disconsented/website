.. title: Effective marketing or why you don't need an NVMe SSD
.. slug: effective-marketing-or-why-you-dont-need-an-nvme-ssd
.. date: 2017-11-15 18:34:27 UTC+13:00
.. tags: Rant, SSD
.. category: Educational
.. link: 
.. description: Common misconceptions about the usage of NVMe drives
.. type: text

I need to start this with TechReport's `excellent review on the Samsung  960 evo SSD <http://techreport.com/review/30993/samsung-960-evo-ssd-reviewed/5>`_.

I have been intending to write this article for a long while but have never been able to devote the time to it. Many of these statements are taken verbatim  from both Discord and IRC (I won’t point out which ones for the sake of user privacy).

.. TEASER_END

``Honestly I have no idea. I just assumed it was a bit better, and it looks really cool. I needed a bigger SSD and more SSD in general``

This is a very reasonable way to think because on paper the NVMe protocol (see `this <https://disconsented.com/posts/m2-nvme-optane-and-you/>`_ for an explanation of the jargon) is strictly better than the old AHCI drives but the point that many people don't understand is that the differences don't manifest themselves on the ways that we expect.

Typically when I see this, most people care about boot times and load times. TechReport to the rescue again, they show us that NVMe drives largely have no impact on `boot times <http://techreport.com/r.x/2016_11_19_960EVO/boot-loaded.png>`_, `loading IDEs <http://techreport.com/r.x/2016_11_19_960EVO/load-vs.png>`_ or `games <http://techreport.com/r.x/2016_11_19_960EVO/load-tomb.png>`_. As shown here these differences in realistic workloads are practically non-existent.

::

	I was building a new PC, I also do some dev work soo I really wanted a bigger Drive
	so now I can have hackintosh, linux and windows boots haha

	Just basic C# stuff, some web and unity

Context is hard to include here without identifying this user but the problem here lies with the price difference between a `PICe NVMe drive and a SATA 3 AHCI drive <https://pcpartpicker.com/products/compare/RKhj4D,4cyxFT/>`_. The important entry here is 'Price/GB' line showing how you get almost *twice as much SSD per dollar* with the MX300 over the 960 Evo ($0.27 vs $0.44 respectively or 47.9% difference).


``Well I mean I can afford it and I play a lot of games as well and I heard they are better. I don't really have to justify it to you tbh``

Behaviour aside there is a minimal difference at best in load times for games implying that your bottleneck lies elsewhere (`Arkham City <http://techreport.com/r.x/2016_11_19_960EVO/load-bat.png>`_, `Tomb Raider (2013) <http://techreport.com/r.x/2016_11_19_960EVO/load-tomb.png>`_ and `Shadow of Mordor <http://techreport.com/r.x/2016_11_19_960EVO/load-tomb.png>`_).

``USERBENCH likes my game SSD because it's basically empty``

For those that don't know 'USERBENCH' refers to refers to http://www.userbenchmark.com/ which is an (unfortunately) popular website, its problems are two-fold. 

#. User submitted data, the biggest problems with this specifically `self-selection bias <https://en.wikipedia.org/wiki/Self-selection_bias>`_. For our purposes, this includes people with agenda and provides no mechanism to account for other variables.
#. Synthetic benchmarks, by far the larger problem is that people don't understand that a synthetic benchmark means that its only measuring that workload and doesn't represent anything you might do in the real world.

``Not everything is about price to performance, I mean, 160 for NVMe 250g vs 120 for SSD you pay 40 extra but you get slightly faster? Sign me up``

Well, $/perf isn't that relevant to an SSD due to the imperceptible differences that you will get in real-world consumer workloads. The real metric that matters (which I alluded to above) is $/GB due to the only thing we can measure for an appreciable difference is the storage capacity offered by a larger drive.

::

	yea I just want the fastest
	idrc
	
Same as above. 

As per the request of `/u/awesomegamer919 <https://www.reddit.com/user/awesomegamer919>`_ I need to mention both Optane (900p and Optane Memory as of Q4 2017) and when these drives make sense.

Optane falls under the same problem as other NVMe drives in that it doesn't offer a meaningful performance benefit even if it is drastically faster than drives like the Samsung 960 Pro in some workloads. The real area where these drives tend to shine is 

#. Servers, specifically high volume database and other storage I.O. bound servers.
#. Workstations, specifically high-end ones where your development environment takes several minutes to open.

Both of these kinds of workloads are the few that do see a genuine benefit from faster drives but those people typically won't be reading this site.

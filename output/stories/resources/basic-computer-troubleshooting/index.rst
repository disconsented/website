.. title: Basic Computer Troubleshooting
.. slug: basic-computer-troubleshooting
.. date: 2016-07-18 14:39:56 UTC+12:00
.. tags: Troubleshooting
.. category: Resource
.. link: 
.. description: Basic system troubleshooting steps
.. type: text

Computer Won't Boot? Try these!
===============================

Adapted from [#]_.

1. Did you verify that the RAM is fully seated?
	You should hear an audible click for each of the tabs that are on both sides of the slot. **Triple check this!** lots of new builders fail to seat their RAM fully due to DDR4 having tapered edges (reseat your RAM just in case!). Some motherboard's can be picky about which slots must be populated so consult your manual.

.. thumbnail:: /images/troubleshoot/ram-mount.png

2. Did you **carefully** read the motherboard manual?

3. Did you plug in the 4/8 pin CPU power connector?
	Normally located at the top left hand corner of the motherboard there is a 4 or 8 pin connector that requires the **CPU Power or 12v EPS/ATX** connector. The system will not boot without this.
	They look something like:
	
.. thumbnail:: /images/troubleshoot/motherboard-power-connectors.png
.. thumbnail:: /images/troubleshoot/4plus4power.png
.. thumbnail:: /images/troubleshoot/4plus4connected.png

4. Did you install the motherboard standoffs?
	Standoff's stop your motherboard from short circuiting against the chassis. Make sure you install all of the ones that line up with the holes in your motherboard.
	
.. thumbnail:: /images/troubleshoot/standoff.png
.. thumbnail:: /images/troubleshoot/standoff-tray.png

5. Did you verify that the video card is fully seated?
	You should hear an audible click for each of the tabs on the PCIe lane. Both sides should also be level with each other
	
6. Did you plug in GPU power?
	Most graphics cards have 1-2 6 or 8 (6+2) pin power connectors, make sure they're all plugged in.

.. thumbnail:: /images/troubleshoot/6pin-power.png
.. thumbnail:: /images/troubleshoot/6plus2power.png
	
7. Did you remove the plastic guard over the CPU socket?

.. thumbnail:: /images/troubleshoot/cpu-cover.png

8. Did you install the CPU correctly?
	CPU's need to be aligned with the notches/arrows on the motherboard.
	
.. thumbnail:: /images/troubleshoot/cpu-notches.png
.. thumbnail:: /images/troubleshoot/pga-socket.png

9. Are there any bent pins on the motherboard/CPU?

.. thumbnail:: /images/troubleshoot/bent-pin.png

10. If you're using an aftermarket CPU cooler, did you get any thermal compound on the motherboard, CPU socket or CPU pins?
	Even a tiny amount can be an issue.
	
11. Is the CPU fan plugged into the CPU fan header?
	This is normally annotated as 'CPU FAN' on the motherboard by the 3/4pin header.

12. Is the bottom of the CPU cooler clear of any foreign material, and did you remove any protective covering?

.. thumbnail:: /images/troubleshoot/intel-stock-heatsink.png

13. Did you try starting the system with the screwdriver trick?
	Bridge (touch both pins with a metal object) the two power pins to start the system.
	
.. thumbnail:: /images/troubleshoot/front-panel.png

.. youtube:: FuPZlliGqBw

14. Is the power supply turned on and is it receiving power?

15. Have you tried paperclip testing the PSU?
	**Plug the bare PSU into the wall socket. Insert a paper clip into the green wire pin and one of the black wire pins beside it *(illustrated below)*. This will turn on the PSU and the fan should spin up. If it doesn't, the PSU is dead.**
	
	If you have a multimeter, you can check all the outputs. Yellow wires should be 12 volts, red 5 volts, orange 3.3 volts, blue wire -12 volts, purple wire is the 5 volt standby. The gray wire is really important. It sends a control signal called something like "PowerOK" from the PSU to the motherboard. It should go from 0 volts to about 5 volts within a half second of pressing the case power switch. **If you do not have this signal, your computer will not boot.** The tolerances should be +/- 5%. If not, the PSU is bad. Unfortunately (yes, there's a "gotcha"), passing all the above does not mean that the PSU is good. It's not being tested under any kind of load. But if the fan doesn't turn on, the PSU is dead. Remember that the ATX standard ensures that all 24 pin cords have the same layout.

.. thumbnail:: /images/troubleshoot/psu-test.png
.. youtube:: co2RizQ8U2k

16. Is the monitor powered on and set to the right graphics input?

17. Have you tried the monitor with another device?

18. `Have you reset the CMOS? <http://www.wikihow.com/Reset-Your-BIOS>`_

Still not working?
==================

If you're unable to resolve your issue `Breadboard <#breadboarding>`_ the system, take pictures (in particular we want to see power connectors for the CPU, Motherboard and Graphics Card as well as RAM ) then upload them to `Imgur <http://imgur.com/>`_ and provide a link.

Breadboarding
=============

Adapted from [#]_.

What breadboarding is:

- Motherboard out of the case, resting on a non-conductive surface like a piece of cardboard.

- 1 stick of RAM

- CPU and CPU cooler with fan plugged in.

- PSU plugged into motherboard 24 pin connector and CPU 12V connector.

- Motherboard speaker.

- No Video Card, even if there are no integrated graphics.

- Nothing else, no SATA devices or anything else connected to the motherboard and nothing else plugged into the PSU.

Turn it on by shorting the On/Off Power Switch header on the motherboard with a screwdriver. Some models will have a push button.

Listen to the beeps, and report them (or lack of beeps) to the person that told you to breadboard.

The person helping you troubleshoot will tell you what to do next. He might tell you to install your video card and plug it to a monitor. Or he might have you change the RAM around. Regardless, report your findings to the person helping you. If all goes right, you will add components in until you find the faulty one. Simple?





Footnotes
---------

.. [#] http://www.tomshardware.com/faq/id-2176482/breadboarding-stripping-basics-troubleshooting.html
.. [#] http://www.tomshardware.co.uk/forum/261145-31-perform-steps-posting-post-boot-video-problems

.. title: Aggregating skylake memory performance
.. slug: aggregating-skylake-memory-performance
.. date: 2016-06-17 18:39:55 UTC+12:00
.. tags: Technical, RAM, Memory
.. category: Discussion
.. link: 
.. description: Evaluation of where higher speed memory is worth it
.. type: text

Premise
=======

Investigate how much of a difference higher clocked memory actually makes for games on the Skylake platform using DDR4.

.. TEASER_END

Results
=======

`Source <http://www.eurogamer.net/articles/digitalfoundry-2016-intel-skylake-core-i5-6500-review>`_

.. chart:: Box
   :style: NeonStyle
   :title: 'Core i5 6500/ Titan X OC (Average FPS, Raw)'
   :x_labels: ["3.2GHz/ 2133MHz DDR4", "3.2GHz/ 2666MHz DDR4", "3.2GHz/ 3066MHz DDR4", "3.2GHz/ 3200MHz DDR4", "4.51GHz/ 2632MHz DDR4", "4.51GHz/ 3196MHz DDR4"] 

   'The Witcher 3, Ultra, HairWorks Off, Custom AA', 	[84.9, 87.3, 100.3, 99.8, 96.4, 110.3]
   'Assassin\'s Creed Unity, Ultra High, FXAA',  		[82.5, 84.2, 87.3, 86.1, 85.9, 86.4]
   'Battlefield 4, Ultra, 4x MSAA',     				[115.1, 121.0, 122.1, 123.1, 127.6, 128.9]
   'Crysis 3, Very High, SMAA',  						[109.6, 110.9, 111.5, 111.9, 109.7, 120.9]
   'COD Advanced Warfare, Extra, FSMAA',  				[169.0, 171.5, 182.6, 185.0, 184.9, 185.7]
   'Grand Theft Auto 5, Ultra, no MSAA',  				[63.4, 68.5, 71.2, 72.6, 81.8, 84.6]
   'Far Cry 4, Ultra, SMAA',  							[84.9, 92.4, 96.9, 98.4, 115.2, 121.2]

.. chart:: Box
   :style: NeonStyle
   :title: 'Core i5 6500/ Titan X OC (Lowest FPS, Raw)'
   :x_labels: ["3.2GHz/ 2133MHz DDR4", "3.2GHz/ 2666MHz DDR4", "3.2GHz/ 3066MHz DDR4", "3.2GHz/ 3200MHz DDR4", "4.51GHz/ 2632MHz DDR4", "4.51GHz/ 3196MHz DDR4"] 

   'The Witcher 3, Ultra, HairWorks Off, Custom AA', 	[65.0, 67.0, 79.0, 79.0, 76.0, 76.0, 93.0]
   'Assassin\'s Creed Unity, Ultra High, FXAA',  		[62.0, 68.0, 71.0, 69.0, 69.0, 69.0]
   'Battlefield 4, Ultra, 4x MSAA',     				[79.0, 85.0, 82.0, 84.0, 103.0, 105.0]
   'Crysis 3, Very High, SMAA',  						[43.0, 41.0, 46.0, 49.0, 66.0,  68.0]
   'COD Advanced Warfare, Extra, FSMAA',  				[138.0, 141.0, 150.0, 155.0, 153.0, 154.0]
   'Grand Theft Auto 5, Ultra, no MSAA',  				[43.0, 48.0, 49.0,  48.0, 59.0, 60.0]
   'Far Cry 4, Ultra, SMAA',  							[50.0, 55.0, 58.0, 58.0, 83.0, 93.0]   
   
.. chart:: Box
   :style: NeonStyle
   :title: 'Core i5 6500/ Titan X OC (Average FPS, No OC)'
   :x_labels: ["3.2GHz/ 2133MHz DDR4", "3.2GHz/ 2666MHz DDR4", "3.2GHz/ 3066MHz DDR4", "3.2GHz/ 3200MHz DDR4"] 

   'The Witcher 3, Ultra, HairWorks Off, Custom AA', 	[84.9, 87.3, 100.3, 99.8]
   'Assassin\'s Creed Unity, Ultra High, FXAA',  		[82.5, 84.2, 87.3, 86.1]
   'Battlefield 4, Ultra, 4x MSAA',     				[115.1, 121.0, 122.1, 123.1]
   'Crysis 3, Very High, SMAA',  						[109.6, 110.9, 111.5, 111.9]
   'COD Advanced Warfare, Extra, FSMAA',  				[169.0, 171.5, 182.6, 185.0]
   'Grand Theft Auto 5, Ultra, no MSAA',  				[63.4, 68.5, 71.2, 72.6]
   'Far Cry 4, Ultra, SMAA',  							[84.9, 92.4, 96.9, 98.4]
   
.. chart:: Box
   :style: NeonStyle
   :title: 'Core i5 6500/ Titan X OC (Lowest FPS, No OC)'
   :x_labels: ["3.2GHz/ 2133MHz DDR4", "3.2GHz/ 2666MHz DDR4", "3.2GHz/ 3066MHz DDR4", "3.2GHz/ 3200MHz DDR4"] 

   'The Witcher 3, Ultra, HairWorks Off, Custom AA', 	[65.0, 67.0, 79.0, 79.0]
   'Assassin\'s Creed Unity, Ultra High, FXAA',  		[62.0, 68.0, 71.0, 69.0]
   'Battlefield 4, Ultra, 4x MSAA',     				[79.0, 85.0, 82.0, 84.0]
   'Crysis 3, Very High, SMAA',  						[43.0, 41.0, 46.0, 49.0]
   'COD Advanced Warfare, Extra, FSMAA',  				[138.0, 141.0, 150.0, 155.0]
   'Grand Theft Auto 5, Ultra, no MSAA',  				[43.0, 48.0, 49.0,  48.0]
   'Far Cry 4, Ultra, SMAA',  							[50.0, 55.0, 58.0, 58.0]   
   
.. chart:: Bar
   :style: NeonStyle
   :title: 'Percentile difference (Average FPS)'
   :x_labels: ["The Witcher 3", "Assassin\'s Creed Unity", "Battlefield 4", "Crysis 3", "COD Advanced Warfare", "Grand Theft Auto 5", "Far Cry 4"] 

   'Max - Min Percentage Difference (( | V1 - V2 | / ((V1 + V2)/2) ) * 100 )', 	[16.1, 4.3, 6.7, 2, 11.6, 13.5, 14.7]
   
.. chart:: Bar
   :style: NeonStyle
   :title: 'Percentile difference (Lowest FPS)'
   :x_labels: ["The Witcher 3", "Assassin\'s Creed Unity", "Battlefield 4", "Crysis 3", "COD Advanced Warfare", "Grand Theft Auto 5", "Far Cry 4"] 

   'Max - Min Percentage Difference (( | V1 - V2 | / ((V1 + V2)/2) ) * 100 )', 	[19.4, 10.7, 6.1, 13, 11.6, 11, 14.8]

	
`Hardware Canucks <http://www.hardwarecanucks.com/forum/hardware-canucks-reviews/70775-intel-skylake-ddr3-vs-ddr4-comparison-5.html>`_ tells us a different story, within their testing they use a i7-6700k
	
.. thumbnail:: /images/skylake_memory/01.jpg
.. thumbnail:: /images/skylake_memory/02.jpg

`Legit Reviews's <http://www.legitreviews.com/ddr4-memory-scaling-intel-z170-finding-the-best-ddr4-memory-kit-speed_170340/5>`_ results are even smaller (very low single digit %)

.. thumbnail:: /images/skylake_memory/03.jpg
.. thumbnail:: /images/skylake_memory/04.jpg

`Hardocp <http://www.hardocp.com/article/2015/08/05/intel_skylake_core_i76700k_ipc_overclocking_review/6>`_ 12.2% and 10.6% differences respectivley going from 2133 - 3600 mhz

.. thumbnail:: /images/skylake_memory/05.png
.. thumbnail:: /images/skylake_memory/06.png

`Hardware Unboxed <http://www.hardwareunboxed.com/forum/viewtopic.php?t=1570>`_

.. chart:: Line
   :style: NeonStyle
   :title: '99% Percentile (MS), Lower is better'
   :x_labels: ["DDR4-1333", "DDR4-1600", "DDR4-1866", "DDR4-2133", "DDR4-2400", "DDR4-2666", "DDR4-3000", "DDR4-3200", "DDR4-3600"]

   'The Witcher 3: Wild Hunt, 1080p Medium, HairWorks, SSAO', 		[23.3, 22.3, 20.9, 19, 18.5, 18.2, 18, 17.8, 17.7]
   'Star Wars Battlefront, 1080p High, FXAA',  						[11.3, 11, 10.9, 10.8, 10.7, 10.8, 10.7, 10.7, 10.7]
   'Tom Clancy\'s Rainbow Six Siege, 1080p Ultra, TAA/SSBC',     	[11.7, 11.4, 11.2, 11.1, 11, 11.1, 11.1, 11.1, 11.1]
   'Just Cause 3, 1080p Medium, FXAA',  							[22.8, 20.3, 18.8, 18.6, 18.5, 18.7, 18.5, 18.4, 18.2]
   'Grand Theft Auto V 1080p, Ultra, Advanced Graphics On, FXAA',	[24.1, 21.6, 19.5, 19.4, 19.2, 19.2, 19.2, 19.3, 19.2]
   'Fallout 4, 1080 Ultra, FXAA',  									[32.4, 23.9, 23.1, 22.2, 20.9, 20, 19.4, 18.7, 17.6]
   'Call of Duty: Black Ops 3, 1080p Extra, FXAA',  				[18.5, 17.6, 17.1, 14.6, 13.9, 12.9, 12.6, 12.4, 12.5]
   'Battlefield 4, 1080p Ultra, MSAA Disabled',  					[11.7, 11.1, 10.6, 10.8, 10.7, 10.6, 10.4, 10.4, 10.5]
   'Batman: Arkham Knight, 1080p High, Gameworks Off',  			[24.6, 24, 23.3, 23, 22.7, 22.7, 22.8, 22.8, 22.7]
   'Assassin\'s Creed Syndicate, 1080p Ultra, HBAO+FXAA',  			[19, 17.6, 13.2, 13, 12.7, 12.7, 12.6, 12.5, 12.6]

.. chart:: Line
   :style: NeonStyle
   :title: 'Minimum Frame Rate'
   :x_labels: ["DDR4-1333", "DDR4-1600", "DDR4-1866", "DDR4-2133", "DDR4-2400", "DDR4-2666", "DDR4-3000", "DDR4-3200", "DDR4-3600"]

   'The Witcher 3: Wild Hunt, 1080p Medium, HairWorks, SSAO', 		[47, 50, 53, 56, 59, 59, 60, 60, 60]
   'Star Wars Battlefront, 1080p High, FXAA',  						[106, 107, 107, 107, 107, 107, 107, 107, 107]
   'Tom Clancy\'s Rainbow Six Siege, 1080p Ultra, TAA/SSBC',     	[91, 91, 92, 92, 92, 92, 92, 92, 92]
   'Just Cause 3, 1080p Medium, FXAA',  							[47, 63, 74, 77, 78, 78, 79, 79, 80]
   'Grand Theft Auto V 1080p, Ultra, Advanced Graphics On, FXAA',	[48, 52, 54, 54, 55, 54, 55, 54, 55]
   'Fallout 4, 1080 Ultra, FXAA',  									[34, 40, 46, 48, 50, 53, 54, 56, 57]
   'Call of Duty: Black Ops 3, 1080p Extra, FXAA',  				[79, 86, 91, 93, 94, 95, 95, 96, 95]
   'Battlefield 4, 1080p Ultra, MSAA Disabled',  					[95, 97, 98, 98, 97, 97, 98, 98, 98]
   'Batman: Arkham Knight, 1080p High, Gameworks Off',  			[44, 45, 45, 46, 47, 47, 47, 47, 47]
   'Assassin\'s Creed Syndicate, 1080p Ultra, HBAO+FXAA',  			[68, 73, 76, 78, 80, 80, 80, 81, 81]

.. chart:: Line
   :style: NeonStyle
   :title: 'Average Frame Rate'
   :x_labels: ["DDR4-1333", "DDR4-1600", "DDR4-1866", "DDR4-2133", "DDR4-2400", "DDR4-2666", "DDR4-3000", "DDR4-3200", "DDR4-3600"]

   'The Witcher 3: Wild Hunt, 1080p Medium, HairWorks, SSAO', 		[62, 69, 75, 79, 82, 82, 83, 83, 83]
   'Star Wars Battlefront, 1080p High, FXAA',  						[113, 113, 113, 114, 114, 114, 114, 114, 114]
   'Tom Clancy\'s Rainbow Six Siege, 1080p Ultra, TAA/SSBC',     	[120, 125, 128, 129, 129, 129, 129, 129, 129]
   'Just Cause 3, 1080p Medium, FXAA',  							[71, 83, 90, 91, 91, 93, 93, 94, 95]
   'Grand Theft Auto V 1080p, Ultra, Advanced Graphics On, FXAA',	[59, 66, 71, 73, 75, 75, 75, 75, 75]
   'Fallout 4, 1080 Ultra, FXAA',  									[37, 42, 48, 51, 55, 59, 62, 63, 63]
   'Call of Duty: Black Ops 3, 1080p Extra, FXAA',  				[99, 106, 110, 114, 117, 117, 118, 118, 119]
   'Battlefield 4, 1080p Ultra, MSAA Disabled',  					[113, 115, 116, 116, 116, 115, 117, 117, 117]
   'Batman: Arkham Knight, 1080p High, Gameworks Off',  			[59, 60, 60, 60, 61, 61, 61, 61, 61]
   'Assassin\'s Creed Syndicate, 1080p Ultra, HBAO+FXAA',  			[82, 86, 90, 91, 92, 92, 92, 93, 92]
   
Discussion
==========

Digital foundry:

- Overclocking the i5-6500 here brings some interesting gains however we're primarily looking at different clock rates of RAM on its own (data is being skewed).
- Latency between the modules is not mentioned at all. To find these results digital foundry has over/underclocked their RAM.
- Removing the overclocked results reduces the range of results. 
- RAM clock speeds has a higher impact to the range of results for Average FPS (14, 13.3) than to the minimum results however we see a higher differences for some games like the Witcher 3.

Hardware Canucks:

- Only using a 6700k.
- Much larger range of of RAM clock's and has latency mentioned.
- Two games showing minimal differences.
- 7.1% difference between DDR3-1600 to DDR4-3200 for X3: Terran Conflict and 1.2% for Final Fantasy XIV: Heavensward Benchmark (a much larger range that what digital foundry used).

Legit Reviews:

- Almost flat results.
- Only using a 6700k.
- Large range of clock speeds tested.

Hardocp:

- Tries to remove the GPU from the equation
- Shows CPU ocing skews the results
- Shows Haswell performing better with 1866mhz ram!!!
- Shows a 12.2% difference between 2133MHz and 3600MHz on Bioshock Infinite. 10.6% for Metro Last Light.

Hardware Unboxed:

- Most results taper off at 2133MHz or 2400MHz.


   
Conclusion
==========

As long as you have at least 2133MHz RAM you're fine, however it can be worth getting higher clocked memory but you should only consider this when you're already CPU overclocking.
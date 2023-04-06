<script>
	import Info from '../components/Info.svelte';
	
	import {houseImages} from '../components/+house'
	import {scooterImages} from '../components/+scooter'
	import {galleryImages} from '../components/+gallery'
	
	import { Button, Card, Carousel, Gallery, GalleryItem } from "flowbite-svelte";
	import BeachCard from '../components/BeachCard.svelte';

	let showThumbs = false;
	let showCaptions = false;

</script>

<div class="flex flex-col md:flex-row justify-around items-center mx-auto mb-5">
	<div class="md:w-2/5 max-w-2xl">
		<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
			Little Vespa House
		</h1>
		<p class="md:my-10 my-3 text-lg dark:text-zinc-200">
			A studio flat inspired by the <span class="font-black">Vespa world</span>, located in a historic pedestrian lane in the medieval village of <a href="https://goo.gl/maps/ckj5VXFV7nW2ay9PA" class="underline text-sky-600 font-black">Marciana</a>. Furnished with taste and attention to detail, it's a <span class="font-black">cozy space</span> for <span class="font-black">young couples</span> looking for a charming and elegant getaway.
		</p>
	</div>
	<div class="md:w-2/5 max-w-2xl h-96 flex items-center justify-center">
		<Carousel 
			divClass={'overflow-hidden relative min-h-56 max-h-96 rounded-lg sm:h-[20rem] xl:h-[30rem]'} 
			images={houseImages} {showThumbs} {showCaptions} 
		/>
	</div>
</div>

<div id="details">&nbsp;</div>
<div class="my-10 mx-auto">

	<h2 class="my-4 text-4xl font-bold dark:text-white">
		Details
	</h2>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
		The apartment has a designer sofa bed that encloses inside a comfortable <span class="font-black">double bed</span>, the kitchenette is equipped with <span class="font-black">induction cookers</span>, and the bathroom includes an <span class="font-black">oversize shower</span>. The linen (sheets, towels) is not included, but it will be possible to rent it on request.
	</p>

	<div class="flex-col">
		<Info/>
	</div>
</div>


<div id="services">&nbsp;</div>
<div  class="my-10">
	<h2 class="my-5 text-4xl font-bold dark:text-white">
		Services
	</h2>
	<div class="flex flex-col md:flex-row justify-around items-center mx-auto mb-5">
	
		<div class="md:w-2/5 max-w-2xl h-96 flex items-center justify-center">
			<div class="max-w-2xl mx-auto">
				<Carousel images={scooterImages} {showThumbs} {showCaptions} />
			</div>
		</div>
	
		<div class="md:w-2/5 max-w-2xl">
			
			<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
				Renting a <span class="font-black">Vespa 50</span> is a great way to explore the nearby beaches and coves in Marciana. It’s an affordable option that allows you to travel around the area at your own pace and take in all of the beautiful scenery.
			</p>
		</div>
	
	</div>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="gallery">&nbsp;</div>
<div class="my-10 mx-auto">

	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		Gallery
	</h1>

	<Gallery>
		{#each galleryImages as {src, alt}}
		<GalleryItem imgClass={"max-h-[40rem] rounded-lg max-w-full"} {src} {alt} />
		{/each}
	</Gallery>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">


<div id="whereWeAre">&nbsp;</div>
<div class="mx-auto my-10">

	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		Where we are
	</h1>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">

		Marciana is a beautiful village that offers a unique blend of history,
		culture, and natural beauty. You can explore the 
		narrow streets of the village and discover hidden gems such as small shops
		selling local products and traditional restaurants serving delicious food.
	
	<div class="max-w-4xl mb-5 mx-auto">
		<div
			class="overflow-hidden flex flex-col items-center bg-white border border-zinc-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
		>
			<iframe
				title="Maps map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.76649157399!2d10.096006343419397!3d42.79048600534361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d64c07d7227d17%3A0xecc696a9b6c91a9b!2s57030%20Marciana%20Province%20of%20Livorno!5e0!3m2!1sen!2sit!4v1680017386293!5m2!1sen!2sit"
				class="object-cover w-full !h-[30rem] flex"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<div class="flex flex-col justify-between p-4 leading-normal grow">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
					How to reach Marciana from Portoferraio
				</h5>
				<p class=" mx-auto max-w-xl mb-3 font-normal text-zinc-700 dark:text-zinc-400">
					You can reach Marciana from Portoferraio by <span class="font-black">bus, taxi or car</span>.
					The bus journey time between Portoferraio and Marciana is around 30 minutes.
					The bus service is operated by CTT Nord Livorno
				</p>
			</div>
		</div>
	</div>

	<p class="md:my-10 my-3 text-lg dark:text-zinc-200">
		Marciana is a peaceful medieval hilltop village on the slopes of Monte Capanne,
		in the western part of Elba island. It’s one of the oldest settlements on the island 
		with foundations dating back to 35 BC. There are many things to do in Marciana such as 
		visiting the Marciana Fortress, which was built in 1700 and offers stunning views of the 
		surrounding area. You can also visit the Church of San Niccolò, which dates back to the 
		12th century and has a beautiful bell tower. If you’re interested in hiking, there are many 
		trails that offer breathtaking views of the island.
		<br>
		<br>

		Nestled in greenery of oak, pine and chestnut trees and enjoying the freshest of air, the Marciana
		area exudes a special atmosphere with a mountain-like climate although the sea is only five 
		kilometers away.
		Like the rest of the island, the Marciana area is bursting with stunning beaches,
		such as the sandy stretches at Paolina, Procchio and Spartaia, the sand and reefs
		of Sant’Andrea; the reefs of Punta Nera and Chiessi, and the rocks and gravel of Pomonte
		and Patresi.
		In the village are available bar café,
		 restaurants, wine-shop, pizzeria, typical shops, cash machine, playgrounds.
	</p>

	<h2 class="my-10 text-4xl font-bold dark:text-white">
		What's near
	</h2>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:justify-center lg:overflow-x-auto">
		
		<BeachCard 
			title="Procchio beach" 
			description="Procchio beach is one of the longest and best equipped sandy beaches on the Island of Elba. It is located in Procchio, a small town in the municipality of Marciana. The beach is just under one kilometer long and has golden, fine sand. You'll spend 20 minutes to arrive there by car." 
			src="./images/beach/procchio.jpg"
			link="https://goo.gl/maps/nW33z4TUeK2iEdQFA"
		/>
		
		<BeachCard 
			title="Paolina beach" 
			description="Paolina beach is characterized by the nearby tiny island covered in lush, Mediterranean bush. The beach is very narrow, about 6 meters wide at its widest point and less than one hundred meters long. The sand is mixed with pebbles. The water is transparent and the sea bed is splendid. You'll spend 18 minutes to arrive there by car. " 
			src="./images/beach/paolina.jpg"
			link="https://goo.gl/maps/SyLYcyPXgzaXimXEA"
		/>
		<BeachCard 
			title="Sant'Andrea beach" 
			description="Sant’Andrea beach is one of the most famous beaches in the Commune of Marciana. The beach is characterized by turquoise, crystal clear water and smooth granite rocks that go right down to the sea. The beach is quite small, only about 150 meters long and 10 meters at its widest point." 
			src="./images/beach/sant-andrea.jpg"
			link="https://goo.gl/maps/bWmePQBTap3K2YT76"
		/>
		<BeachCard 
			title="Spartaia beach" 
			description="Spartaia beach is located in the northern part of Elba Island, between Procchio and Paolina beaches. It is a beautiful sandy beach, about 160 meters long and characterized by fine golden sand. The beach is protected by lush Mediterranean vegetation and two cliffs" 
			src="./images/beach/spartaia.jpg"
			link="https://goo.gl/maps/yzoNgUFJ5CovZ4R26"
		/>

	</div>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="prices" class="mx-auto my-10">
	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		Prices
	</h1>

	<p class="mx-auto max-w-4xl md:my-10 my-3 text-lg dark:text-zinc-200">
		The cost of the apartment varies depending on the month of booking, but in any case it starts from <span class="font-black">50 euros</span> per night.
	</p>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:items-center lg:justify-center lg:overflow-x-auto">
		<div class="lg:my-2 shrink-0">
			<Card padding="lg">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">July</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">70</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/night</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Minimum stay 5 nights</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">+30€ final cleaning</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Rent linen (sheets, towels) on request</span>
				  </li>
				  <li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500">Check-in : 3:00 -7:00 pm</span>
				  </li>
				  <li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500">Check-out: 10:00 am </span>
				</ul>
			</Card>
		</div>
		<div class="lg:my-2 shrink-0">
			<Card size="xl" padding="xl">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">August</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">80</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/night</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Minimum stay 5 nights</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">+30€ final cleaning</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Rent linen (sheets, towels) on request</span>
				    </li>
					<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Check-in : 3:00 -7:00 pm</span>
					</li>
					<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Check-out: 10:00 am </span>
				</ul>
			</Card>
		</div>
		<div class="lg:my-2 shrink-0">
			<Card padding="lg">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">June & September</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">60</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/night</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Minimum stay 2 nights</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">+30€ final cleaning</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Rent linen (sheets, towels) on request</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Check-in : 3:00 -7:00 pm</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Check-out: 10:00 am </span>
					</li>
			<!--
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
					</li>
			-->
				</ul>
			</Card>
		</div>
		
	</div>
</div>
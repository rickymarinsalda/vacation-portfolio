<script>
	import Info from '../components/Info.svelte'
	import {houseImages} from '../components/+house'
	import {scooterImages} from '../components/+scooter'
	import {galleryImages} from '../components/+gallery'
	
	import { Button, Card, Carousel, Gallery, GalleryItem } from "flowbite-svelte"
	import BeachCard from '../components/BeachCard.svelte'
	let showThumbs = false;
	let showCaptions = false;
	import{setupI18n,t} from '../i18n'


</script>


<div class="flex flex-col md:flex-row justify-around items-center mx-auto mb-5">
	<div class="md:w-2/5 max-w-2xl">
		<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
			Little Vespa House
		</h1>
		<p class="md:my-10 my-3 text-lg dark:text-zinc-200">
			{@html $t('intro.testo')}
		</p>
	</div>
	<div class="md:w-2/5 max-w-2xl h-96 flex items-center justify-center">
		<Carousel 
			divClass={'overflow-hidden relative min-h-56 max-h-96 rounded-lg sm:h-[20rem] xl:h-[30rem]'} 
			images={houseImages} {showThumbs} {showCaptions} 
			loop
			duration={4000.0}
		/>
		
	</div>
</div>

<div id="details">&nbsp;</div>
<div class="my-10 mx-auto">

	<h2 class="my-4 text-4xl font-bold dark:text-white">
		{@html $t('details.title')}
	</h2>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
		{@html $t('details.body')}
	</p>

	<div class="flex-col">
		<Info/>
	</div>
</div>


<div id="services">&nbsp;</div>
<div  class="my-10">
	<h2 class="my-5 text-4xl font-bold dark:text-white">
		{@html $t('services.title')}
	</h2>
	<div class="flex flex-col md:flex-row justify-around items-center mx-auto mb-5">
	
		<div class="md:w-2/5 max-w-2xl h-96 flex items-center justify-center">
			<div class="max-w-2xl mx-auto">
				<Carousel images={scooterImages} {showThumbs} {showCaptions} />
			</div>
		</div>
	
		<div class="md:w-2/5 max-w-2xl">
			
			<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
				{@html $t('services.body')}

			<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
				
				<a href="./document.pdf" download class = "underline text-sky-600 font-black">
					<!--<img src="./doc.png" alt="document_agreement" class = "md:w-[5rem] w-[5rem] mx-auto" >-->
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[5rem] h-[5rem] mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200 " viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>
						{@html $t('services.click')}
				</a>
			</p>
			
		</div>
	
	</div>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="gallery">&nbsp;</div>
<div class="container lg:px-32  mx-auto items-center">

	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		{@html $t('gallery.title')}
	</h1>

	<Gallery>
		{#each galleryImages as {src, alt}}
		<GalleryItem imgClass={"inset-0 object-cover object-center rounded "} {src} {alt} />
		{/each}
	</Gallery>
</div>


<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">


<div id="whereWeAre">&nbsp;</div>
<div class="mx-auto my-10">

	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		{@html $t('dove.title')}
	</h1>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
		{@html $t('dove.body1')}
	<div class="max-w-4xl mb-5 mx-auto">
		<div
			class="overflow-hidden flex flex-col items-center bg-white border border-zinc-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
		>
			<iframe
				title="Maps map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.76649157399!2d10.096006343419397!3d42.79048600534361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d64c07d7227d17%3A0xecc696a9b6c91a9b!2s57030%20Marciana%20Province%20of%20Livorno!5e0!3m2!1sen!2sit!4v1680017386293!5m2!1sen!2sit"
				class="object-cover w-full !h-[15rem] md:!h-[28rem] flex"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<div class="flex flex-col justify-between p-4 leading-normal grow">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
					{@html $t('dove.title2')}
				</h5>
				<p class=" mx-auto max-w-xl mb-3 font-normal text-zinc-700 dark:text-zinc-400">
					{@html $t('dove.body2')}
				</p>
			</div>
		</div>
	</div>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
		{@html $t('dove.foot')}
	</p>

	<h2 class="my-10 text-4xl font-bold dark:text-white">
		{@html $t('vicino.title')}
	</h2>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:justify-center lg:overflow-x-auto">
		
		<BeachCard 
			title="{$t('vicino.beach1')}" 
			description="{$t('vicino.beach1desc')}" 
			src="./images/beach/procchio.jpg"
			link="https://goo.gl/maps/nW33z4TUeK2iEdQFA"
		/>
		
		<BeachCard 
			title="{$t('vicino.beach2')}" 
			description="{$t('vicino.beach2desc')}" 
			src="./images/beach/paolina.jpg"
			link="https://goo.gl/maps/SyLYcyPXgzaXimXEA"
		/>
		<BeachCard 
			title="{$t('vicino.beach3')}" 
			description="{$t('vicino.beach3desc')}" 
			src="./images/beach/sant-andrea.jpg"
			link="https://goo.gl/maps/bWmePQBTap3K2YT76"
		/>
		<BeachCard 
			title="{$t('vicino.beach4')}" 
			description="{$t('vicino.beach4desc')}" 
			src="./images/beach/marciana-marina2.jpg"
			link="https://goo.gl/maps/y1gHuvnbpRxxbHvj9"
		/>

	</div>
</div>
<hr class="h-px my-0 bg-zinc-200 border-0 dark:bg-zinc-700">
<div id="whoIam">&nbsp;</div>
<!-- start new -->
	
  
	 
		
		<div class="md:flex md:items-center md:justify-center">
		
		  <div class=" md:w-2/5 mt-4 md:mt-0 md:ml-6">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="lg:text-center">
				  <h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
					  {@html $t('chisono.title')}
				  </h1>
				  <h3 class=" my-10 md:my-0 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Fabio Pecchia</h3>
				</div>

				<div class="block md:hidden md:w-2/5 md:flex-shrink-0">
			
					<img class="mx-auto w-60 h-60 rounded-full" src="/images/me/test2.jpg" alt="Avatar">
				  </div>
			<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">{@html $t('chisono.body')}</p>
				<!-- start packet-->
				<div class="md:flex md:justify-center">
					<div class = "mx-5 flex dark:text-white" >
					<svg 
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="mr-1 w-6 h-6"
						viewBox="0 0 16 16"
					>
						<path
							d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
						/>
					</svg>
					<a href="mailto:pecchiaf@tiscali.it">
					pecchiaf@tiscali.it
					</a>
					</div>
					<div class = "mx-5 flex dark:text-white" >
					<svg fill="currentColor" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill-rule="evenodd" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
					<a href="tel:+393346262154">
					+39 334 6262 154
					</a>
				</div>
				
				</div>
				<!-- end-->
				
		  </div>

		  
		  
		</div>
		<div class="hidden md:block md:w-2/5 md:flex-shrink-0">
			
			<img class="mx-auto w-60 h-60 rounded-full" src="images/me/test2.jpg" alt="Avatar">
		  </div>
	  
	</div>
 
  <!-- end new-->

  
<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="prices" class="mx-auto my-10">
	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		{@html $t('prezzo.title')}
	</h1>

	<p class="mx-auto max-w-xl md:my-10 my-3 text-lg dark:text-zinc-200">
		{@html $t('prezzo.body')}
	</p>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:items-center lg:justify-center lg:overflow-x-auto">
		<div class="lg:my-2 shrink-0">
			<Card padding="lg">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{@html $t('prezzo.mese1')}</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">70</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{@html $t('prezzo.notte')}</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info1')}</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info4')}</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info3')}</span>
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
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{@html $t('prezzo.mese2')}</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">80</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{@html $t('prezzo.notte')}</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info5')}</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info4')}</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info3')}</span>
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
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{@html $t('prezzo.mese3')}</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">60</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{@html $t('prezzo.notte')}</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info2')}</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info4')}</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{@html $t('prezzo.info3')}</span>
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
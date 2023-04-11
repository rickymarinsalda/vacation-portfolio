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
					<img src="./doc.png" alt="document_agreement" class = "md:w-[5rem] w-[5rem] mx-auto" >
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

	<p class="md:my-10 my-3 text-lg dark:text-zinc-200">
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
			src="./images/beach/spartaia.jpg"
			link="https://goo.gl/maps/yzoNgUFJ5CovZ4R26"
		/>

	</div>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="prices" class="mx-auto my-10">
	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		{@html $t('prezzo.title')}
	</h1>

	<p class="mx-auto max-w-4xl md:my-10 my-3 text-lg dark:text-zinc-200">
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
		<div class="lg:my-2 shrink-0">
			<Card padding="lg" >
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{@html $t('prezzo.mese4')}</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">€</span>
					<span class="text-5xl font-extrabold tracking-tight">50</span>
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
				</ul>
			</Card>
		</div>
		
	</div>
</div>
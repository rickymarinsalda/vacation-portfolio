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
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iusto nobis quas reiciendis fugiat quam dignissimos ad corrupti aliquam blanditiis nulla, aut sapiente magni optio perspiciatis cupiditate quia debitis? Natus.
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
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iusto nobis quas reiciendis fugiat quam dignissimos ad corrupti aliquam blanditiis nulla, aut sapiente magni optio perspiciatis cupiditate quia debitis? Natus.
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
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iusto nobis quas reiciendis fugiat quam dignissimos ad corrupti aliquam blanditiis nulla, aut sapiente magni optio perspiciatis cupiditate quia debitis? Natus.
	</p>
	
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
					Noteworthy technology acquisitions 2021
				</h5>
				<p class="mb-3 font-normal text-zinc-700 dark:text-zinc-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</div>
		</div>
	</div>

	<p class="md:my-10 my-3 text-lg dark:text-zinc-200">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iusto nobis quas reiciendis fugiat quam dignissimos ad corrupti aliquam blanditiis nulla, aut sapiente magni optio perspiciatis cupiditate quia debitis? Natus.
	</p>

	<h2 class="my-10 text-4xl font-bold dark:text-white">
		What's near
	</h2>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:justify-center lg:overflow-x-auto">
		
		<BeachCard 
			title="Spiaggia di procchio" 
			description="dicta alias, unde repellat praesentium est deserunt qui iste esse sunt asperiores vel aliquam reprehenderit vero sint?" 
			src="./images/beach/procchio.jpg"
		/>
		
		<BeachCard 
			title="Spiaggia di paolina" 
			description="dicta alias, unde repellat praesentium est deserunt qui iste esse sunt asperiores vel aliquam reprehenderit vero sint?" 
			src="./images/beach/paolina.jpg"
		/>
		<BeachCard 
			title="Spiaggia di sant andrea" 
			description="dicta alias, unde repellat praesentium est deserunt qui iste esse sunt asperiores vel aliquam reprehenderit vero sint?" 
			src="./images/beach/sant-andrea.jpg"
		/>
		<BeachCard 
			title="Spiaggia di spartaia" 
			description="dicta alias, unde repellat praesentium est deserunt qui iste esse sunt asperiores vel aliquam reprehenderit vero sint?" 
			src="./images/beach/spartaia.jpg"
		/>

	</div>
</div>

<hr class="h-px my-12 bg-zinc-200 border-0 dark:bg-zinc-700">

<div id="prices" class="mx-auto my-10">
	<h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
		Prices
	</h1>

	<p class="mx-auto max-w-4xl md:my-10 my-3 text-lg dark:text-zinc-200">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iusto nobis quas reiciendis fugiat quam dignissimos ad corrupti aliquam blanditiis nulla, aut sapiente magni optio perspiciatis cupiditate quia debitis? Natus.
	</p>

	<div class="flex overflow-x-scroll space-x-4 lg:flex-wrap lg:items-center lg:justify-center lg:overflow-x-auto">
		<div class="lg:my-2 shrink-0">
			<Card padding="lg">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">$</span>
					<span class="text-5xl font-extrabold tracking-tight">49</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
					</li>
				</ul>
				<Button class="w-full">Choose plan</Button>
			</Card>
		</div>
		<div class="lg:my-2 shrink-0">
			<Card size="xl" padding="xl">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">$</span>
					<span class="text-5xl font-extrabold tracking-tight">49</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
					</li>
				</ul>
				<Button class="w-full">Choose plan</Button>
			</Card>
		</div>
		<div class="lg:my-2 shrink-0">
			<Card padding="lg">
				<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
				<div class="flex items-baseline text-gray-900 dark:text-white">
					<span class="text-3xl font-semibold">$</span>
					<span class="text-5xl font-extrabold tracking-tight">49</span>
					<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
				</div>
				<!-- List -->
				<ul class="my-7 space-y-4">
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
					</li>
					<li class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
					</li>
					<li class="flex space-x-2">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
					</li>
					<li class="flex space-x-2 line-through decoration-gray-500">
						  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
					</li>
				</ul>
				<Button class="w-full">Choose plan</Button>
			</Card>
		</div>
		
	</div>
</div>
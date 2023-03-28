<script>
	import { Carousel } from 'flowbite-svelte';
	import Info from '../components/Info.svelte';


	let showThumbs = false;
	let showCaptions = false;

	export const houseImages = [
		{
			id: 0,
			name: 'House',
			imgurl: '/images/given/DSC_0644.JPG'
		},
		{
			id: 1,
			name: 'House',
			imgurl: '/images/given/DSC_0648.JPG'
		}
	];

	export const scooterImages = [
		{
			id: 0,
			name: 'Scooter',
			imgurl: '/images/scooter/scooter1.jpeg'
		},
		{
			id: 1,
			name: 'Scooter',
			imgurl: '/images/scooter/scooter2.jpeg'
		}
	];
</script>

<div class="max-w-2xl mx-auto mb-5">
	<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
		The house
	</h1>
	<p class="md:my-10 my-3 text-lg">
		A studio flat inspired by the <span class="font-black">Vespa world</span>, located in a historic pedestrian lane in the medieval village of <a href="https://goo.gl/maps/ckj5VXFV7nW2ay9PA" class="underline text-blue-600 font-black">Marciana</a>. Furnished with taste and attention to detail, it's a <span class="font-black">cozy space</span> for <span class="font-black">young couples</span> looking for a charming and elegant getaway.
	</p>
	<Carousel images={houseImages} {showThumbs} {showCaptions} />

	<h2 class="my-4 text-4xl font-bold dark:text-white">
		Faqs
	</h2>

	<Info/>

</div>

<div class="max-w-2xl mx-auto mb-5">
	<h2 class="my-4 text-4xl font-bold dark:text-white">
		With a scooter
	</h2>
	<Carousel images={scooterImages} {showThumbs} {showCaptions} />

	<p class="md:my-10 my-3 text-lg">
		A studio flat inspired by the <span class="font-black">Vespa world</span>, located in a historic pedestrian lane in the medieval village of <a href="https://goo.gl/maps/ckj5VXFV7nW2ay9PA" class="underline text-blue-600 font-black">Marciana</a>. Furnished with taste and attention to detail, it's a <span class="font-black">cozy space</span> for <span class="font-black">young couples</span> looking for a charming and elegant getaway.
	</p>
</div>

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
	What's near
</h1>


<p class="md:my-10 my-3 text-lg">
	Qui ci scriviamo una lista di cose vicine che sono vicine casomai con delle card wrappate
</p>

<div class="max-w-2xl mb-5 mx-auto">
	<div
		class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
	>
		<iframe
			title="Maps map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.76649157399!2d10.096006343419397!3d42.79048600534361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d64c07d7227d17%3A0xecc696a9b6c91a9b!2s57030%20Marciana%20Province%20of%20Livorno!5e0!3m2!1sen!2sit!4v1680017386293!5m2!1sen!2sit"
			class="object-cover w-full rounded-t-lg !h-[20rem] md:h-auto md:w-[20rem] md:rounded-none md:rounded-l-lg"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
		<div class="flex flex-col justify-between p-4 leading-normal grow">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Noteworthy technology acquisitions 2021
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
		</div>
	</div>
</div>
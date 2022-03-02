<script>
	import { goto } from '$app/navigation';
	import Layout from '../components/Layout.svelte';
	import AnimateOnEnter from '../components/AnimateOnEnter.svelte';
	import LazyLoadImg from '../components/LazyLoadImg.svelte';
	import ActionButton from '../components/ActionButton.svelte';
	import CardSwiperApi from '../components/CardSwiperAPI.svelte';
	import FaCreditCard from 'svelte-icons/fa/FaCreditCard.svelte';
	import IconWithDesc from '../components/SVG/IconWithDesc.svelte';
</script>

<svelte:head>
	<title>Animal Shelter</title>
</svelte:head>

<div class="flex justify-center items-center top-0 left-0 h-screen gradient-bg -z-10">
	<div class="flex text-white gap-4 flex-col-reverse justify-center items-center lg:flex-row">
		<Layout>
			<h1 class="text-4xl font-serif">Not only people need a house</h1>
			<p class="mx-1 my-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, alias animi. Quibusdam
				tempore ab, vel blanditiis ullam quasi sunt officia amet incidunt voluptates unde
				temporibus, magnam optio dolore hic itaque dignissimos ea veritatis iusto deserunt?
				Veritatis ipsam maiores necessitatibus nulla laborum id atque molestiae! Cupiditate nemo
				excepturi omnis ut hic!
			</p>
			<ActionButton>Make a friend</ActionButton>
		</Layout>
		<img
			src="https://www.transparentpng.com/thumb/dog/cute-dog-clipart-13.png"
			alt="cute dog clipart @transparentpng.com"
			width="500"
		/>
	</div>
</div>
<Layout>
	<LazyLoadImg
		src="images/dog-outside-car-window.jpg"
		alt="Dog outside car window"
		class="rounded-xl shadow-xl max-h-max"
	/>
	<section class="m-4">
		<h1 class="text-4xl font-serif">About our shelter</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, et quibusdam perspiciatis
			incidunt aliquam est praesentium expedita nam, culpa natus laboriosam, enim debitis excepturi
			dolorem unde. Voluptate aliquam ipsam, sapiente dicta unde vitae, id a accusamus eos et
			incidunt repudiandae cumque qui perspiciatis dolorem blanditiis non libero quam recusandae?
			Neque?
		</p>
	</section>
</Layout>
<section class="bg-bg-gray py-8 lg:px-16">
	<div class="max-w-7xl m-auto justify-center items-center text-center">
		<h1 class="text-3xl font-serif font-black">Our friends who are looking for house</h1>
		<CardSwiperApi />
		<ActionButton on:click={() => goto('/pets')}>Get to know the rest</ActionButton>
	</div>
</section>
<Layout>
	<div class="flex flex-col">
		<h1 class="text-3xl w-[250px] m-auto my-4 text-center font-serif font-medium">
			Than you can help our shelter
		</h1>
		<AnimateOnEnter>
			<div class="flex justify-evenly">
				<IconWithDesc src="images/icons/icons8-pet-food-64.png" alt="" description="Pet food" />
				<IconWithDesc
					src="images/icons/icons8-ambulance-50.png"
					alt=""
					description="Transportation"
				/>
				<IconWithDesc src="images/icons/icons8-tennis-ball-50.png" alt="" description="Toys" />
				<IconWithDesc
					src="images/icons/icons8-pet-bowl-64.png"
					alt=""
					description="Bowls and cups"
				/>
				<IconWithDesc src="images/icons/icons8-shampoo-60.png" alt="" description="Shampoos" />
			</div>
		</AnimateOnEnter>
		<AnimateOnEnter>
			<div class="flex justify-evenly">
				<IconWithDesc src="images/icons/icons8-pills-50.png" alt="" description="Vitamins" />
				<IconWithDesc src="images/icons/icons8-syringe-64.png" alt="" description="Medicines" />
				<IconWithDesc
					src="images/icons/icons8-dog-collar-50.png"
					alt=""
					description="Collars / leashes"
				/>
				<IconWithDesc
					src="images/icons/icons8-dog-house-64.png"
					alt=""
					description="Sleeping area"
				/>
			</div>
		</AnimateOnEnter>
	</div>
</Layout>
<Layout bgColor="bg-bg-gray">
	<AnimateOnEnter>
		<div class="flex flex-col m-auto lg:flex-row">
			<div class="sm:max-w-[1020px] sm:h-1/2">
				<LazyLoadImg src="images/dog-laying-down.png" alt="Dog laying down" />
				<!-- <img src="images/dog-laying-down.png" alt="Dog laying down" /> -->
			</div>
			<div class="flex flex-col items-center lg:items-start">
				<h1 class="text-3xl font-serif font-black text-gray-800">
					In addition you can make a donation
				</h1>
				<div class="my-5">
					<h2 class="text-xl font-serif text-gray-700">Name of the bank / Type of bank account</h2>
					<div class="flex max-w-sm p-2 bg-pr-accent items-center justify-evenly rounded-xl">
						<div class="w-8 h-8">
							<FaCreditCard />
						</div>
						<pre class="px-2 sm:text-xl">8380 2880 8028 8791 7435</pre>
					</div>
				</div>
				<p class="italic text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure adipisci, minima,
					dolores a laborum minus voluptate molestias maiores ratione voluptatem reprehenderit,
					recusandae assumenda
				</p>
			</div>
		</div>
	</AnimateOnEnter>
</Layout>

<script>
	import { goto } from '$app/navigation';
	import Layout from '../components/Layout.svelte';
	import ActionButton from '../components/ActionButton.svelte';
	import CardSwiperApi from '../components/CardSwiperAPI.svelte';
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
	<img
		src="images/dog-outsitde-car-window.jpg"
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
	<h1>You can help our shelter by</h1>
</Layout>
<Layout bgColor="bg-bg-gray">
	<h1>In addition you can make a donation</h1>
</Layout>

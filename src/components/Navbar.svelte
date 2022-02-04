<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import NavLink from './NavLink.svelte';
	import AnimatedHamburger from './SVG/AnimatedHamburger.svelte';

	$: route = $page.url.pathname;
	// List of routes where adaptive navbar will work in
	const enabledRoutes = ['/'];
	// Set initial style based on current route
	$: filledBg = !enabledRoutes.includes(route);

	let open = false;

	onMount(() => {
		if (enabledRoutes.includes(route)) filledBg = window.scrollY >= window.innerHeight - 200;
	});

	const closeMenu = () => {
		if (open) return (open = false);
	};
</script>

<svelte:window
	on:scroll={() => {
		// If current route is enable to use adaptive navbar change style through an event lister
		if (enabledRoutes.includes(route)) filledBg = window.scrollY >= window.innerHeight - 200;
	}}
/>

<header
	class={`fixed w-screen px-10 py-4 z-50 transition-all duration-300 ease-in-out ${
		filledBg ? 'bg-white shadow-xl' : 'text-white'
	} 
	${open ? 'shadow-none text-gray-800' : ''}
	`}
>
	<nav class="flex justify-evenly items-center max-w-7xl mx-auto sm:justify-around">
		<a href="/" on:click={closeMenu}>
			<h1
				class={`flex-1 text-3xl font-black font-serif ${
					filledBg || open ? 'text-gray-800' : 'text-white'
				}`}
			>
				Animal Shelter
			</h1>
		</a>
		<ul class="hidden justify-around m-2 sm:flex">
			<li class="mx-2"><NavLink href="/about">About us</NavLink></li>
			<li class="mx-2"><NavLink href="/pets">Our pets</NavLink></li>
			<li class="mx-2"><NavLink href="/help-us">Help us</NavLink></li>
			<li class="mx-2"><NavLink href="/contact">Contact</NavLink></li>
		</ul>
		<div class="fixed top-0 right-0 sm:hidden">
			<AnimatedHamburger bind:open />
		</div>
	</nav>
</header>

{#if open}
	<div transition:fade class="overlay flex flex-col justify-center items-center text-center">
		<ul on:click={closeMenu}>
			<li>
				<NavLink href="/about">About us</NavLink>
			</li>
			<li>
				<NavLink href="/pets">Our pets</NavLink>
			</li>
			<li>
				<NavLink href="/help-us">Help us</NavLink>
			</li>
			<li>
				<NavLink href="/contact">Contact</NavLink>
			</li>
		</ul>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 40;

		width: 100%;
		height: 100%;

		overflow: hidden;
		background-color: #fff;
	}
</style>

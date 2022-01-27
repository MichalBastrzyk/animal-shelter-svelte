<script>
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';

	$: route = $page.url.pathname;
	// List of routes where adaptive navbar will work in
	const enabledRoutes = ['/'];
	// Set initial style based on current route
	$: filledBg = !enabledRoutes.includes(route);
</script>

<svelte:window
	on:scroll={() => {
		// If current route is enable to use adaptive navbar change style through an event listser
		if (enabledRoutes.includes(route)) filledBg = window.scrollY >= window.innerHeight - 200;
	}}
/>

<header
	class={`fixed w-full px-10 py-4 z-50 transition-all duration-300 ease-in-out ${
		filledBg ? 'bg-white shadow-xl' : 'text-white'
	}`}
>
	<nav class="flex justify-evenly max-w-7xl mx-auto">
		<a href="/">
			<h1 class={`text-3xl font-black font-serif ${filledBg ? 'text-gray-800' : 'text-gray-300'}`}>
				Animal Shelter
			</h1>
		</a>
		<ul class="flex justify-around m-2">
			<li class="mx-2"><NavLink href="/about">About us</NavLink></li>
			<li class="mx-2"><NavLink href="/pets">Our pets</NavLink></li>
			<li class="mx-2"><NavLink href="/help-us">Help us</NavLink></li>
			<li class="mx-2"><NavLink href="/contact">Contact</NavLink></li>
		</ul>
	</nav>
</header>

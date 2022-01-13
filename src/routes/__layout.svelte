<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="dark">
	<Navbar />
	<div class="max-w-5xl m-auto px-3">
		<slot />
	</div>
</main>

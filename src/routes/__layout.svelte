<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main class="dark">
	<Navbar />
	<!-- <div class="min-h-[85vh] max-w-5xl m-auto py-20 px-3"> -->
	<slot />
	<!-- </div> -->
	<Footer />
</main>

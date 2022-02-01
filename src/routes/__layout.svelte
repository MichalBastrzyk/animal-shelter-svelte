<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main class="dark">
	<Navbar />
	<slot />
	<Footer />
</main>

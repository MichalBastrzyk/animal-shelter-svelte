<script>
	import Card from './Card.svelte';
	import ActionButton from './ActionButton.svelte';

	export let title, src, alt;
</script>

<Card>
	<img {src} {alt} class="lg:w-80 sm:h-auto object-cover rounded-t-2xl" />
	<div class="px-4 py-2">
		<h1 class="text-2xl my-8 mx-2">{title}</h1>
		<ActionButton>Meet me</ActionButton>
	</div>
</Card>

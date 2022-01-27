<script>
	import ActionButton from './ActionButton.svelte';

	export let title, src, alt;

	// export let href;
</script>

<div
	class="flex flex-col justify-around text-center m-2 px-4 py-2 \
	 bg-white rounded-2xl shadow-sm \
	 transition-all duration-500 ease-in-out hover:shadow-2xl"
>
	<img {src} {alt} class="lg:w-80  h-full object-cover rounded-2xl" />
	<h1 class="text-2xl my-8 mx-2">{title}</h1>
	<ActionButton>Meet me</ActionButton>
</div>

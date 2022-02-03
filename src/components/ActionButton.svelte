<script>
	// If true changes default background value to transparent and fills itself if hovered over.
	export let fillOnHover = false;
</script>

<button
	class="p-3 px-10 text-black font-semibold font-serif  rounded-full border-2 border-pr-accent  \
	transition-all duration-300 ease-in-out hover:shadow-md active:shadow-inner {fillOnHover
		? 'bg-transparent hover:bg-pr-accent'
		: 'bg-pr-accent'}"
	on:click
>
	<slot />
</button>

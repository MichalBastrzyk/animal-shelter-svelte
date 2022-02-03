<script>
	import { fly, fade } from 'svelte/transition';

	export let bgColor = null;
</script>

<section class={bgColor ?? bgColor} in:fly={{ duration: 300, y: 100 }} out:fade={{ duration: 100 }}>
	<div class="max-w-5xl m-auto py-20 px-3">
		<slot><!-- optional fallback --></slot>
	</div>
</section>

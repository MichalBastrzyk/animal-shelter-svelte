<script>
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	const inviewOptions = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};

	const transitionOptions = {};

	let isInView;
</script>

<div use:inview={inviewOptions} on:change={(e) => (isInView = e.detail.inView)}>
	{#if isInView}
		<div in:fade={transitionOptions}>
			<slot />
		</div>
	{/if}
</div>

<script>
	import { inview } from 'svelte-inview';

	export let src, alt;

	const inviewOptions = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	let isInView;
</script>

<div use:inview={inviewOptions} on:change={(e) => (isInView = e.detail.inView)}>
	{#if isInView}
		<img {src} {alt} />
	{/if}
</div>

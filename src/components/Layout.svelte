<script>
	export let bgColor = null;
</script>

<section class={bgColor ?? bgColor}>
	<div class="max-w-5xl m-auto py-20 px-3">
		<slot><!-- optional fallback --></slot>
	</div>
</section>

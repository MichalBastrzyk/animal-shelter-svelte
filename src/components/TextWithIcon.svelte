<script>
	export let text;
</script>

<div class="flex items-center m-1 text-bg-accent">
	<div class="w-8 h-8 mx-2">
		<slot name="icon" />
	</div>
	<span class="font-serif text-md font-light">{text}</span>
</div>

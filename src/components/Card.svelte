<script>
	export let Class = null;
</script>

<div
	class={`flex flex-col justify-around text-center m-2 \
	 bg-white rounded-2xl shadow-sm \
	 transition-all duration-500 ease-in-out hover:shadow-2xl ${Class ? Class : ''}`}
>
	<slot><!-- optional fallback --></slot>
</div>

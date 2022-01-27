<script>
	import { page } from '$app/stores';
	export let href;

	// Checks whether current page
	// is the equal to passed down href
	$: isCurrentPage = $page.url.pathname === href;
</script>

<div>
	<a {href} class={`underline-offset-4 ${isCurrentPage ? 'underline' : 'hover:underline'}`}>
		<slot />
	</a>
</div>

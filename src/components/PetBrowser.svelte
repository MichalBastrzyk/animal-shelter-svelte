<script>
	import PetGrid from './PetBrowser/PetGrid.svelte';
	import Filters from './PetBrowser/Filters.svelte';
	import Pagination from './PetBrowser/Pagination.svelte';
</script>

<div class="flex flex-col justify-evenly items-center my-5">
	<h1 class="text-3xl font-serif font-black">Our friends who are looking for home</h1>
	<div class="flex flex-col w-max justify-around py-5">
		<Filters />
		<PetGrid />
	</div>
	<Pagination />
</div>

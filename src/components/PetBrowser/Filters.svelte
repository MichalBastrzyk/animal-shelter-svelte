<script>
	import Card from '../Card.svelte';
	import ActionButton from '../ActionButton.svelte';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';
	import MdArrowUpward from 'svelte-icons/md/MdArrowUpward.svelte';

	import { slide } from 'svelte/transition';

	let expanded = false;
</script>

<aside class="flex flex-col">
	<div class="flex gap-4">
		<h1 class="text-2xl">Filters:</h1>
		<ActionButton on:click={() => (expanded = !expanded)}>
			{#if expanded}
				<div class="w-4">
					<MdArrowDownward />
				</div>
			{:else}
				<div class="w-4">
					<MdArrowUpward />
				</div>
			{/if}
		</ActionButton>
	</div>
	{#if expanded}
		<div transition:slide>
			<ul class="flex justify-evenly">
				<li>
					<Card Class="p-2 text-gray-700">
						<h3 class="text-xl">Race:</h3>
						<form class="flex flex-col">
							<label for="RaceName1">Race Name 1</label>
							<input type="checkbox" name="RaceName1" id="RaceName1" />
							<label for="RaceName2">Race Name 2</label>
							<input type="checkbox" name="RaceName2" id="RaceName2" />
							<label for="RaceName3">Race Name 3</label>
							<input type="checkbox" name="RaceName3" id="RaceName3" />
							<label for="RaceName4">Race Name 4</label>
							<input type="checkbox" name="RaceName4" id="RaceName4" />
						</form>
					</Card>
				</li>

				<li>
					<Card Class="p-2 text-gray-700">
						<h3 class="text-xl">Race:</h3>
						<form class="flex flex-col">
							<label for="RaceName1">Race Name 1</label>
							<input type="checkbox" name="RaceName1" id="RaceName1" />
							<label for="RaceName2">Race Name 2</label>
							<input type="checkbox" name="RaceName2" id="RaceName2" />
							<label for="RaceName3">Race Name 3</label>
							<input type="checkbox" name="RaceName3" id="RaceName3" />
							<label for="RaceName4">Race Name 4</label>
							<input type="checkbox" name="RaceName4" id="RaceName4" />
						</form>
					</Card>
				</li>

				<li>
					<Card Class="p-2 text-gray-700">
						<h3 class="text-xl">Race:</h3>
						<form class="flex flex-col">
							<label for="RaceName1">Race Name 1</label>
							<input type="checkbox" name="RaceName1" id="RaceName1" />
							<label for="RaceName2">Race Name 2</label>
							<input type="checkbox" name="RaceName2" id="RaceName2" />
							<label for="RaceName3">Race Name 3</label>
							<input type="checkbox" name="RaceName3" id="RaceName3" />
							<label for="RaceName4">Race Name 4</label>
							<input type="checkbox" name="RaceName4" id="RaceName4" />
						</form>
					</Card>
				</li>
			</ul>
			<ActionButton>Apply</ActionButton>
		</div>
	{/if}
</aside>

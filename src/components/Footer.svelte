<script>
	import TextWithIcon from './TextWithIcon.svelte';
	import MdMailOutline from 'svelte-icons/md/MdMailOutline.svelte';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import IoIosPin from 'svelte-icons/io/IoIosPin.svelte';
</script>

<!-- bg-gradient-to-r from-bg-primary to-black text-white shadow-lg  -->

<footer
	class="flex flex-col p-4 md:flex-row justify-center md:items-center gradient-bg text-white shadow-lg"
>
	<div class="flex flex-col px-3 ">
		<h2 class="text-2xl font-serif">For questions and suggestions</h2>
		<TextWithIcon text="email@shelter.com">
			<MdMailOutline slot="icon" />
		</TextWithIcon>
		<TextWithIcon text="+13 674 567 75 54">
			<FaPhoneAlt slot="icon" />
		</TextWithIcon>
	</div>
	<div class="flex flex-col px-3">
		<h2 class="text-2xl font-serif">We are waiting for your visit</h2>
		<TextWithIcon text="Boston, Central Street, 1st (Entrance from the store)">
			<IoIosPin slot="icon" />
		</TextWithIcon>
		<TextWithIcon text="London, South Park, 18st">
			<IoIosPin slot="icon" />
		</TextWithIcon>
	</div>
</footer>

<script>
	import CardSwiperCard from './CardSwiperCard.svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import MdArrowForward from 'svelte-icons/md/MdArrowForward.svelte';
	import MdArrowBack from 'svelte-icons/md/MdArrowBack.svelte';
	import { onDestroy, onMount } from 'svelte';

	// Required to use onMount because swiper
	let swiper = null;
	onMount(() => {
		swiper = new Swiper('#swiper', {
			slidesPerView: 1,
			breakpoints: {
				900: {
					slidesPerView: 3
				}
			},
			spaceBetween: 20
		});
	});

	onDestroy(() => {
		if (swiper) swiper.destroy();
	});

	const GoNext = () => {
		if (swiper) swiper.slideNext();
	};

	const GoPrev = () => {
		if (swiper) swiper.slidePrev();
	};
</script>

<div class="card-swiper">
	<button
		on:click={GoPrev}
		class="w-14 border p-2 border-pr-accent rounded-full shadow-sm \
			 transition-all duration-500 ease-in-out hover:bg-pr-accent hover:shadow-lg active:shadow-inner"
	>
		<MdArrowBack />
	</button>
	<div id="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
			<div class="swiper-slide">
				<CardSwiperCard
					src="/images/our_pets/dog_chilling_black.jpg"
					alt="black dog"
					title="Something something"
				/>
			</div>
		</div>
	</div>
	<button
		on:click={GoNext}
		class="w-14 border p-2 border-pr-accent rounded-full shadow-sm \
			 transition-all duration-500 ease-in-out hover:bg-pr-accent hover:shadow-lg active:shadow-inner"
	>
		<MdArrowForward />
	</button>
</div>

<style>
	.card-swiper {
		display: flex;
		justify-content: space-around;
		justify-items: center;
		align-items: center;
	}

	#swiper {
		width: max-content;
		height: max-content;
		overflow: hidden;
		padding: 0 20px;
	}

	.swiper-wrapper {
		padding: 40px 0;
	}
</style>

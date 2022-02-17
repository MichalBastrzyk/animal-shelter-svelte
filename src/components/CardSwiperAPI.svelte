<script>
	import CardSwiperCard from './CardSwiperCard.svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import MdArrowForward from 'svelte-icons/md/MdArrowForward.svelte';
	import MdArrowBack from 'svelte-icons/md/MdArrowBack.svelte';
	import { onMount } from 'svelte';

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

		return () => swiper.destroy();
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
		class="hidden md:block w-14 border p-2 border-pr-accent rounded-full shadow-sm \
			 transition-all duration-500 ease-in-out hover:bg-pr-accent hover:shadow-lg active:shadow-inner"
	>
		<MdArrowBack />
	</button>
	<div id="swiper">
		<div class="fade-overlay out" />
		<div class="fade-overlay in" />
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
		class="hidden md:block w-14 border p-2 border-pr-accent rounded-full shadow-sm \
			 transition-all duration-500 ease-in-out \
		   hover:bg-pr-accent hover:shadow-lg active:shadow-inner"
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
		position: relative;
	}

	.swiper-wrapper {
		padding: 40px 0;
	}

	.fade-overlay {
		position: absolute;
		top: 0;
		width: 5%;
		height: 100%;
		/* height: 60rem; */
		z-index: 30;
	}

	.out {
		left: 0;
		@apply bg-gradient-to-r from-bg-gray to-transparent;
	}

	.in {
		right: 0;
		@apply bg-gradient-to-l from-bg-gray to-transparent;
	}
</style>

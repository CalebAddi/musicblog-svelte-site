<script> 
	import Navbar from "./components/Navbar.svelte";
	import About from "./components/About.svelte";
	import Home from "./components/Home.svelte";
	import Reviews from "./components/Reviews.svelte";
	import Footer from "./components/Footer.svelte";

	import { onMount } from 'svelte';
	import { createScene } from "./scene";

	let el;

	onMount(() => {
		createScene(el);
	});
</script>

<main>

	<div class="header-container">
		<Navbar />
	</div>

	<div id="Home" class="app-container">
		<div class="home-container" id="home">
			<Home />
		</div>
	</div>

	<div class="review-container" id="review">
		<Reviews />
	</div>

	<div class="about-container" id="about">
		<About />
	</div>

	<div class="footer-container">
		<Footer />
	</div>
</main>

<style>
	/*------- Main Container -------*/
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

	canvas {
		position: fixed;
		top: 0;
		left: 0;
	}

	/*------- Home Section -------*/
	.home-container {
		margin-top: -5rem;
		position: relative;
	}

	/*------- Review Section -------*/
	.review-container {
		position: relative;
		z-index: 1;
		margin-top: 45rem;
	}

	/*------- About Section -------*/
	.about-container {
		position: relative;
		z-index: 2;
		margin-top: 10rem;
	}


	/*------- Nav Section -------*/
	.header-container {
		z-index: 3;
	}

	@media (min-width: 740px) {
		
	}
</style>

<canvas bind:this={el}></canvas>
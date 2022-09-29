<script>
	import About from "./components/About.svelte";
	import Home from "./components/Home.svelte";
	import Reviews from "./components/Reviews.svelte";

	import { onMount } from 'svelte';
	import { createScene } from "./scene";

	let el;

	onMount(() => {
		createScene(el);
	});
</script>

<main>
	<header class='header-container'>
	<nav class="nav-container">
			<ul class="list-content">
				<li>
					<a href="/"><h3>Home</h3></a>
				</li>
				<li>
					<a href="/"><h3>Blog</h3></a>
				</li>
				<li>
					<a href="#review"><h3>Reviews</h3></a>
				</li>
				<li>
					<a href="/"><h3>Playlists</h3></a>
				</li> 
				<li>
					<a href="/src/components/Interviews.svelte"><h3>Interviews</h3></a>
				</li>
				<li>
					<a href="#about"><h3>About</h3></a>
				</li>
			</ul>
		</nav> 
</header>

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
		margin-top: 45rem;
	}


	/*------- Nav Section -------*/
	.header-container {
		z-index: 3;
	}

	header {
		position: relative;
		z-index: 1;
		background-color: rgb(26, 26, 26, .7);
	}

	ul {
		position: relative;
		list-style-type: none;
		z-index: 1;
		margin: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		overflow: hidden;
	}

	li {
		float: left;
		align-items: center;
	}

	li a {
		display: block;
		padding: 14px 16px;
		text-decoration: none;
	}

	ul li a:hover {
		background-color: rgb(58, 66, 76, .6);
		transition: .7s;
		transform: scale(1.2);
	}

	/*Header and Paragraph Styling*/
	h3 {
		font-size: 1rem;
		font-weight: 500;
		text-transform: uppercase;
		color: rgba(242, 162, 162, 0.7);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 5px 5px;
	}

	/* h4 {
		margin-top: 12rem;
		margin-bottom: 4rem;
		font-size: 2rem;
		font-weight: 500;
		text-transform: uppercase;
		color: rgba(242, 162, 162, 0.7);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 3px 3px;
	}

	p {
		margin-top: 12rem;
		font-size: 1.5rem;
		text-transform: uppercase;
		color: rgba(223, 223, 223, 0.5);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 3px 3px;
	} */

		@media (min-width: 640px) {
			main {
				max-width: none;
			}
		}
</style>

<canvas bind:this={el}></canvas>
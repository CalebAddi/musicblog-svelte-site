<script>
	import Navbar from './Navbar.svelte';

</script> 

<main>
	<body>
		<div class="header-container">
			<Navbar />
		</div>
	</body>
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

	/*------- Nav Section -------*/
	.header-container {
		z-index: 3;
	}

		@media (min-width: 640px) {
			main {
				max-width: none;
			}
		}
</style>

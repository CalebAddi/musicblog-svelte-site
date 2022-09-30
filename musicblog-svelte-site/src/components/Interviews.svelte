<script>
	import Navbar from './Navbar.svelte'; 

</script>

<main>
	<div class="header-container">
			<Navbar />
		</div>

    <div class="interviews-container">
        <h4>Interviews</h4>
    </div>
</main>

<style>
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

    h4 {
		margin-top: 12rem;
		margin-bottom: 4rem;
		font-size: 2rem;
		font-weight: 500;
		text-transform: uppercase;
		color: rgba(242, 162, 162, 0.7);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 3px 3px;
	}

	.header-container {
		z-index: 3;
	}
</style>
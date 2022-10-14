<script>

    import Footer from "./Footer.svelte";

</script>

<main>
    <article>
        <div>
            <h1>Test</h1>
        </div>

        <div id="review-test" class="review-section">
			<div class="review">
				<a target="_blank" href='/' class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Coffin Scociety</li>
						</ul>
						<h5 class="review-title-album">
							<em>Cutthroat Inc.</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href='/' class="genre-list-link">Alt-Pop</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href='/' class="linked-display-name"><span class="by">by </span>Coffin Society</a>
						</li>
					</ul>
				</div>
			</div>

    </article>
</main>

<style>
    * {
		margin: 0;
		padding: 0;
        height: 100vh;
		box-sizing: border-box;
	} 

    main {
        background-color: rgba(63, 79, 99, 0.366);
        height: 100vh;
    }

    article {
        background-color: rgb(63, 63, 63, .5);
    }

    h1 {
        font-size: 5rem;
        color: aliceblue;
    }

</style>
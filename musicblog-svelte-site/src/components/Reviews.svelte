<script>
	const reviewData = {
		revAlbum01: 
		{
			id: 1,
			albumLink: "https://open.spotify.com/album/43yoolTNh1hxOThLrQbrMl?si=80770f0344a64fdchttps://open.spotify.com/album/43yoolTNh1hxOThLrQbrMl?si=80770f0344a64fdc",
			artistLink: "https://open.spotify.com/artist/7q29jQLrEw2EaynNVRPOUs?si=6nBGV5LnSrms-jJzA0bcYA",
			genreLink: "https://en.wikipedia.org/wiki/Alternative_music"
		},

		revAlbum02:
		{
			id: 2,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum03:
		{
			id: 3,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum04:
		{
			id: 4,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum05:
		{
			id: 5,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum06:
		{
			id: 6,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum07:
		{
			id: 7,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum08:
		{
			id: 8,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},

		revAlbum09:
		{
			id: 9,
			albumLink: "",
			artistLink: "",
			genreLink: ""
		},
	}
</script>

<main>
    <div class="review-container">
			<div>
				<h4 class="h4-review">Reviews</h4>
			</div>
		</div>
		<!-- Review Main Section -->
		<div id="review" class="review-section">
			<div class="review">
				<a target="_blank" href={reviewData.revAlbum01.albumLink} class="review_link">
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
							<a target="_blank" href={reviewData.revAlbum01.genreLink} class="genre-list-link">Alt-Pop</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href={reviewData.revAlbum01.artistLink} class="linked-display-name"><span class="by">by </span>Coffin Society</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #2 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #3 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #4 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #5 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div> 
			<!-- Review Container #6 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #7 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #8 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Review Container #9 -->
			<div class="review">
				<a target="_blank" href="" class="review_link">
					<div class="review-artwork">
						<div>
							<img src="/src/ReviewTestIMG.png" alt="album">
						</div>
					</div>
					<div class="review-title-artist">
						<ul class="artist-list">
							<li class="artist-li">Artist Name</li>
						</ul>
						<h5 class="review-title-album">
							<em>Album Name</em>
						</h5>
					</div>
				</a>
				<div class="review-meta">
					<ul class="genre-list">
						<li class="genre-list-item">
							<a target="_blank" href="" class="genre-list-link">Genre Name</a>
						</li>
					</ul>
					<ul class="authors">
						<li>
							<a target="_blank" href="" class="linked-display-name"><span class="by">by</span>Artist</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- End Of Review Section -->
		</div>
</main>

<style>
    /*------- Main Container -------*/
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

	ul {
		list-style-type: none;
		overflow: hidden;
	}

	a {
		text-decoration: none;
		color: rgb(248, 238, 225);
		text-shadow: rgb(28, 31, 34, .7) 1.5px 1.5px;
	}

	a:hover {
		color: rgb(234, 146, 114);
		transition: .7s;
		transform: scale(1.1);
	}

    /*------- Review Section -------*/
.review-section {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

.review {
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    margin-bottom: 30px;
	font-family: 'Poppins';
}

.review_link {
    display: block;
    text-decoration: none;
    transition: color .15s;
    background-color: rgba(201, 161, 161, 0.7);
}

.review-artwork {
	padding-top: 4px;
}

.review-artwork img {
    border: 1px solid #000;
	width: 200px;
}

.review-title-artist {
    font-size: 1.5rem;
    color: rgb(248, 238, 225);
    background-color: rgba(201, 161, 161, 0.7);
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 5px;
    font-family: 'Poppins';
}

.review-title-album {
    margin-top: 5px;
    font-size: 1.3rem;
}

.artist-list {
    border-top: 1px solid #1c1f22;
	border-bottom: 1px solid #1c1f22;
}

/*------- Headings and Paragraphs -------*/

/* h3 {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(242, 162, 162, 0.7);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 5px 5px;
} */

h4 {
    margin-top: 12rem;
    margin-bottom: 4rem;
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(242, 162, 162, 0.7);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 3px 3px;
	font-family: 'Poppins';
}

/* p {
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

			.review {
				width: 240px;
			}
		}

</style>
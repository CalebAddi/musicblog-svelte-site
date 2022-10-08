<script>

</script>

<main>
    <header class='header-container'>
	<nav class="nav-container">
			<ul class="list-content">
				<li>
					<a class='menu__item' href="/"><h3>Home</h3></a>
				</li>
				<li>
					<a class='menu__item' href="/src/components/BLog.svelte"><h3>Blog</h3></a>
				</li>
				<li>
					<a class='menu__item' href="#review"><h3>Reviews</h3></a>
				</li>
				<li>
					<a class='menu__item' href="/src/components/Playlists.svelte"><h3>Playlists</h3></a>
				</li> 
				<li>
					<a class='menu__item' href="/src/components/Interviews.svelte"><h3>Interviews</h3></a>
				</li>
				<li>
					<a class='menu__item' href="#about"><h3>About</h3></a>
				</li>
				<li>
					<a class='menu__item' href="#contact"><h3>Contact</h3></a>
				</li>
			</ul>
		</nav> 
    </header>

	<body>
		<label>
		<input type="checkbox">
		<span class="menu"> <span class="hamburger"></span> </span>
		<ul class="list-content">
				<li>
					<a class='ham-item' href="/"><h3>Home</h3></a>
				</li>
				<li>
					<a class='ham-item' href="/src/components/BLog.svelte"><h3>Blog</h3></a>
				</li>
				<li>
					<a class='ham-item' href="#review"><h3>Reviews</h3></a>
				</li>
				<li>
					<a class='ham-item' href="/src/components/Playlists.svelte"><h3>Playlists</h3></a>
				</li> 
				<li>
					<a class='ham-item' href="/src/components/Interviews.svelte"><h3>Interviews</h3></a>
				</li>
				<li>
					<a class='ham-item' href="#about"><h3>About</h3></a>
				</li>
				<li>
					<a class='ham-item' href="#contact"><h3>Contact</h3></a>
				</li>
			</ul>
		</label>
	</body>

</main>

<style>
	/*------- Main Container -------*/ 
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

	.ham-item {
		display: none;
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

		@media (max-width: 640px) {
			nav {
				display: none;
			}

			.ham-item {
				display: flex;
			}

			body {
				font-size: 1.2em;
				line-height: 1.6;
				overflow-x: hidden;
			}

			label .menu {
				position: absolute;
				right: 0px;
				top: -100px;
				z-index: 2;
				width: 125px;
				height: 175px;
				background: rgb(43, 43, 43, .9);
				border-radius: 0% 25%;
				-webkit-transition: .5s ease-in-out;
				transition: .5s ease-in-out;
				box-shadow: 0 0 0 0 rgb(43, 43, 43), 0 0 0 0 rgb(43, 43, 43);
				cursor: pointer;
				overflow-x: hidden;
			}

			label .hamburger {
				position: absolute;
				top: 130px;
				left: 47px;
				width: 40px;
				height: 3px;
				background: #a27171;
				display: block;
				-webkit-transform-origin: center;
				transform-origin: center;
				-webkit-transition: .5s ease-in-out;
				transition: .5s ease-in-out;
			}

			label .hamburger:after, label .hamburger:before {
				-webkit-transition: .5s ease-in-out;
				transition: .5s ease-in-out;
				content: "";
				position: absolute;
				display: block;
				width: 100%;
				height: 100%;
				background: #a27171;
			}

			label .hamburger:before { top: -10px; }

			label .hamburger:after { bottom: -10px; }

			label input { display: none; }

			label input:checked + .menu {
				box-shadow: 0 0 0 100vw rgb(43, 43, 43, .2), 0 0 0 80vh rgb(43, 43, 43, .955);
				border-radius: 0;
				border: 2px solid rgb(0, 0, 0, .7);
			}

			label input:checked + .menu .hamburger {
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
			
			}

			label input:checked + .menu .hamburger:after {
				-webkit-transform: rotate(90deg);
				transform: rotate(90deg);
				bottom: 0;
			
			}

			label input:checked + .menu .hamburger:before {
				-webkit-transform: rotate(90deg);
				transform: rotate(90deg);
				top: 0;
			
			}

			label input:checked + .menu + ul { opacity: 1; }

			label ul {
				z-index: 200;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				opacity: 0;
				transition: .25s 0s ease-in-out;
				display: grid;
			}

			label a {
				margin-bottom: .5rem;
				display: grid;
				text-decoration: none;
			}

			label h3 {
				font-size: 1.5rem;
			}

			label ul li a:hover {
		background-color: rgb(58, 66, 76, .001);
		transition: .7s;
		transform: scale(1.1);
	}
		}
</style>
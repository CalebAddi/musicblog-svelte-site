<script src="https://kit.fontawesome.com/0bbb5fd5b8.js" crossorigin="anonymous">

    const links = {
        spotify: '/',
        twitter: '/',
        tumblr: '/',
        insta: '/'
    }

</script> 

<main>
    <div class="footer-container">
        <div class="footer-header">
            <h4>Melodic & Chaotic</h4>
        </div>

        <div class="social-icons">
            <a class='icon_' href={links.twitter}><i class="fa-brands fa-twitter"></i></a>
            <a class='icon_' href={links.tumblr}><i class="fa-brands fa-square-tumblr"></i></a>
            <a class='icon_' href={links.insta}><i class="fa-brands fa-instagram"></i></a>
            <a class='icon_' href={links.spotify}><i class="fa-brands fa-spotify"></i></a>
        </div>

        <div class="para-container">
            <p>© All Rights Reserved</p>
        </div>
    </div>
</main>

<style>
    *
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

    a {
        color: rgba(218, 174, 174, 0.8);
    } 

/*! Class Styles !*/
    .footer-container {
        position: relative;
        z-index: 2;
        text-align: center;
        margin-bottom: 2rem;
        background-color: rgb(28, 31, 34, .3);
	    padding-top: 1px;
	    border: 5px solid #1c1f22;
    }

    .social-icons {
        z-index: 2;
        font-size: 40px;
        text-shadow: rgb(31, 31, 31, .6) 3px 3px;
        word-spacing: 30px;
    }

    .icon_:hover {
        transition: 1.7s;
        color: #1c1f22;
    }

/*! Text Styles !*/
    h4 {
    padding-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(242, 162, 162, 0.7);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 2px 2px;
	font-family: 'Poppins';
}

p {
		margin-top: 2rem;
        margin-bottom: 1rem;
		font-size: 1rem;
		text-transform: uppercase;
		color: rgba(255, 135, 135, 0.5);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 3px 3px;
	}

</style>
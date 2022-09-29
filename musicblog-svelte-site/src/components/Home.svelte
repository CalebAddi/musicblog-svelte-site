<script>

</script>

<main>
    <div class="container">
        <div class="content">
            <h2>Melodic & Chaotic</h2>
            <p>Temp Paragraph</p>
        </div>
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

	/*------- Main Content -------*/
    .container {
        margin: 5px 5px 5px 5px;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }

    .content {
        gap: 3em;
        width: 100%;
        position: relative;
    }

    /*------- Headings and Paragraphs -------*/
    h2 {
    font-family: 'Poppins';
    font-size: 4rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(242, 162, 162, 0.7);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 5px 5px;
}

p {
    font-family: 'Poppins';
    margin-top: 8rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: rgba(223, 223, 223, 0.5);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 3px 3px;
}
</style>
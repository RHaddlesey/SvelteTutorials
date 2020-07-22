<script>
  let name = "Richie";
  let StateOfAwesomeness = "Very";

  const handleClick = () => {
    StateOfAwesomeness = "super";
  };

  const handleInput = (e) => {
    StateOfAwesomeness = e.target.value
  };
</script>



<main>
  <h1>Hello {name}!</h1>
  <p>Level of awesomeness = {StateOfAwesomeness}</p>

  <button on:click={handleClick}>update awesomeness level</button>

  <input type='text' on:input={handleInput} />

</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
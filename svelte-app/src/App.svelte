<script>
  let firstName = "Richie";
  let lastName = "H";
  let StateOfAwesomeness = "Very";
  let colourOfAwesomeness = "blue";

  $: fullName = `${firstName} ${lastName}`;

  const handleClick = () => {
    StateOfAwesomeness = "super";
    colourOfAwesomeness = "green";
  };

  const handleInput = (e) => {
    StateOfAwesomeness = e.target.value
  };

  const handleInput2 = (e) => {
    colourOfAwesomeness = e.target.value
  };
</script>



<main>
  <h1>{fullName}</h1>
  <p>Level of awesomeness = {StateOfAwesomeness}</p>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <p style="color: {colourOfAwesomeness}">Colour of awesomeness = {colourOfAwesomeness}</p>

  <!-- <input type='text' on:input={handleInput} value={StateOfAwesomeness} /> -->

  <input type="text" bind:value={StateOfAwesomeness} />
  <input type="text" bind:value={colourOfAwesomeness} />

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
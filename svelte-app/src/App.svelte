<script>
  let people = [
    { name: "Richie", beltColour: "black", age: 50, id: 1 },
    { name: "Jeff", beltColour: "orange", age: 35, id: 2 },
    { name: "Veronica", beltColour: "brown", age: 45, id: 3 },
  ];
</script>

<main>
  {#each people as person (person.id)} 
  <!-- this adds a key into the array -->
  <div>
    <h4>{person.name}</h4>
    <p>{person.age} years old, {person.beltColour} belt.</p>
  </div>
  {:else}
  <p>There are no data to show...</p>
  {/each}
</main>
<!-- the else is if there are no data, then output this. So if the array is empty, we still get an output to let us know it is empty! -->

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>


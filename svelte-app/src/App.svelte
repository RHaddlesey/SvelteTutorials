<script>
  let people = [
    { name: "Richie", beltColour: "black", age: 50, id: 1 },
    { name: "Jeff", beltColour: "orange", age: 35, id: 2 },
    { name: "Veronica", beltColour: "brown", age: 45, id: 3 },
  ];

  const handleClick = (id) => {
    // delete person from people
    // console.log(id)
    people = people.filter((person) => person.id != id)
    // this checks if the person is the person = true/false. If it is true, it only returns that person... so we have to say if it is not true !=. That way, the people that do not = people will be returned instead. It is a bit backward, but makes sense because it is a truthy statement.
  }
</script>

<main>
  {#each people as person (person.id)} 
  <!-- this adds a key into the array -->
  <div>
    <h4>{person.name}</h4>
    <p>{person.age} years old, {person.beltColour} belt.</p>
    <button on:click={() => handleClick(person.id)}>delete</button>
  </div>
  {:else}
  <p>There are no data to show...</p>
  {/each}
</main>
<!-- the else is if there are no data, then output this. So if the array is empty, we still get an output to let us know it is empty! 
  // we have to make the event handler pass the data to the function. As in - (person.id) - but if we do that as just {handleClick(person.id)} then becuase we have a () it will invoke the function everytime, so we have to make it an arrow function so it is not invoked until the onClick event. So we wrap the function inside a function! -->

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


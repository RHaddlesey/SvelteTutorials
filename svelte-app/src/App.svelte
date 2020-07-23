<script>
  import Modal from "./Modal.svelte";
  import AddPersonForm from "./AddPersonForm.svelte";
  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };

  let people = [
    { name: "Richie", beltColour: "black", age: 50, id: 1 },
    { name: "Jeff", beltColour: "orange", age: 35, id: 2 },
    { name: "Veronica", beltColour: "brown", age: 45, id: 3 },
  ];

  const handleClick = (id) => {
    people = people.filter((person) => person.id != id);
  };

  const addPerson = (e) => {
    // console.log(e.detail)
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  };
</script>

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

<Modal {showModal} on:click={toggleModal}>
  <AddPersonForm on:addPerson={addPerson} />
</Modal>

<main>
  <button on:click={toggleModal}>Open modal</button>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.beltColour === 'black'}
        <p>
          <strong>Master NINJA!</strong>
        </p>
      {/if}
      <p>{person.age} years old, {person.beltColour} belt.</p>
      {#if person.skills}
        <div class="skills">
          <h3>skills include:</h3>
       
            {#each person.skills as skill}
              <p>{" "}{skill}{", "}</p>
            {/each}
        </div>
      {/if}
      <button on:click={() => handleClick(person.id)}>delete</button>
    </div>
  {:else}
    <p>There are no data to show...</p>
  {/each}

</main>

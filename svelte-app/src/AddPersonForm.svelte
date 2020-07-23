<script>
  let name;
  let beltColour;
  let age;
  // let fighting = false;
  // let farting = false;
  // let loving = false;
  let skills = [];

  const handleSubmit = () => {
    console.log(name, beltColour, age, skills);
  };
</script>

<style>

</style>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <!-- <input type="text" placeholder="belt colour" bind:value={beltColour} /> -->
  <input type="number" placeholder="age" bind:value={age} />
  <label>Skills:</label>
  <!-- <input type="checkbox" bind:checked={fighting} />
  fighting
  <br />
  <input type="checkbox" bind:checked={farting}/>
  farting
  <br />
  <input type="checkbox" bind:checked={loving}/>
  loving
  <br /> -->
  <input type="checkbox" bind:group={skills} value="fighting"/>
  fighting
  <br />
  <input type="checkbox" bind:group={skills} value="farting"/>
  farting
  <br />
  <input type="checkbox" bind:group={skills} value="loving"/>
  loving
  <br />
  <label>Belt colour:</label>
  <select bind:value={beltColour}>
    <option value="black">black</option>
    <option value="orange">orange</option>
    <option value="brown">brown</option>
    <option value="white">white</option>
  </select>
  <button>Add person</button>
</form>

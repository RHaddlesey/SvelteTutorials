<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Richie";
  let age = 21;
  let jobTitle = "";
  let description = "";
  let image =
    "https://yt3.ggpht.com/a/AATXAJyaKOwNMm-kXyUwtZgPAR7Sa1pIci2vC9sznQ=s900-c-k-c0xffffffff-no-rj-mo";

  $: uppercaseName = name.toUpperCase();
  $: if (name === "Richard") {
    age = 50;
  }

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Richard";
  }

  function nameInput(event) {
    const enteredValue = event.target.value;
    name = enteredValue;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click="{changeName}">Change Name</button>
 -->
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />
<input type="text" bind:value={jobTitle} />
<input type="text" bind:value={image} />
<textarea rows="3" bind:value={description} />
<!-- try to only use with form or text inputs -->
<ContactCard userName={name} {jobTitle} {description} {image} />

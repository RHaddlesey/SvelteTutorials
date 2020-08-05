<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import PollList from "./components/PollList.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    // const poll = e.detail;
    // polls = [poll, ...polls];
    // this was before we set up a store

    activeItem = "Current Polls";
  };

  // const handleVote = (e) => {
  //   const { id, option } = e.detail;
  //   // console.log(e.detail);

  //   let copiedPolls = [...polls];
  //   let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

  //   if (option === "a") {
  //     upvotedPoll.votesA++;
  //   }
  //   if (option === "b") {
  //     upvotedPoll.votesB++;
  //   }

  //   polls = copiedPolls;
  // };
  // BEFORE WE ADDED A STORE
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
  <PollList />
    <!-- <PollList on:vote={handleVote} /> Now not needed after we connected to store -->
    <!-- because we forwarded the custom event -on:vote- from PollDetails through to PollList = we can listen for it here now -->
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}

</main>
<Footer />

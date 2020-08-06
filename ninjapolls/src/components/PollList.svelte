<script>
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";
  // import { onMount, onDestroy } from "svelte";

  // export let polls = [];npm run dev


  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // // we also need to unsubscribe from the store using lifecycle hooks such as onMount and onDestroy

  // onMount(() => {
  //   // get data from db or something
  //   console.log("just mounted");
  // });

  // onDestroy(() => {
  //   // unsub
  //   console.log("just destroyed");
  //   unsub();
  // })
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local>
      <PollDetails {poll} />
    </div>

    <!-- <PollDetails {poll} on:vote /> event removed after adding the store -->
    <!-- this will forward the custom event from the dispatch in PollDetails to the parent (App.svelte so we do not invoke it here) -->
    <!-- $PollStore is the same as doing the onDestroy stuff up above! This subscribes to the store onMount and then destroys when you click away from the DOM -->
  {/each}
</div>

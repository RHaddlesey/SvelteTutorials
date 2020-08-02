<script>
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote />
    <!-- this will forward the custom event from the dispatch in PollDetails to the parent (App.svelte so we do not invoke it here) -->
  {/each}
</div>

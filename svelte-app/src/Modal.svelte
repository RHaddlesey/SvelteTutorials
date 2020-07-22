<script>
  export let message = 'default value';
  // this export let is defined in the main app inside the Modal component call. It is passed here as a prop so that this component can be reused.
  // default value can be anything you want to show if no props are passed in.
  export let showModal = false;
  export let isPromo = false;
</script>

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
  .promo .modal {
    background: crimson;
    color: white;
  }
</style>

{#if showModal}
<div class="backdrop" class:promo={isPromo} on:click>
  <div class="modal">
    <p>{message}</p>
  </div>

</div>
{/if}
<!-- by not defining the on:click in the showModal above, it will create an EVENT FORWARDING callback to the App component -->

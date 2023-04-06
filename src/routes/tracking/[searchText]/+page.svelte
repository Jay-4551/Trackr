<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.data.hasOwnProperty("length")}
  {#each data.data as game}
    <h1>{game.name}</h1>
    <h2>{game.id}</h2>
    <!-- {#if game.platforms.length > 0}
      {#each game.platforms as platform}
        <div>{platform.abbreviation}</div>
        <div>{platform.name}</div>
      {/each}
    {:else} -->
    <!-- TODO add a version for single platform -->
    <!-- {/if} -->
  {/each}
{:else}
  <h1>{data.data.name}</h1>
  <h2>{data.data.id}</h2>
  {#each data.data.platforms as platform}
    <div>{platform.abbreviation}</div>
    <div>{platform.name}</div>
  {/each}
{/if}

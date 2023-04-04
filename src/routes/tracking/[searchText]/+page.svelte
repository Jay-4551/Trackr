<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.data as game}
  <h1>{game.name}</h1>
  <h2>{game.id}</h2>
  {#each game.platforms as platform}
    <div>{platform.abbreviation}</div>
    <div>{platform.name}</div>
  {/each}
{/each}

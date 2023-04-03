<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.data as game}
  <h1>{game.name}</h1>
  <h2>{game.id}</h2>
  <div>{game.platforms}</div>
{/each}

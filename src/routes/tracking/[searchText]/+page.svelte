<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.data.hasOwnProperty("length")}
  {#each data.data as game}
    {#if game.platforms.length > 0}
      {#each game.platforms as platform}
        <div
          class="flex flex-row p-4 m-4 bg-[#161A1D] border border-gray-600 w-5/6 rounded-md"
        >
          <img
            src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" +
              game.cover.image_id +
              ".jpg"}
            alt=""
            class="rounded-sm border border-gray-600 w-[160px] h-[220px]"
          />
          <div class="flex flex-col ml-10">
            <h1 class="text-4xl text-white">{game.name} - {platform.name}</h1>
            <h2 class="text-white">
              Developers:
              {#each game.involved_companies as company}
                {company.company.name + " "}
              {/each}
            </h2>
          </div>
        </div>
      {/each}
    {/if}
  {/each}
{/if}
<!-- {/each}
{:else}
  <h1>{data.data.name}</h1>
  <h2>{data.data.id}</h2>
  {#each data.data.platforms as platform}
    <div>{platform.abbreviation}</div>
    <div>{platform.name}</div>-->

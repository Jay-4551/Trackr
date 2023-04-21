<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { prodName } from "$lib/stores";

  let gameName: string;
  export let data: PageData;
</script>

{console.log(prodName)}

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
            <h1 class="text-3xl text-white max-w-[55ch]">
              {game.name} - {platform.name}
            </h1>
            <h2 class="text-white">
              Developers:
              {#each game.involved_companies as company}
                {company.company.name + " "}
              {/each}
            </h2>
            <form
              class="flex flex-row p-4 items-center w-5/6"
              method="GET"
              action="/tracking/[searchText]/{gameName}"
            >
              <button
                class="text-white p-4 bg-slate-600"
                type="submit"
                on:click={() => {
                  gameName = game.name + " " + platform.abbreviation;
                }}>This Game</button
              >
            </form>
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

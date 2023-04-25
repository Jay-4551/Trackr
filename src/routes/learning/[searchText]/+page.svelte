<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { platform } from "$lib/stores";

  let gameName: string;
  export let data: PageData;
  let date: date;
</script>

<main class="p-10">
  <div class="my-10 w-full">
    <div class="grid grid-cols-2 gap-y-4 gap-x-4 w-full h-full items-center">
      {#if data.data.hasOwnProperty("length")}
        {#each data.data as game}
          {#if game.platforms.length > 0}
            <div
              class="flex flex-row bg-[#161A1D] border border-gray-600 rounded-md w-full h-full"
            >
              <img
                src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" +
                  game.cover.image_id +
                  ".jpg"}
                alt=""
                class="rounded-l-md border-gray-600 w-[160px] h-[220px]"
              />
              <div class="flex flex-col ml-4 py-2.5 h-full">
                <div class="flex flex-col">
                  <h1
                    class="text-3xl font-semibold text-white max-w-[35ch] truncate"
                  >
                    {game.name}
                  </h1>
                  {#if game.involved_companies != null}
                    <h2
                      class=" mt-4 text-white text-lg font-semibold max-w-[55ch] truncate"
                    >
                      <span class="text-red-600">Developers - </span>
                      {#each game.involved_companies as company}
                        {company.company.name + " "}
                      {/each}
                    </h2>
                  {/if}
                  <h2 class="text-white text-lg font-semibold">
                    <span class="text-red-600"
                      >Release Date <span class="">-</span></span
                    >
                    {(date = new Date(
                      game.first_release_date * 1000
                    )).toLocaleDateString("en-US")}
                  </h2>
                </div>
                <div class="flex flex-row mb-2 pt-2">
                  {#each game.platforms as platform}
                    <div
                      class="bg-[#BA181B] text-white text-xs font-semibold py-1 px-3 mr-3 w-fit rounded-sm cursor-default"
                    >
                      {platform.name}
                    </div>
                  {/each}
                </div>
                <div class="flex h-full items-end">
                  <form method="GET" action="/learning/[searchText]/{gameName}">
                    <button
                      class=" rounded-sm mb-1 font-semibold py-2 px-4 bg-[#161A1D] hover:bg-[#BA181B] duration-300 border border-gray-500 text-white"
                      type="submit"
                      on:click={() => {
                        gameName = game.name;
                        $platform = game.platforms[0].name;
                      }}>Learn More</button
                    >
                  </form>
                </div>
              </div>
            </div>
          {:else}
            No Data Found!
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</main>
<!-- {/each}
{:else}
  <h1>{data.data.name}</h1>
  <h2>{data.data.id}</h2>
  {#each data.data.platforms as platform}
    <div>{platform.abbreviation}</div>
    <div>{platform.name}</div>-->

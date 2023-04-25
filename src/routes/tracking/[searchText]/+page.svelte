<script lang="ts">
    import { LogIn } from "lucide-svelte";
    import type { PageData } from "./$types";
    import { platform, searchTerm } from "$lib/stores";
    import { onMount } from "svelte";

    let games: [];

    export let data: PageData;
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
</script>

<main class="p-10">
    <div class="my-10 w-full">
        <h2 class="text-white text-4xl font-semibold mb-10">
            Results for <span class="text-[#E5383B]">{$searchTerm}</span>
        </h2>
        <div
            class="grid grid-cols-4 gap-y-4 gap-x-4 w-full h-full items-center"
        >
            {#each data.price.price.products as game}
                {#if game["cib-price"] != null && game["console-name"].indexOf("YuGiOh") === -1 && game["console-name"].indexOf("Comic") === -1 && game["console-name"].indexOf("Magic") === -1 && game["product-name"].indexOf("#") === -1 && game["console-name"].indexOf("Nintendo Power") === -1 && game["console-name"].indexOf("Strategy Guide") === -1 && game["console-name"].indexOf("Japanese") === -1 && game["console-name"].indexOf("Base") === -1 && game["console-name"].indexOf("Promo") === -1}
                    <div
                        class="flex h-[200px] py-2 px-4 rounded-sm bg-[#161A1D] border-2 border-gray-600 items-center hover:border-[#E5383B]"
                    >
                        <div class="flex flex-col my-2">
                            <h1 class="text-2xl font-semibold text-white">
                                {game["product-name"]}
                            </h1>
                            <h2 class="text-xl text-slate-500 my-1">
                                {game["console-name"]}
                                {#if game["release-date"] != null}
                                    - <span class="text-[#E5383B]"
                                        >{game["release-date"].substring(
                                            0,
                                            4
                                        )}</span
                                    >
                                {/if}
                            </h2>
                            <div class="flex flex-row w-full my-2">
                                <div class="flex flex-col mr-10">
                                    <h2 class="text-xl text-white">Loose</h2>
                                    {#if game["loose-price"] != null}
                                        <h2
                                            class="text-slate-500 font-semibold"
                                        >
                                            {formatter.format(
                                                game["loose-price"] / 100
                                            )}
                                        </h2>
                                    {:else}
                                        <h2>N/A</h2>
                                    {/if}
                                </div>
                                <div class="flex flex-col mr-10">
                                    <h2 class="text-xl text-white">Complete</h2>
                                    {#if game["cib-price"] != null}
                                        <h2
                                            class="text-slate-500 font-semibold"
                                        >
                                            {formatter.format(
                                                game["cib-price"] / 100
                                            )}
                                        </h2>
                                    {:else}
                                        <h2>N/A</h2>
                                    {/if}
                                </div>
                                <div class="flex flex-col mr-10">
                                    <h2 class="text-xl text-white">New</h2>
                                    {#if game["new-price"] != null}
                                        <h2
                                            class="text-slate-500 font-semibold"
                                        >
                                            {formatter.format(
                                                game["new-price"] / 100
                                            )}
                                        </h2>
                                    {:else}
                                        <h2>N/A</h2>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</main>

<!-- {data.price["product-name"]}
{formatter.format(data.price["cib-price"] / 100)}
{#if data.price.hasOwnProperty("length")}
    {#each data.price as game}{/each}
{/if} -->

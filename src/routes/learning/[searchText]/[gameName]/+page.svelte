<script lang="ts">
    import { page } from "$app/stores";
    import { platform } from "$lib/stores";
    import { get_all_dirty_from_scope } from "svelte/internal";
    export let data: PageData;
    let date: date;
    let list: string;
</script>

<main>
    <div
        class="flex flex-col h-screen w-full bg-[#0B090A] items-center"
        style=""
    >
        {#each data.data.data as game}
            {#if game.name === data.name && $platform === game.platforms[0].name}
                <!-- {console.log(game)}
                {#each game.screenshots as screenshot}
                    <img
                        src={"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/" +
                            screenshot.image_id +
                            ".jpg"}
                        alt=""
                    />
                {/each} -->
                {#if game.screenshots != null}
                    <div
                        class="w-full parallax"
                        style=" background-size: cover; background-image: url({'https://images.igdb.com/igdb/image/upload/t_1080p/' +
                            game.screenshots[0].image_id +
                            '.jpg'})"
                    />
                {:else}
                    <div
                        class="w-full parallax"
                        style=" background-size: cover; background-image: url('/assets/bg-pattern.png');"
                    />
                {/if}
                <div class="flex flex-row relative">
                    <div class="flex flex-col">
                        <img
                            src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" +
                                game.cover.image_id +
                                ".jpg"}
                            alt=""
                            class=" border-white border rounded-md relative top-[-225px]"
                        />

                        <div class="relative top-[-215px]">
                            <h2 class="text-white text-2xl font-semibold mb-2">
                                Genres
                            </h2>
                            <hr class="w-4/6 mb-3" />
                            <div class="flex flex-wrap w-[256px]">
                                {#each game.genres as genre}
                                    <h2
                                        class="bg-[#BA181B] text-white font-semibold py-1 px-3 mr-2.5 w-fit rounded-md cursor-default mb-3"
                                    >
                                        {genre.name}
                                    </h2>
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mx-6 relative top-[-155px]">
                        <div class="bg-gray-700/50 w-fit px-4 py-2 rounded-md">
                            <h2
                                class="text-[#F5F5F4] text-5xl mb-2 font-semibold"
                            >
                                {game.name}
                            </h2>
                            <h2 class="text-white text-xl font-semibold">
                                Released On
                                <span class="text-red-600"
                                    >{(date = new Date(
                                        game.first_release_date * 1000
                                    )).toLocaleDateString("default")}</span
                                >
                            </h2>
                            {#if game.involved_companies != null}
                                <div class="flex flex-row pt-2 items-center">
                                    {#each game.involved_companies as company}
                                        <div
                                            class="bg-[#BA181B] text-xl text-white font-semibold py-1 px-3 mr-2.5 w-fit rounded-md cursor-default"
                                        >
                                            {company.company.name + " "}
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                        <div class="flex flex-row mb-2 pt-2 items-center my-6">
                            <h2 class="text-white text-xl font-semibold mr-3">
                                Available on
                            </h2>
                            {#each game.platforms as platform}
                                <div
                                    class="bg-[#BA181B] text-white font-semibold py-1 px-3 mr-2.5 w-fit rounded-md cursor-default"
                                >
                                    {platform.name}
                                </div>
                            {/each}
                        </div>
                        <div class="flex flex-col mb-6">
                            <h2 class="text-white text-2xl font-semibold mb-2">
                                Summary
                            </h2>
                            <hr class="w-5/6 mb-2" />
                            <p class="text-white text-lg max-w-[90ch]">
                                {game.summary}
                            </p>
                        </div>
                        {#if game.screenshots != null}
                            <h2 class="text-white text-2xl font-semibold mb-2">
                                Screenshots
                            </h2>
                            <hr class="w-5/6 mb-2" />
                            <div
                                class="  whitespace-nowrap overflow-y-hidden overflow-x-scroll w-[100ch] py-2 inline-flex"
                            >
                                {#each game.screenshots as screenshot}
                                    <img
                                        src={"https://images.igdb.com/igdb/image/upload/t_screenshot_med/" +
                                            screenshot.image_id +
                                            ".jpg"}
                                        alt=""
                                        class="mr-3"
                                    />
                                {/each}

                                <!-- svelte-ignore a11y-missing-attribute -->
                            </div>
                        {/if}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</main>

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
                <div
                    class="w-full parallax"
                    style=" background-size: cover; background-image: url({'https://images.igdb.com/igdb/image/upload/t_1080p/' +
                        game.screenshots[1].image_id +
                        '.jpg'}"
                />
                <div class="flex flex-row relative">
                    <div class="flex flex-col">
                        <img
                            src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" +
                                game.cover.image_id +
                                ".jpg"}
                            alt=""
                            class=" border-white border rounded-md relative top-[-225px]"
                        />
                    </div>
                    <div class="flex flex-col mx-6 relative top-[-140px]">
                        <h2 class="text-[#F5F5F4] text-5xl mb-2 font-semibold">
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
                            <div class="flex flex-row mb-6 pt-2 items-center">
                                {#each game.involved_companies as company}
                                    <div
                                        class="bg-[#BA181B] text-xl text-white font-semibold py-1 px-3 mr-2.5 w-fit rounded-sm cursor-default"
                                    >
                                        {company.company.name + " "}
                                    </div>
                                {/each}
                            </div>
                        {/if}

                        <div class="flex flex-row mb-2 pt-2 items-center">
                            <h2 class="text-white text-xl font-semibold mr-3">
                                Available on
                            </h2>
                            {#each game.platforms as platform}
                                <div
                                    class="bg-[#BA181B] text-white font-semibold py-1 px-3 mr-2.5 w-fit rounded-sm cursor-default"
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
                            <p class="text-white text-lg max-w-[100ch]">
                                {game.summary}
                            </p>
                        </div>
                        <h2 class="text-white text-2xl font-semibold mb-2">
                            Screenshots & Videos
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

                            {#each game.videos as video}
                                <iframe
                                    class="w-[555px] h-[315px] mr-3"
                                    src={"https://www.youtube.com/embed/" +
                                        video.video_id}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                />
                            {/each}
                        </div>
                    </div>
                </div>

                {#each game.platforms as platform}
                    {(list = list + platform.name)}
                {/each}
            {/if}
        {/each}
    </div>
</main>

<script lang="ts">
    let searchText: string;
</script>

<svelte:head>
    <title>Trackr - Encyclopedia</title>
</svelte:head>
<main>
    <div
        class="flex flex-col h-screen w-full items-center py-20 bg-[#0B090A]"
        style=""
    >
        <div class="flex w-5/6 p-4">
            <h1 class="text-5xl font-semibold text-white self-start">
                Explore a vast <span class="text-[#E5383B]">Library</span> Of Games
            </h1>
        </div>
        <form
            class="flex flex-row p-4 items-center w-5/6"
            method="GET"
            action="/learning/{searchText}"
        >
            <input
                bind:value={searchText}
                type="text"
                placeholder="Search a game..."
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#E5383B] focus:border-[#E5383B] block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E5383B] dark:focus:border-[#E5383B]"
            />
            <button
                type="submit"
                class="rounded-sm py-2 px-4 bg-[#161A1D] hover:bg-[#BA181B] duration-300 border border-red-500 text-white mx-4"
                >Search</button
            >
        </form>
    </div>
</main>

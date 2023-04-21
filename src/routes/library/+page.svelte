<script>
    import { ChevronDown } from "lucide-svelte";
    export let data;
    let { countries } = data;
    $: ({ countries } = data);
</script>

<svelte:head>
    <title>Trackr - Library</title>
</svelte:head>
<main>
    <div
        class="flex flex-col h-screen w-full items-center py-20 bg-[#0B090A]"
        style=""
    >
        <div
            class="flex flex-row p-4 items-center w-5/6 justify-between rounded-sm bg-[#161A1D] border border-gray-600 font-semibold"
        >
            <h2 class="text-3xl text-white">Your Library</h2>
            <div class=" flex text-[#E5383B] items-end h-full text-xl">
                <button
                    class="flex flex-row items-end"
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                >
                    Filters <ChevronDown />
                </button>
            </div>
        </div>
        <!-- Main modal -->
        <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            data-modal-placement="top-right"
            class="fixed top-0 left-50 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                    <!-- Modal header -->
                    <div
                        class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                    >
                        <h3
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            Filters
                        </h3>
                        <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="defaultModal"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                /></svg
                            >
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <label
                            for="platform"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Platform</label
                        >
                        <select
                            id="platform"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option>-- Select a Platform --</option>
                            <option>Nintendo 64</option>
                            <option>Gamecube</option>
                            <option>Playstation 2</option>
                        </select>

                        <label
                            for="region"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Region</label
                        >
                        <select
                            id="region"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option>-- Select a Region --</option>
                            <option>US</option>
                            <option>JPN</option>
                            <option>PAL</option>
                        </select>

                        <label
                            for="condition"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Condition</label
                        >
                        <select
                            id="condition"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option>-- Select a Condition --</option>
                            <option>CIB</option>
                            <option>New</option>
                            <option>Loose</option>
                        </select>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                    >
                        <button
                            data-modal-hide="defaultModal"
                            type="button"
                            class="text-white bg-[#E5383B] hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >Apply Filters</button
                        >
                        <button
                            data-modal-hide="defaultModal"
                            type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >Cancel</button
                        >
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex flex-row h-[50vh] w-5/6 rounded-sm bg-[#161A1D] border border-gray-600 font-semibold my-10"
        >
            <h2 class="text-3xl text-white self-center m-auto">
                <ul>
                    {#each countries as country}
                        <li>{country.name}</li>
                    {/each}
                </ul>
            </h2>
        </div>
        <div class="flex flex-row w-5/6 justify-end">
            <button
                class="rounded-sm py-2 px-4 bg-[#161A1D] hover:bg-[#BA181B] duration-300 border border-red-500 text-white text-3xl font-semibold self-end"
            >
                Add Game +
            </button>
        </div>
    </div>
</main>

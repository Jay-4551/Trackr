<script>
    import { ChevronDown } from "lucide-svelte";
</script>
<svelte:head>
	<title>Trackr - Library</title>
</svelte:head>
<main>
    <div class="flex flex-col h-screen w-full items-center py-6 bg-[#0B090A]" style="">
        <div class="flex flex-row p-4 items-center w-5/6 justify-between rounded-sm bg-[#161A1D] border border-gray-600 font-semibold">
            <h2 class="text-3xl text-white">Your Library</h2>
            <div class="flex flex-row text-[#E5383B] items-end h-full text-lg">
                 <p>Filters</p>
                 <ChevronDown/>
            </div>
        </div>
        <div class="flex flex-row h-[50vh] w-5/6 rounded-sm bg-[#161A1D] border border-gray-600 font-semibold my-10">
            <h2 class="text-3xl text-white self-center m-auto">Add Games To Your Library!</h2> 
        </div>
        <div class="flex flex-row w-5/6 justify-end">
            <button class="rounded-sm py-2 px-4 bg-[#161A1D] hover:bg-[#BA181B] duration-300 border border-red-500 text-white text-3xl font-semibold self-end">
                Add Game +
            </button>
        </div>
    </div>
</main>
<script>
    import { ChevronDown } from "lucide-svelte";
</script>
<svelte:head>
	<title>Trackr - Library</title>
</svelte:head>
<main>
    <div class="flex flex-col h-screen w-full items-center justify-center py-6 bg-[#0B090A]" style="">
        <div class="flex flex-row p-4 items-center w-5/6 justify-between rounded-sm bg-[#161A1D] border border-gray-600">
            <h2 class="text-3xl text-white">Your Library</h2>
            <div class="flex flex-row text-[#E5383B] items-end h-full">
                 <p>Filters</p>
                 <ChevronDown/>
            </div>
        </div>
    </div>
</main>
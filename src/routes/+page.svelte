<script>
    import {Library, Wallet} from 'lucide-svelte';
</script>
<svelte:head>
	<title>Trackr</title>
</svelte:head>
<main>
    <div class="flex flex-col h-screen w-full items-center justify-center">
        <div class=" flex md:flex-row flex-col justify-evenly w-full items-center">
            <div class="flex flex-col">
                <h1 class="text-8xl">Trackr</h1>
                <p class="text-3xl my-8 text-slate-600">A Website For Game Collectors.</p>
                <button class="text-3xl text-white bg-gray-800 px-6 py-2 rounded-sm w-fit">Join Now!</button>
            </div>
            <div>
                <img src="assets/Gameboy Hero Asset.png" alt="Gameboy Hero Image">
            </div>
        </div>
        <div class="flex md:flex-row flex-col w-full justify-evenly mt-16">
            <div class="flex flex-col p-4 border rounded">
                <Library size={75} class="self-center"/>
                <p class="text-slate-600 text-xl max-w-[45ch]">Log Your Gaming Collection</p>
            </div>
            <div class="flex flex-col p-4 border rounded">
                <Wallet size={75} class="self-center"/>
                <p class="text-slate-600 text-xl max-w-[45ch]">Track The Price of Games</p>
            </div>
        </div>
    </div>
</main>
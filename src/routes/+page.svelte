<script>
    import {Library, Wallet} from 'lucide-svelte';
</script>
<svelte:head>
	<title>Trackr</title>
</svelte:head>
<main>
    <div class="flex flex-col h-screen w-full items-center justify-center py-6 bg-[#0B090A]" style="background-image: url('assets/bg-pattern.png');">
        <div class=" flex md:flex-row flex-col justify-evenly w-full items-center">
            <div class="flex flex-col">
                <h1 class="text-8xl text-white">Trackr</h1>
                <p class="text-3xl my-8 text-white">A Website For <span class="text-[#E5383B]">Game</span> Collectors.</p>
                <button class="text-3xl text-white bg-[#BA181B] border border-red-500 px-6 py-2 rounded-sm w-fit">Join Now!</button>
            </div>
            <div>
                <img src="assets/Red-Gameboys.png" alt="Gameboy Hero Image">
            </div>
        </div>
    </div>
    <div class="flex flex-row my-8 justify-center w-full items-center">
        <img src="assets/Cartridges-red.png" alt="">
        <div>
            <h1 class="text-6xl font-semibold text-slate-800">What is Trackr<span class="text-[#E5383B]">?</span></h1>
            <p class="text-slate-600 max-w-[80ch] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ornare urna. Pellentesque congue tincidunt felis. Vivamus feugiat, urna eget fringilla facilisis, felis enim tincidunt risus, et euismod ipsum sem a nulla. Maecenas sem purus, interdum a lectus ut, ornare accumsan est.
            </p>
            <h1 class="text-4xl font-semibold text-slate-800">Digital <span class="text-[#E5383B]">Library</span></h1>
            <p class="text-slate-600 max-w-[80ch] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ornare urna. Pellentesque congue tincidunt felis. Vivamus feugiat, urna eget fringilla facilisis, felis enim tincidunt risus, et euismod ipsum sem a nulla. Maecenas sem purus, interdum a lectus ut, ornare accumsan est.
            </p>
            <h1 class="text-4xl font-semibold text-slate-800">Price <span class="text-[#E5383B]">Tracking</span></h1>
            <p class="text-slate-600 max-w-[80ch] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ornare urna. Pellentesque congue tincidunt felis. Vivamus feugiat, urna eget fringilla facilisis, felis enim tincidunt risus, et euismod ipsum sem a nulla. Maecenas sem purus, interdum a lectus ut, ornare accumsan est.
            </p>
        </div>
    </div>
</main>
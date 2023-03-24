<script>
    import {Library, Wallet} from 'lucide-svelte';
</script>
<svelte:head>
	<title>Trackr</title>
</svelte:head>
<main>
    <div class="flex flex-col h-screen w-full items-center justify-center py-6">
        <div class=" flex md:flex-row flex-col justify-evenly w-full">
            <div class="flex flex-col">
                <h1 class="text-8xl">Trackr</h1>
                <p class="text-3xl my-8 text-slate-600">A Website For Game Collectors.</p>
                <button class="text-3xl text-white bg-gray-800 px-6 py-2 rounded-sm w-fit">Join Now!</button>
            </div>
            <div>
                <img src="assets/Gameboy Hero Asset.png" alt="Gameboy Hero Image">
            </div>
        </div>
        <!-- <div class="flex md:flex-row flex-col w-full justify-evenly my-10">
            <div class="flex flex-col p-4 border rounded">
                <Library size={75} class="self-center"/>
                <p class="text-slate-600 text-xl max-w-[45ch]">Track Your Gaming Collection</p>
            </div>
            <div class="flex flex-col p-4 border rounded">
                <Wallet size={75} class="self-center"/>
                <p class="text-slate-600 text-xl max-w-[45ch]">Track The Price of Games</p>
            </div>
        </div> -->
    </div>
    <div class="flex flex-col w-[90%] p-4 m-auto justify-center">
        <h1 class="text-4xl">What is Trackr?</h1>
        <p class="max-w-[80ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque aliquet enim sed sollicitudin. Integer ullamcorper nisl ipsum, at accumsan nisl semper et. Praesent et nibh vehicula nunc rutrum malesuada ac id mi. Fusce tellus ipsum, volutpat vitae vestibulum ut, dapibus non ante. Fusce pulvinar mi vitae augue finibus mollis. Nunc blandit luctus laoreet. Fusce sagittis placerat est in efficitur. Proin quis faucibus justo, et volutpat justo. Curabitur ornare elit at dui fermentum, ac vulputate metus fermentum. Vestibulum lacinia nulla tortor, ac molestie dolor viverra id. Vivamus purus sem, posuere vel eros vitae, elementum semper felis. Proin mi risus, tincidunt at ante id, congue lacinia turpis. Praesent convallis ornare mauris sit amet ornare. Sed gravida urna enim, sit amet blandit libero porta quis.
        </p>
    </div>
</main>
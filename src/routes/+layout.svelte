<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
</script>

<nav class="flex flex-row justify-around p-4 items-center bg-black">
  <a
    href="/"
    class="text-3xl font-semibold text-white flex flex-row items-center"
    ><img
      src="/assets/TrackrLogo.png"
      alt="Trackr Logo"
      class="mr-2"
    />Trackr</a
  >
  <div class="font-semibold text-white">
    <a
      href="/"
      class="px-4 py-2 hover:bg-white hover:text-[#161A1D] rounded-sm duration-300{$page
        .route.id == '/'
        ? 'l bg-white text-[#161A1D] hover:bg-gray-200'
        : ''}">Home</a
    >
    <a
      href="/learning"
      class="px-4 mx-2 py-2 hover:bg-white duration-300 hover:text-[#161A1D] rounded-sm{$page
        .route.id == '/learning'
        ? ' bg-white text-[#161A1D] hover:bg-gray-200'
        : ''}">Encyclopedia</a
    >
    <a
      href="/tracking"
      class="px-4 py-2 hover:bg-white duration-300 hover:text-[#161A1D] hover:px-4 rounded-sm{$page
        .route.id == '/tracking'
        ? ' bg-white text-[#161A1D] hover:bg-gray-200'
        : ''}">Tracking</a
    >
  </div>
  <button
    class="rounded-sm py-2 px-4 bg-[#161A1D] hover:bg-[#BA181B] duration-300 border border-red-500 text-white"
    on:click={() => {
      goto("/register");
    }}>Sign Up</button
  >
</nav>
<div class="w-full bg-black">
  <div class="w-5/6 h-[1px] m-auto bg-[#161A1D]" />
</div>
<slot />

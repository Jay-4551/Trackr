<script>
    import "../app.css";
  </script>
  
  <slot />
  <nav class="flex flex-row justify-around p-4 items-center">
    <a href="/" class="text-xl font-semibold">Trackr</a>
    <div class="font-semibold">
    <a href="/" class="px-4">Home</a>
    <a href="/library" class="px-4">Library</a>
    <a href="/tracking" class="px-4">Tracking</a>
    </div>
    <button class="rounded-sm py-2 px-4 bg-gray-800 text-white">Sign Up</button>
  </nav>
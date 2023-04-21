<script lang="ts">
    import { supabase } from "$lib/supabaseClient";

    let username: String = "";
    let email: String = "";
    let password: String = "";
    let passwordConfirm: String = "";
</script>

<svelte:head>
    <title>Trackr - Registration</title>
</svelte:head>
<main>
    <div
        class="flex flex-col h-screen w-full items-center justify-center py-20 bg-[#0B090A]"
        style=""
    >
        <div class="w-2/6 bg-[#161A1D] border border-gray-600 p-4">
            <h2 class="text-white m-auto text-3xl font-semibold">
                Trackr - Registration
            </h2>
            <form
                action=""
                class="w-full flex flex-col items-center"
                on:submit={addUser}
            >
                <input
                    type="text"
                    placeholder="Enter a Username"
                    id="usr"
                    bind:value={username}
                    class="w-full my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#E5383B] focus:border-[#E5383B] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E5383B] dark:focus:border-[#E5383B]"
                />
                <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    id="email"
                    bind:value={email}
                    class="w-full my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#E5383B] focus:border-[#E5383B] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E5383B] dark:focus:border-[#E5383B]"
                />
                <input
                    type="password"
                    placeholder="Enter a Password"
                    id="pass"
                    bind:value={password}
                    class="w-full my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#E5383B] focus:border-[#E5383B] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E5383B] dark:focus:border-[#E5383B]"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="con-pass"
                    bind:value={passwordConfirm}
                    class="w-full my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#E5383B] focus:border-[#E5383B] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E5383B] dark:focus:border-[#E5383B]"
                />
                <input
                    type="submit"
                    value="Register"
                    class="text-2xl text-white bg-[#BA181B] border border-red-500 px-6 py-2 rounded-sm w-fit"
                />
            </form>
        </div>
    </div>
</main>

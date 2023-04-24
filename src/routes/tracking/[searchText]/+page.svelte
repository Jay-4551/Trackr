<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
</script>

{console.log(data.price)}
{#each data.price.products as game}
    {#if game["cib-price"] != null && game["console-name"].indexOf("YuGiOh") === -1 && game["console-name"].indexOf("Comic") === -1 && game["console-name"].indexOf("Magic") === -1 && game["product-name"].indexOf("#") === -1}
        <div class="flex flex-col my-2">
            {game["product-name"]} - {game["console-name"]}
            <div class="flex flex-row mx-2">
                {formatter.format(game["cib-price"] / 100)}
            </div>
        </div>
    {/if}
{/each}

<!-- {data.price["product-name"]}
{formatter.format(data.price["cib-price"] / 100)}
{#if data.price.hasOwnProperty("length")}
    {#each data.price as game}{/each}
{/if} -->

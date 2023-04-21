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
{data.price["product-name"]}
{formatter.format(data.price["cib-price"] / 100)}
{#if data.price.hasOwnProperty("length")}
    {#each data.price as game}{/each}
{/if}

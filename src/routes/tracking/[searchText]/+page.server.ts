import type { PageServerLoad } from './$types';

export async function load({ fetch, params }) {
    const response = await fetch(`https://www.pricecharting.com/api/products?t=592cf80afe8115d71ca62c967d164d1d82ca963f&q=${params.searchText}`);

    const price = { price: await response.json() };

    return price;
}
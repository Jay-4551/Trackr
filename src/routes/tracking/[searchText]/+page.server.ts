import type { PageServerLoad } from './$types';

export async function load({ fetch, params }) {
    const response = await fetch(`https://www.pricecharting.com/api/products?t=592cf80afe8115d71ca62c967d164d1d82ca963f&q=${params.searchText}`);

    const price = { price: await response.json() };

    const url = `https://api.igdb.com/v4/games/`;
    const response2 = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'vcyrscnerz5ln3g60izbyzu9fxmu15',
            'Authorization': 'Bearer fxr3syzsjancx9vzdgryoq89lz6udy',
        },
        body: `fields name, platforms.*, cover.image_id, involved_companies.company.name, summary; search "${params.searchText}";where cover.image_id != null
         & keywords != [2004, 25908, 24220, 24124, 1147, 1034, 1603] & involved_companies != null  ; limit 10;`
    });
    const data = await response2.json();

    return { price: price, data: data };
}
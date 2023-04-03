import type { PageServerLoad } from './$types';
import type { GameList, SingleGame } from '$lib/types';
// import { search } from '$lib/stores.js'; 

// search.subscribe(value =>{
//     searchTerm = value;
// });

export async function load({ fetch, params }) {
    const url = `https://api.igdb.com/v4/games/`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'vcyrscnerz5ln3g60izbyzu9fxmu15',
            'Authorization': 'Bearer fxr3syzsjancx9vzdgryoq89lz6udy',
        },
        body: `fields name, platforms.*; search "${params.searchText}";`
    });
    const data = { data: await response.json() };


    return data;
}


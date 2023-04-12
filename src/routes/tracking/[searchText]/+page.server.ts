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
        body: `fields name, platforms.*, cover.image_id, involved_companies.company.name; search "${params.searchText}";where cover.image_id != null
         & keywords != [24124, 1147, 1034, 1603, 3384, 541, 2004, 5340] & keywords != null & keywords > 1 & category != 1 & category != 13; limit 15;`
    });
    const data = { data: await response.json() };


    return data;
}


import type { PageServerLoad } from './$types';
import type { GameList, SingleGame } from '$lib/types';
import { prodName } from '$lib/stores';
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
        body: `fields name, platforms.*, cover.image_id, involved_companies.company.name, summary, screenshots.*, first_release_date, rating, storyline; search "${params.gameName}";where cover.image_id != null
         & keywords != [24124, 1147, 1034, 1603] & involved_companies != null & platforms != null  ; limit 10;`
    });
    const data = { data: await response.json() };

    return { data: data, name: params.gameName };


}

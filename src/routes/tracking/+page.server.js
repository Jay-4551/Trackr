/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const url = `https://api.igdb.com/v4/games/`;
    const response = await fetch(url,{
        method: 'POST',
        headers: {

            'Accept': 'application/json',
            'Client-ID': 'vcyrscnerz5ln3g60izbyzu9fxmu15',
            'Authorization': 'Bearer fxr3syzsjancx9vzdgryoq89lz6udy',

        },
        body: {
            fields: "name",
            limit: "10"
        }
    });

    const data = {data:await response.json()};
    

    return data ;
  }

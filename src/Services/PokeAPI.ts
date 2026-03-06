import type { Pokemon } from "../Models/Pokemon";
import type { PokemonApiResponse } from "../Models/PokemonList";

//Export para exportar y async para asincronia :v.
const baseUrl = "https://pokeapi.co/api/v2/";


export async function GetPokemons(start:number, limit:number)
{
    const url = new URL(`${baseUrl}/pokemon`);

    url.searchParams.append("offset", start.toString());
    url.searchParams.append("limit", limit.toString());

    const response = await fetch(url.toString());

    const json: PokemonApiResponse = await response.json();
    const list: PokemonApiResponse = {
        count: Number(json.count),
        next: json.next,
        previous: json.previous,
        results: json.results   
    }
    
    return list;
}

export async function GetPokemon(urlpokemon:string) {
    const url = new URL(urlpokemon);      

    const response = await fetch(url.toString());
    const json: Pokemon = await response.json();
    const poke: Pokemon = {
        name: json.name,
        order: json.order,
        base_experience: json.base_experience,
        height: json.height,
        weight: json.weight,
        url: urlpokemon,
        id: Number(urlpokemon.split("/").filter(Boolean).pop()),
        sprites: json.sprites
    }
    return poke;
}



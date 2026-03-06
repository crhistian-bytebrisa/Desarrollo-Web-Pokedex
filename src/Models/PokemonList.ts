export interface PokemonApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PLPokemon[] | null;
}

export interface PLPokemon{
    name: string;
    url: string;
}


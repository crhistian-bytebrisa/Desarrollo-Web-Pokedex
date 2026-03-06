export interface Pokemon extends SimplePokemon {
    abilities: []
}

export interface SimplePokemon{
    name: string,
    order: number,
    base_experience: number;
    height: number;
    weight: number;
    url: string;
    id: number;
    sprites: {
        other: {
        "official-artwork": {
            front_default: string
            front_shiny: string
        }
        }
    }
}
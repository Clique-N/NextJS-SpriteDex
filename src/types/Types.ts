export interface Pokemon {
    id: string;
    name: string;
    url: string;
}

export interface PokemonInfo {
    id: string;
    name: string;
    sprites: string[];
    spritesShiny: string[];
    femaleSprites: string[];
    femaleShiny: string[];
}
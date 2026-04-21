import { pokeApi } from "./axios"
import { PokemonAPI, Pokemon, PokemonInfo } from "@/types/Types"

type Data = {
    results: PokemonAPI[]
}

type Info = {
    results: PokemonInfo[]
}

export const getPokemon = async (offset: number = 0, limit: number = 20) => {

    const res = await pokeApi.get<Data>(`pokemon?offset=${offset}&limit=${limit}`)

    return res.data.results.map((poke: PokemonAPI) => {
        const id = poke.url.split("/").filter(Boolean).pop()

        if(!id) return null;

        return {
            name: poke.name, url: poke.url, id: id,
        };
    })
    .filter((poke): poke is Pokemon => poke !== null);
};

export const getPokemonPrimeira = () => getPokemon (0, 151);

export const getPokemonSegunda = () => getPokemon (151, 100);

export const getPokemonInfo = async (id: string): Promise<PokemonInfo> => {
  const res = await pokeApi.get(`pokemon/${id}`);

  return {
    id: res.data.id,
    name: res.data.name,
    sprites: [
        res.data.sprites.front_default,
        res.data.sprites.back_default,
    ].filter((value): value is string => Boolean(value)),
    spritesShiny: [
        res.data.sprites.front_shiny,
        res.data.sprites.back_shiny,
    ].filter((value): value is string => Boolean(value)),
    femaleSprites: [
        res.data.sprites.front_female,
        res.data.sprites.back_female,
    ].filter((value): value is string => Boolean(value)),
    femaleShiny: [
        res.data.sprites.front_shiny_female,
        res.data.sprites.back_shiny_female,
    ].filter((value): value is string => Boolean(value)),
  };
};

export const getPokemonDescription = async (id:string) => {
    const res = await pokeApi.get(`pokemon-species/${id}`);

    const entry = res.data.flavor_text_entries.find((text:any) => 
        text.language.name === "en"
    )

    return entry?.flavor_text
    .replace(/\n/g, " ") .replace(/\f/g, " ");
}

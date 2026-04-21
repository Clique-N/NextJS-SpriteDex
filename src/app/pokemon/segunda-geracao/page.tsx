import { getPokemonSegunda } from "@/lib/api/services";
import Title from "@/components/Title";
import PokemonGrid from "@/features/PokemonGrid"

export const dynamic = 'force-static';

const pokemonSegunda = async() => {

  const pokemon = await getPokemonSegunda();

  return (
    <>
      <Title title="Segunda geração"/>
      <PokemonGrid pokes={pokemon}/>
    </>
  );
}

export default pokemonSegunda;
import { getPokemonSegunda } from "@/lib/api/services";
import Title from "@/components/Title";
import PokemonGrid from "@/features/PokemonGrid"
import Count from "@/components/Count";

export const dynamic = 'force-static';

const pokemonSegunda = async() => {

  const pokemon = await getPokemonSegunda();

  return (
    <>
      <Title title="Segunda geração"/>
      <Count start={152} end={251}/>
      <PokemonGrid pokes={pokemon}/>
    </>
  );
}

export default pokemonSegunda;
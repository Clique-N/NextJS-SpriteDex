import { getPokemonPrimeira } from "@/lib/api/services";
import Title from "@/components/Title";
import PokemonGrid from "@/features/PokemonGrid"
import Count from "@/components/Count";

export const dynamic = 'force-static';

const pokemonPrimeira = async() => {

  const pokemon = await getPokemonPrimeira();

  return (
    <>
      <Title title="Primeira geração"/>
      <Count start={1} end={151}/>
      <PokemonGrid pokes={pokemon}/>
    </>
  );
}

export default pokemonPrimeira; 

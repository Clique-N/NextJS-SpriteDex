import { getPokemonPrimeira } from "@/lib/api/services";
import Title from "@/components/Title";
import PokemonGrid from "@/features/PokemonGrid"

export const dynamic = 'force-static';

const pokemonPrimeira = async() => {

  const pokemon = await getPokemonPrimeira();

  return (
    <>
      <Title title="Primeira geração"/>
      <PokemonGrid pokes={pokemon}/>
    </>
  );
}

export default pokemonPrimeira; 

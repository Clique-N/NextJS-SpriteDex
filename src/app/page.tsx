import { getPokemon } from "../lib/api/services";
import Title from "../components/Title";
import PokemonGrid from "../features/PokemonGrid";
import Button from "../components/Button"
import Count from "../components/Count";

type Props = {
  searchParams: Promise<{ 
    page?: string
  }>
}

export const revalidate = 86400; //Atualiza depois de 24hrs. Assim, quando sair um novo jogo, a lista não fica desatualizada se o PokeApi atualizar.

export default async function Home ({searchParams} : Props) {

  const params = await searchParams;
  const offset = Number(params.page) || 0;

  const pokemon = await getPokemon(offset);

  const start = offset + 1;
  const end = offset + pokemon.length;

  return (
    <>
      <Title title="Biblioteca de sprites de Pokemon"/>
      <Button offset={offset}/>
      <Count start={start} end={end}/>
      <PokemonGrid pokes={pokemon}/>
      <Button offset={offset}/>
    </>
  );
}

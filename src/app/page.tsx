import { getPokemon } from "../lib/api/services";
import Title from "../components/Title";
import PokemonGrid from "../features/PokemonGrid";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ 
    page?: string
  }>
}

export const revalidate = 86400; //Atualiza depois de 24hrs. Assim, quando sair um novo jogo, a lista não fica desatualizada se o PokeApi atualizar.

export default async function Home({searchParams} : Props) {

  const params = await searchParams;
  const offset = Number(params.page) || 0;

  const pokemon = await getPokemon(offset);

  return (
    <>
      <Title title="Biblioteca de sprites de Pokemon"/>
      <PokemonGrid pokes={pokemon}/>
      <div>
        <Link href={`/?page=${offset - 20}`}>
          <button disabled={offset === 0}>Página anterior</button>
        </Link>        
        <Link href={`/?page=${offset + 20}`}>
          <button>Próxima página</button>
        </Link>
      </div>
    </>
  );
}

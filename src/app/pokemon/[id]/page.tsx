import Title from "@/components/Title";
import PokemonPage from "@/features/PokemonPage";
import { getPokemonInfo } from "@/lib/api/services";

type Props ={ 
    params: Promise <{
        id: number
    }>
}

export const generateMetadata = async({params}: Props) => {

    const { id } = await params;

    const pokemon = await getPokemonInfo(Number(id));

    return{
        title: `${pokemon.name} || SpriteDex`,
        openGraph: {
            title: `${pokemon.name} || SpriteDex`,
            images: [pokemon.sprites[0]],
        },
    };
};

const pokemonPageDefault = async({params} : Props) => {

    const { id } = await params;

    return (
        <>
            <Title title="Pokemon"/>
            <PokemonPage id={id}/>
        </>
    )
};

export default pokemonPageDefault;
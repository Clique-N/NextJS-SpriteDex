import { Pokemon } from "@/types/Types";
import PokemonCard from "../PokemonCard"
import styles from "./PokemonGrid.module.css"

type Props ={ 
    pokes: Pokemon[]
}

const PokemonGrid = ({pokes} : Props) => {

    return (
        <section>
            {pokes.map(poke => <PokemonCard key={poke.id} poke={poke}/>)}
        </section>
    )
}

export default PokemonGrid;
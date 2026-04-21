import { Pokemon } from "@/types/Types";
import Link from "next/link"
import styles from "./PokemonCard.module.css"

type Props ={ 
    poke: Pokemon
}

const PokemonCard = ({poke} : Props) => {
    const { id, name } = poke;

    return (
        <div>
            <Link href={`/pokemon/${id}`}>
                <div>
                    <h3>{name}</h3>
                    <img src={`${process.env.NEXT_PUBLIC_POKE_API_IMG_URL}${id}.png`} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;
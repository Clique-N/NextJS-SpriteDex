import { Pokemon } from "@/types/Types";
import Link from "next/link"
import styles from "./PokemonCard.module.css"

type Props ={ 
    poke: Pokemon
}

const PokemonCard = ({poke} : Props) => {
    const { id, name } = poke;

    return (
        <div className={styles.card}>
            <Link  className={styles.card__name} href={`/pokemon/${id}`}>
                <div>
                    <h3>{name}</h3>
                    <img className={styles.card__img} src={`${process.env.NEXT_PUBLIC_POKE_API_IMG_URL}${poke.id}.png`} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;
import { getPokemonInfo, getPokemonDescription } from "@/lib/api/services"
import styles from "./PokemonPage.module.css"

type Props ={ 
    id: number
}

const PokemonPage = async ({id} : Props) => {

    const info = await getPokemonInfo(id);
    const description = await getPokemonDescription (id);

    const {name, sprites, spritesShiny, femaleSprites, femaleShiny} = info;

    return(
        <div className={styles.pokemon}>
            <h3 className={styles.pokemon__name}>{name}</h3>
            <div className={styles.pokemon__images}>
                {sprites.map((sprite, index) => (
                <img className={styles.pokemon__img} key={index} src={sprite} alt={`${name} sprite ${index}`}/>
                ))}
            </div>
            <h2 className={styles.pokemon__name}>Shiny</h2>
            <div className={styles.pokemon__images}>
                {spritesShiny.map((shiny, index) => (
                <img className={styles.pokemon__img} key={index} src={shiny} alt={`${name} sprite shiny ${index}`}/>
                ))}
            </div>
            {femaleSprites.length > 0 && (
                <>
                    <h2 className={styles.pokemon__name}>Fêmea</h2>
                    <div className={styles.pokemon__images}>
                        {femaleSprites.map((fSprite, index) => (
                        <img className={styles.pokemon__img} key={index} src={fSprite} alt={`${name} sprite shiny ${index}`}/>
                        ))}
                    </div>
                </>
            )}
            {femaleSprites.length > 0 && (
                <>
                    <h2 className={styles.pokemon__name}>Fêmea Shiny</h2>
                    <div className={styles.pokemon__images}>
                        {femaleShiny.map((Fshiny, index) => (
                        <img className={styles.pokemon__img} key={index} src={Fshiny} alt={`${name} sprite shiny ${index}`}/>
                        ))}
                    </div>
                </>
            )}
            <div>
                <h3 className={styles.pokemon__title}>Descrição</h3>
                <p className={styles.pokemon__text}>{description}</p>
            </div>
            <p className={styles.pokemon__title}>Fonte: PokeAPI</p>
        </div>
        
    )
}

export default PokemonPage;
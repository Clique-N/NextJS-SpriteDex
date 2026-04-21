import { getPokemonInfo } from "@/lib/api/services"
import styles from "./PokemonPageCard.module.css"

type Props ={ 
    id: number
}

const PokemonPage = async ({id} : Props) => {

    const details = await getPokemonInfo(id);

    const {name, sprites, spritesShiny, femaleSprites, femaleShiny} = details;

    return(
        <div>
            <h3>{name}</h3>
            <div>
                {sprites.map((sprite, index) => (
                <img key={index} src={sprite} alt={`${name} sprite ${index}`}/>
                ))}
            </div>
            <h2>Shiny</h2>
            <div>
                {spritesShiny.map((shiny, index) => (
                <img key={index} src={shiny} alt={`${name} sprite shiny ${index}`}/>
                ))}
            </div>
            {femaleSprites.length > 0 && (
                <>
                    <h2>Fêmea</h2>
                    <div>
                        {femaleSprites.map((fSprite, index) => (
                        <img key={index} src={fSprite} alt={`${name} sprite shiny ${index}`}/>
                        ))}
                    </div>
                </>
            )}
            {femaleSprites.length > 0 && (
                <>
                    <h2>Fêmea Shiny</h2>
                    <div>
                        {femaleShiny.map((Fshiny, index) => (
                        <img key={index} src={Fshiny} alt={`${name} sprite shiny ${index}`}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default PokemonPage;
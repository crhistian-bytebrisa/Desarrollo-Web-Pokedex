import type { SimplePokemon } from "../Models/Pokemon";
import "../Styles/All.css";
import "../Styles/Pokemon.css";

function CardPokemon(poke: SimplePokemon){
    return(
        <>
            <div className="card-pokemon">
                <img src={poke.sprites.other["official-artwork"].front_default.toString()} 
                alt={"img-"+poke.name}/>
                <h3>{poke.id} - {poke.name}</h3>
                <p>Exp: {poke.base_experience}</p>
                <p>Tamaño: {poke.height}</p>
                <p>Peso: {poke.weight}</p>
            </div>
        </>
    )
}

export default CardPokemon;
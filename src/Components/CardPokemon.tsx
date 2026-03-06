import type { Pokemon } from "../Models/Pokemon";
import "../Styles/All.css";

function CardPokemon(poke: Pokemon){
    return(
        <>
            <div style={
                {border: '5px solid black', borderRadius: '5px', height: '300px', 
                    width: '300px', alignItems: 'center', textAlign: 'center'}
                }>
                <img src={poke.sprites.other["official-artwork"].front_default.toString()} alt="" 
                style={{height: '200px',width: '200px'}}
                />
                <h3>{poke.id} - {poke.name}</h3>
                <p>Exp: {poke.base_experience}</p>
                <p>Tamaño: {poke.height}</p>
                <p>Peso: {poke.weight}</p>
            </div>
        </>
    )
}

export default CardPokemon;
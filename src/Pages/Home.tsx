import { useEffect, useState } from "react";
import { GetPokemon, GetPokemons } from "../Services/PokeAPI";
import "../Styles/All.css";
import "../Styles/Home.css"
import type { PokemonApiResponse } from "../Models/PokemonList";
import type { SimplePokemon } from "../Models/Pokemon";
import CardPokemon from "../Components/CardPokemon";

function Home(){

    //Guardo el Response de la api en el estado.
    const  [list, setList] = useState<PokemonApiResponse>({
        next: "",
        previous: "",
        count: 0,
        results: null
    });
    const [pokemons, setPokemons] = useState<SimplePokemon[]>();
    //tambien guardo el limite de la api en el estado
    const [limit, setLimit] = useState(20);
    const [offset] = useState(0);
    const [loading, setLoading] = useState(true);

    //funcion encargada de asignar la lista de pokemons y los pokemons de forma asincrona
    const Cargar = async () =>{
        const data = await GetPokemons(offset,limit)
        setList(data);        

        console.log(data.next);
        if(data.results != null)
        {
            const poks = await Promise.all(
                data.results.map((p) => GetPokemon(p.url))
            )         

            setPokemons(poks);

            setLoading(false);
        }
    }

    //Esta funcion es la encargada de hacer que la pagina cargue todo recien empiece
    useEffect(() => {

        //Esta funcion se creo porque el condenado React no acepta Async directamente, o si lo hace
        //no se como
        const data = () => {
            Cargar();
        }
        data();


    },[limit]);

    //Aca se encarga de optener el evento del select y luego usar el setLimit
    function CambiarLimit(event: React.ChangeEvent<HTMLSelectElement>)
    {
        const value = event.target.value;
        setLimit(Number(value));
    }


    return(
        <>            
            <h3>Pokedex</h3>
            <form action="">
                <label htmlFor="Name">Nombre:</label>
                <input type="text" name="Name"/>
            </form>
            <select name="limit" id="limit" value={limit} onChange={CambiarLimit}>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="100">100</option>
            </select>
            <br />
            <p>Cantidad de Pokemons: {list.count}</p>
            <p>Mostrados: {offset} - {limit}</p>
            <br />
            <div id="Lista" className="loader-container pokedex">
            
            {
            //Uso el estado de loadin para mostrar una cosa u otra
            loading ?(
                    <div>
                        <div className="spinner"></div>
                        <p>Cargando...</p>
                    </div>
                ) : (
                    //Un mapeo para el componente
                    pokemons?.map(pokemon => (
                        <CardPokemon key={pokemon.order} {...pokemon}/>
                    ))
                )
            }
            </div>

            
        </>
    )
}

export default Home;
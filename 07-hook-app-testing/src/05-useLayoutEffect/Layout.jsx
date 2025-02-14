import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {

    const { counter, decrementCounter, incrementCounter } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <h1>Information of Pokémon</h1>
            <hr />
            {isLoading ? <LoadingMessage /> :
                <PokemonCard
                    name={data?.name}
                    id={data?.id}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />}
            <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrementCounter() : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => incrementCounter()}>Siguiente</button>
        </>
    )
}

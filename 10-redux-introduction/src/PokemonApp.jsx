import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/'

export const PokemonApp = () => {

    const dispatch = useDispatch()

    const { isLoading, pokemons, page } = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            {(isLoading) ? (<p className='text-center'>Cargando...</p>) : (<p className='text-center'><strong>Pag: {page}</strong></p>)}

            <ul className='list-group w-50 mx-auto'>
                {
                    pokemons.map(pokemon => (
                        <li className='list-group-item text-center ' key={pokemon.name}>
                            <strong>Nomber: </strong>{pokemon.name}
                        </li>
                    ))
                }
            </ul>
            <div className="row d-flex align-items-center justify-content-center mt-2">
                <div className="col-auto">
                    <button
                        disabled={isLoading || page < 1}
                        onClick={() => dispatch(getPokemons(page - 1))}
                        className='btn btn-outline-primary'
                    >
                        Anterior
                    </button>
                </div>
                <div className="col-auto">
                    <button
                        disabled={isLoading}
                        onClick={() => dispatch(getPokemons(page + 1))}
                        className='btn btn-outline-primary'
                    >
                        Siguiente
                    </button>
                </div>
            </div>

        </>
    )
}

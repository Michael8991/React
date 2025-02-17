import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q)

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: q
    })

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length < 1) return;
        navigate(`?q=${searchText}`)
    }

    return (
        <>

            <div className="row">
                <h1>SearchPage</h1>
                <hr />
                <div className="col-5">
                    <h4>Búsqueda</h4>
                    <form onSubmit={(event) => handleSearchSubmit(event)}>
                        <input
                            type="text"
                            name="searchText"
                            placeholder="Buscar heroe..."
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    {
                        (q === '')
                            ?
                            <div className="alert alert-primary animate__animated animate__fadeIn">Introduzca el nombre del superheroe</div>
                            : (heroes.length === 0)
                            &&
                            <div className="alert alert-danger animate__animated animate__fadeIn">No hay ningún heroe con el nombre de <b>{q}</b></div>

                    }



                    {
                        heroes.map(hero => (
                            <HeroCard
                                hero={hero}
                                key={hero.id}
                            ></HeroCard>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

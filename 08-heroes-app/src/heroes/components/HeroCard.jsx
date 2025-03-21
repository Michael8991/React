import { Link } from "react-router-dom"

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters, } = hero

    const heroImgUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroImgUrl} alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && (<p className="card-subtitle">{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${id}`} className="btn btn-secondary">Más...</Link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const navigate = useNavigate();


    const handleReturn = () => {

        // let url = 'marvel'

        // if (hero.publisher === 'DC Comics') url = 'dc'

        // else url = 'marvel'

        // navigate(`/${url}`, {
        //     replace: true
        // }
        //     //? o pooner navigate(-1) pero esto retrodece en el historial, lo que podria sacar al usuario de la app
        // )
        navigate(-1)

    }

    if (!hero) {
        return <Navigate to='/marvel' />
    }

    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className="col-4">
                <img
                    className='img-thumbnail'
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={hero.superhero} />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego:</b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher:</b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First appearance:</b>{hero.first_appearance}</li>
                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>
                <button
                    onClick={handleReturn}
                    className='btn btn-outline-success'>Volver</button>
            </div>
        </div>
    )
}

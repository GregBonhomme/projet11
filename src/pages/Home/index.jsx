import useFetch from "../../utils/hooks"
import { Link } from "react-router-dom"

function Home () {
    const {data,isLoading,error} = useFetch('/data/logements.json')
    let housings = []

    if (error) {
        return <span>Une erreur est survenue</span>
    }

    if (Array.isArray(data)) {
        housings = data
    }

    return (
        <ul>
            {housings.map((housing)=>{ return (
                <Link to={"/housing/"+ housing.id} key={housing.id}>
                    <li className='card'>
                        <h2>{housing.title}</h2>
                    </li>
                </Link>)
            })}
        </ul>
    )
}

export default Home
import "../../styles/pages/home.css"
import headlineBg from "../../assets/img/headline_bg.jpg"
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
        <div id="home_body">
            <div className="headline">
                <img src={headlineBg} className="headline_bg" alt="Falaise en bordure de mer" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="card_list">
                {housings.map((housing)=>{ return (
                    <Link to={"/housing/"+ housing.id} className="card" key={housing.id}>
                        <h2>{housing.title}</h2>
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default Home
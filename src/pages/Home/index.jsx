import "../../styles/pages/home.css"
import homeHeadlineBg from "../../assets/img/home_headline_bg.jpg"
import useFetch from "../../utils/hooks/useFetch"
import { Link } from "react-router-dom"
import Headline from "../../components/Headline"

function Home () {
    const {data,error} = useFetch('/data/logements.json')
    let housings = []

    if (error) {
        return <span>Une erreur est survenue</span>
    }

    if (Array.isArray(data)) {
        housings = data
    }

    return (
        <div id="home_body">
            <Headline title="Chez vous, partout et ailleurs" image={homeHeadlineBg} alt="Falaise en bord de mer" />
            <div className="card_list">
                {housings.map((housing)=>{ return (
                    <Link to={"/housing/"+ housing.id} className="card" key={housing.id}>
                        <div className="card_body">
                            <img src={housing.cover} className="card_bg" alt="Apperçu du logement" />
                            <h2>{housing.title}</h2>
                        </div>
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default Home
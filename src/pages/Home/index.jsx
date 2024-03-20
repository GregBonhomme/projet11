import "../../styles/pages/home.css"
import homeHeadlineBg from "../../assets/img/home_headline_bg.jpg"
import useFetch from "../../utils/hooks"
import { Link } from "react-router-dom"
import Headline from "../../components/Headline"

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
            <Headline title="Chez vous, partout et ailleurs" image={homeHeadlineBg} alt="Falaise en bord de mer" />
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
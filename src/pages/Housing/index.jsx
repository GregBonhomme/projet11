import "../../styles/pages/housing.css"
import { useParams } from "react-router-dom"
import useFetch from "../../utils/hooks"
import Carousel from "../../components/Carousel"
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"

function Housing () {
    const {id} = useParams()
    const {data,isLoading,error} = useFetch('/data/logements.json')


if (error) {
    return <span>Une erreur est survenue</span>
}

const housing = data.find((item) => item.id === id)

return (<div>
    {isLoading ? (
        <div>Chargement...</div>
    ):(
        <div className="housingCard">
            <Carousel pictures={housing.pictures} />
            <div className="housingInfo">
                <div>
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    <Tags tags={housing.tags} />
                </div>
                <div>
                    <div className="hostTag">
                        <h3>{housing.host.name.split(" ")[0]}<br/>{housing.host.name.split(" ")[1]}</h3>
                        <img src={housing.host.picture} alt= {"Portrait de "+housing.host.name } />
                    </div>
                    <Rating rating={housing.rating} />
                </div>
            </div>
            <div className="housingMenus">
                <Collapse title="Description" id="description">
                    <p> {housing.description} </p>
                </Collapse>
                <Collapse title="Équipements" id="equipment">
                    <ul>
                        {housing.equipments.map((equipment,index) => {
                            return <li key={index}>{equipment}</li>
                        })}
                    </ul>
                </Collapse>
            </div>
        </div>
    )}
    </div>
    )
}

export default Housing
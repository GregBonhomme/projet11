import { useParams } from "react-router-dom"
import useFetch from "../../utils/hooks"

function Housing () {
    const {id} = useParams()
    const {data,isLoading,error} = useFetch('/data/logements.json')
    let housing = {}

if (error) {
    return <span>Une erreur est survenue</span>
}

if (Array.isArray(data)) {
    housing = data.find((item) => item.id === id)
}

return (<div>
    {isLoading ? (
        <div>Chargement</div>
    ):(
        <div className="housingInfo">
        <div className="housingInfo_left">
            <h1>{housing.title}</h1>
            <h2>{housing.location}</h2>
            
        </div>
        <div className="housingInfo_right">
            <div className="hostTag">
                <h3>{housing.host.name}</h3>
                <img src={housing.host.picture} alt= {"Portrait de "+housing.host.name } />
            </div>
        </div>
    </div>
    )}
    </div>
    )
}

export default Housing
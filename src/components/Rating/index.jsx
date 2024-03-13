import "../../styles/components/rating.css"
import fullStar from "../../assets/img/fullStar.png"
import emptyStar from "../../assets/img/emptyStar.png"

function Rating (prop) {
    const stars = prop.rating
        return (
            <div className="rating">
                {Array(parseInt(stars)).fill(true).map((_,i) => {return (
                    <img key={i} src={fullStar} alt="Icone d'étoile remplie" />
                )})}
                {Array(5 - stars).fill(true).map((_,i) => {return (
                    <img key={i + stars} src={emptyStar} alt="Icone d'étoile vide" />
                )})}
            </div>
        )
    }


export default Rating
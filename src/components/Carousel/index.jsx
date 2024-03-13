import "../../styles/components/carousel.css"
import leftArrow from "../../assets/img/left-arrow.png"
import rightArrow from "../../assets/img/right-arrow.png"
import { useState } from "react"

function Carousel ({pictures}) {

    const maxId = pictures.length ? (pictures.length - 1) : 0
    const [id,setId] = useState(0)

    function previousId () {
        (id > 0) ? setId(id-1) : setId(maxId)
    }

    function nextId () {
        (id < maxId) ? setId(id+1) : setId(0)
    }

    return (
        <div className="carousel">
            <img src={leftArrow} className="leftArrow" onClick={previousId} alt="Flèche de défilement vers la gauche" />
            <img src={pictures[id]} className="carousel-picture" alt="Aperçu du logement" />
            <img src={rightArrow} className="rightArrow" onClick={nextId} alt="Flèche de défilement vers la droite" />
        </div>
    )
}

export default Carousel
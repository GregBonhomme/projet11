import "../../styles/pages/about.css"
import aboutHeadlineBg from "../../assets/img/about_headline_bg.jpg"
import Headline from "../../components/Headline"
import Collapse from "../../components/Collapse"


function About () {
    return (
        <div className="about_content">
            <Headline title="" image={aboutHeadlineBg} alt="Paysage de montagne" />
            <div className="about_menu">
                <Collapse title="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Service">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </div>
    )
}

export default About
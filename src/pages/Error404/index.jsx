import "../../styles/pages/error404.css"
import { Link } from "react-router-dom"

function Error404 () {
    return (
        <div className="error_body">
            <h1>404</h1>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error404
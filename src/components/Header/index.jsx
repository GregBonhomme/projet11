import { Link,useLocation } from 'react-router-dom'
import '../../styles/components/header.css'
import logo from '../../assets/img/logo.png'

function Header() {

    const location = useLocation().pathname

    return (
    <header>
        <img src={logo} alt="Logo Kasa" />
        <nav>
            <Link to="/" className={(location === "/" ? "underlined" : "")}>Accueil</Link>
            <Link to="/about/" className={(location === "/about/" ? "underlined" : "")}>A Propos</Link>
        </nav>
    </header>
    )
}     

export default Header
import { Link } from 'react-router-dom'
import '../../styles/header.css'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
    <header>
        <img src={logo} alt="Logo Kasa" />
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about/">A Propos</Link>
        </nav>
    </header>
    )
}     

export default Header
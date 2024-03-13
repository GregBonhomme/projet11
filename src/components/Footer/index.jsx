import '../../styles/components/footer.css'
import logoWhite from '../../assets/img/logo_white.png'

function Footer() {
    return (
        <footer>
            <img src={logoWhite} alt="Logo Kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer
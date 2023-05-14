import logo from '../../images/whatsapp-logo.svg'
import '../../styles/Header.css'

const Header = () => {
    return (
        <header className='header-container'>
            <div className='header-content'>
                <div className='header-logo'>
                    <img src={logo} height={'60px'} alt='' />
                </div>
                <div className='header-title'>WHATSAPP</div>
            </div>
        </header>
    )
}

export default Header

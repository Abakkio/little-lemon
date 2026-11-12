import logo from '../assets/Logo.svg'
import Nav from './Nav'


const Header = () => {
    return(
        <header>
            <div className='container'>
                <img src={logo} alt="Little Lemon logo" />
                <Nav />
            </div>
        </header>
    )
};

export default Header;
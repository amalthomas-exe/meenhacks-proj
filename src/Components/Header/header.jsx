import { Link } from 'react-router-dom'; 
import './header.css'

const Header = () => {
    return(
        <div className="header">
            <Link to="/">
            <img src='health.svg' className='logo'/>
            </Link>
            
            <Link to="/form" className='link'>Register Hospital</Link>
        </div>
    );
}

export default Header;
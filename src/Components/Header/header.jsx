import { Link } from 'react-router-dom'; 
import './header.css'

const Header = () => {
    return(
        <div className="header">
            <img src='health.svg' className='logo'/>
            <Link to="/form" className='link'>Register Hospital</Link>
        </div>
    );
}

export default Header;
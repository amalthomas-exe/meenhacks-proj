import { Link } from 'react-router-dom'; 
import './header.css'

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className='link'>HOME</Link>
            <Link to="/form" className='link'>FORM</Link>
        </div>
    );
}

export default Header;
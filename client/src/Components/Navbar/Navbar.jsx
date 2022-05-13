import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useContext, useState } from 'react';
import './Navbar.scss';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

// netflix-avatar => https://occ-0-2041-3662.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate;
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll == null);
    }
    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"} >
            <div className="container">
                <div className="left">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                    </Link>
                    
                    <Link to="/" className='link'> <span>Home</span> </Link>
                    <Link to="/series" className='link'> <span>TV Shows</span> </Link>
                    <Link to="/movie" className='link'> <span>Movies</span> </Link>
                    <span>New and Popular</span>
                    <span>My List</span>

                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>Children</span>
                    <Notifications className='icon' />
                    <img src="/images/misc/netflix-avatar.png" alt="" />
                    
                    <div className="profile">
                        <ArrowDropDown className='icon' /> 
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch({ type: "LOGOUT" })}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
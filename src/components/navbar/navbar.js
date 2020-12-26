import './navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'nav-bar-container'}>
            <div className={'nav-bar-sub-container'}>
                <div className={'nav-bar-left'}>
                </div>
                <div className={'nav-bar-right'}>
                    <div className={'nav-bar-item'}>
                        <Link to="/">Blog</Link>
                    </div>
                    <div className={'nav-bar-item'}>
                        <Link to="/">Contacter-Nous</Link>
                    </div>
                    <div className={'nav-bar-item'}>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

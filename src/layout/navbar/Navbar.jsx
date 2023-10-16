import LogoBlack from '../../images/navbar/logo_black.svg';
import BurgerIcon from '../../images/navbar/burger_menu.svg';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md py-4 my-2 py-md-5 my-md-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={LogoBlack} alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={BurgerIcon} alt="" />
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" to="about">our company</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" to="locations">locations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" to="contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
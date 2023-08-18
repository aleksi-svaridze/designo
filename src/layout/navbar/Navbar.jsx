import LogoBlack from '../../images/navbar/logo_black.svg';
import BurgerIcon from '../../images/navbar/burger_menu.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md py-5 my-3">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={LogoBlack} alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={BurgerIcon} alt="" />
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" href="/">our company</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" href="/">locations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-desktop-link px-3 mx-1 py-0 text-uppercase text-gray-dark" href="/">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
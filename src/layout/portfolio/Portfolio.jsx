import arrowIcon from '../../images/portfolio/arrow_icon.svg'
import {Link} from 'react-router-dom'


const Portfolio = () => {
    return(
        <div className="portfolio my-5 py-5">
            <div className="container my-0 my-lg-3 py-3 py-lg-5">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-6">

                        <div className="card-portfolio card-portfolio--img-1 overflow-hidden position-relative">
                            <div className="overlay"></div>
                            <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>WEB DESIGN</h2>
                                <Link to="web-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                    <img src={arrowIcon} alt="" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="card-portfolio card-portfolio--img-2 overflow-hidden position-relative">
                                    <div className="overlay"></div>
                                    <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                        <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>APP DESIGN</h2>
                                        <Link to="app-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                            <img src={arrowIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card-portfolio card-portfolio--img-3 overflow-hidden position-relative">
                                    <div className="overlay"></div>
                                    <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                        <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>GRAPHIC DESIGN</h2>
                                        <Link to="graphic-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                            <img src={arrowIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
import coverImg1 from '../../images/portfolio/cover_1.png'
import coverImgSm1 from '../../images/portfolio/cover_1_sm.png'

import coverImg2 from '../../images/portfolio/cover_2.png'
import coverImg3 from '../../images/portfolio/cover_3.png'
import arrowIcon from '../../images/portfolio/arrow_icon.svg'



const Portfolio = () => {
    return(
        <div className="portfolio my-5 py-5">
            <div className="container my-0 my-lg-3 py-3 py-lg-5">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-6">

                        <div className="card-portfolio overflow-hidden position-relative">
                            <img src={coverImg1} alt="" className='card-portfolio__img d-sm-block d-none' />
                            <img src={coverImgSm1} alt="" className='card-portfolio__img d-sm-none d-block' />
                            <div className="overlay"></div>
                            <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>WEB DESIGN</h2>
                                <a href="/web-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                    <img src={arrowIcon} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="card-portfolio overflow-hidden position-relative">
                                    <img src={coverImg2} alt="" className='w-100' />
                                    <div className="overlay"></div>
                                    <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                        <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>APP DESIGN</h2>
                                        <a href="/web-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                            <img src={arrowIcon} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card-portfolio overflow-hidden position-relative">
                                    <img src={coverImg3} alt="" className='w-100' />
                                    <div className="overlay"></div>
                                    <div className="card-portfolio__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                                        <h2 className='card-portfolio__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>GRAPHIC DESIGN</h2>
                                        <a href="/web-design" className='card-portfolio__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>VIEW PROJECTS
                                        <img src={arrowIcon} alt="" />
                                        </a>
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
// import { WorksCard } from "../../components/cards/Cards";

import img1 from '../../images/works/Express.jpg'


const WorksCardContainer = () => {
    return(
        <div className="container works-card-container">
            <div className="row">
                {/* <WorksCard img={img1} /> */}
                <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img1} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
        
            </div>
        </div>
    )
}

export default WorksCardContainer;
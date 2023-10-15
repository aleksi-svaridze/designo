import Button from '../buttons/Button'
import Circles from '../circles/Circles';
import {Link} from 'react-router-dom'
import arrowIcon from '../../images/portfolio/arrow_icon.svg'
import scrollToTop from '../../functions/scrallToTop';

export const ContactCard = () => {
    return(
        <div className='position-absolute start-50 translate-middle-x contact-card--container w-100 px-3 px-sm-0'>
            <div className="bg-primary contact-card d-flex flex-column flex-lg-row align-items-center justify-content-lg-between container position-relative overflow-hidden">
                <div className='text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0'>
                    <h2 className="contact-card--title fw-medium text-white mb-3">Let's talk about your project</h2>
                    <p className="contact-card--desc text-white fw-normal mb-0">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Button content='Get in touch' path='/contact' btnStyle='btn-white position-relative z-3' />

                <Circles 
                    styles={'rounded-circle position-absolute circles circles--top circles--top--2'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
                <Circles 
                    styles={'rounded-circle position-absolute circles circles--top circles--top--1'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
                <Circles 
                    styles={'rounded-circle position-absolute circles circles--bottom circles--bottom--1'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
                <Circles 
                    styles={'rounded-circle position-absolute circles circles--bottom circles--bottom--2'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
                <Circles 
                    styles={'rounded-circle position-absolute circles circles--bottom circles--bottom--3'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
            </div>
        </div>
    )
};

export const HeadingCard = (
    {title, 
    desc, 
    circleTopLeft, 
    circleTopRight, 
    circleTopMidLeft, 
    circleTopMidRight,
    circleBottomLeft,
    circleBottomRight,
    circleBottomMidLeft,
    circleBottomMidRight}
) => {
    return(
        <div className="container">
            <div className="bg-primary heading-card d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-center">
            
            <h2 className="heading-card--title fw-medium text-white mb-4 text-capitalize">{title}</h2>
            <p className="heading-card--desc text-white fw-normal mb-0 px-1">{desc}</p>
           
           {/* Top circles */}
            <Circles 
                styles={circleTopRight} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={circleTopMidRight} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.50)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.00)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={circleTopLeft} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.50)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.00)' 
                endColorOpacity='100%' 
            />
             <Circles 
                styles={circleTopMidLeft} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.50)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.00)' 
                endColorOpacity='100%' 
            />

            {/* Bottom circles */}
            
            <Circles 
                styles={circleBottomLeft} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
             <Circles 
                styles={circleBottomMidLeft} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={circleBottomMidRight} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={circleBottomRight} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            </div>
        </div>
    )
};

export const AboutCard = ({id, img, title, desc}) => {
    return(
        <div className="col-12 col-xl-4" key={id}>
            <div className="d-flex flex-column flex-md-row flex-xl-column align-items-center about-card">

                <img src={img} alt={title} className="mb-xl-5 mb-5 mb-md-0 about-card--img" />

                <div className="text-center text-md-start text-xl-center ms-md-5 ms-0 ms-xl-0">
                    <h3 className="mb-4 pb-2 about-card--title fw-medium text-gray-dark">{title}</h3>
                    <p className="about-card--desc text-gray-dark fw-normal m-0">{desc}</p>
                </div>

            </div>
        </div>
    )
}

export const WorksCard = ({img, id, desc, title}) => {
    return(
        <div className="col-12 col-lg-6 col-xl-4" key={id}>
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img} alt="" />
                </div>
                <div className="works-card--text-content d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-uppercase'>{title}</h2>
                    <p className='works-card--desc m-0'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export const PortfolioCard = ({title, path, img, styles}) => {
    return(
        <div style={{backgroundImage: `url(${img})`, height: `${styles}`}} 
            className={`portfolio-card overflow-hidden position-relative`}>
            <div className="overlay"></div>
            <div className="portfolio-card__text-content position-absolute start-50 top-50 translate-middle text-center w-100">
                <h2 className='portfolio-card__text-content--title text-white fw-medium text-uppercase mb-2 pb-1 mb-lg-4'>{title}</h2>
                <Link onClick={scrollToTop} to={path} className='portfolio-card__text-content--btn text-uppercase text-white fw-medium text-decoration-none d-flex align-items-center justify-content-center column-gap-3'>view projects
                    <img src={arrowIcon} alt="" />
                </Link>
            </div>
        </div>
    )
}
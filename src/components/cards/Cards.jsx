import Button from '../buttons/Button'
import Circles from '../circles/Circles';

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

export const HeadingCard = () => {
    return(
        <div className="bg-primary heading-card d-flex flex-column justify-content-center align-items-center container position-relative overflow-hidden text-center">
            
            <h2 className="heading-card--title fw-medium text-white mb-4 text-capitalize">Web Design</h2>
            <p className="heading-card--desc text-white fw-normal mb-0 px-1">
                We build websites that serve as powerful marketing tools and bring memorable brand experiences.
            </p>
           
            <Circles 
                styles={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--1'} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--2'} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.50)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.00)' 
                endColorOpacity='100%' 
            />
             <Circles 
                styles={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--3'} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.50)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.00)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--1'} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
            <Circles 
                styles={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--2'} 
                degree="90deg" 
                startColor='rgba(93, 2, 2, 0.00)' 
                startColorOpacity='0%' 
                endColor='rgba(93, 2, 2, 0.50)' 
                endColorOpacity='100%' 
            />
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

export const WorksCard = ({img}) => {
    return(
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="works-card overflow-hidden d-flex flex-column flex-sm-row flex-lg-column">
                <div className="works-card--img-content">
                    <img src={img} alt="" />
                </div>
                <div className="works-card--text-content bg-tertiary d-flex flex-column align-items-center justify-content-center text-center">
                    <h2 className='works-card--title fw-medium text-primary text-uppercase'>express</h2>
                    <p className='works-card--desc text-gray-dark m-0'>A multi-carrier shipping website for ecommerce businesses</p>
                </div>
            </div>
        </div>
    )
}
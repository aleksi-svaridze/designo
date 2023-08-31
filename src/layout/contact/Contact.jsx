import Button from '../../components/buttons/Button'
import Circles from '../../components/circles/Circles';

const Contact = () => {
    return(
        <div className='position-absolute start-50 translate-middle-x contact-card--container w-100 px-3 px-sm-0'>
            <div className="bg-primary contact-card d-flex flex-column flex-lg-row align-items-center justify-content-lg-between container position-relative overflow-hidden">
                <div className='text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0'>
                    <h2 className="contact-card--title fw-medium text-white mb-3">Let's talk about your project</h2>
                    <p className="contact-card--desc text-white fw-normal mb-0">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Button content='Get in touch' path='/contact' btnStyle='btn-white' />

                <Circles 
                    styles={'rounded-circle position-absolute contact-circles contact-circles--top contact-circles--top--2'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
                <Circles 
                    styles={'rounded-circle position-absolute contact-circles contact-circles--top contact-circles--top--1'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />

                <Circles 
                    styles={'rounded-circle position-absolute contact-circles contact-circles--bottom contact-circles--bottom--1'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />

                <Circles 
                    styles={'rounded-circle position-absolute contact-circles contact-circles--bottom contact-circles--bottom--2'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />

                <Circles 
                    styles={'rounded-circle position-absolute contact-circles contact-circles--bottom contact-circles--bottom--3'} 
                    degree="90deg" 
                    startColor='rgba(93, 2, 2, 0.00)' 
                    startColorOpacity='0%' 
                    endColor='rgba(93, 2, 2, 0.50)' 
                    endColorOpacity='100%' 
                />
            </div>
        </div>
    )
}

export default Contact;
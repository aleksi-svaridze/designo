import Button from '../../components/buttons/Button'

const Contact = () => {
    return(
        <div className='position-absolute start-50 translate-middle-x contact-card--container w-100 px-3 px-sm-0'>
            <div className="bg-primary contact-card d-flex flex-column flex-lg-row align-items-center justify-content-lg-between container">
                <div className='text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0'>
                    <h2 className="contact-card--title fw-medium text-white mb-3">Let's talk about your project</h2>
                    <p className="contact-card--desc text-white fw-normal mb-0">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Button content='Get in touch' path='/contact' btnStyle='btn-white' />
            </div>
        </div>
    )
}

export default Contact;
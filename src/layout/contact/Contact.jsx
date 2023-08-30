import Button from '../../components/buttons/Button'

const Contact = () => {
    return(
        <div className="bg-primary contact-card d-flex align-items-center justify-content-between">
            <div>
                <h2 className="contact-card--title fw-medium text-white mb-3">Let's talk about your project</h2>
                <p className="contact-card--desc text-white fw-normal mb-0">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Button content='Get in touch' path='/contact' btnStyle='btn-white' />
        </div>
    )
}

export default Contact;
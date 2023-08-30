import Contact from '../contact/Contact';
import logoWhite from '../../images/footer/logo_white.svg'
import { ReactComponent as FacebookIcon }  from '../../images/footer/facebook_icon.svg'
import { ReactComponent as YoutubeIcon } from '../../images/footer/youtube_icon.svg'
import { ReactComponent as TwitterIcon } from '../../images/footer/twitter_icon.svg'
import { ReactComponent as PinterestIcon } from '../../images/footer/pinterest_icon.svg'
import { ReactComponent as InstagramIcon } from '../../images/footer/instagram_icon.svg'


const Footer = () => {
    return(
        <footer className="bg-black position-relative pb-5">
            <Contact />
            <div className="container pt-5">
                <div className="row pt-5 pb-md-3">
                    <div className="col-12 col-md-5 text-center text-lg-start pt-5">
                        <img src={logoWhite} alt="" className='pt-md-5 pt-3 pb-3 pb-md-0 pb-4 pb-md-0 mb-2 mb-md-0' />
                        <div className="border-opacity-10 border-bottom border-white d-block d-md-none"></div>
                    </div>
                    <div className="col-12 col-md-3 text-center text-lg-end pt-3 pt-md-5">
                        <a href="/" className='footer__link d-inline-block fw-normal pt-md-5 pt-3 pb-3 pb-md-0 text-decoration-none text-uppercase text-white'>our company</a>
                    </div>
                    <div className="col-12 col-md-2 text-center text-lg-end pt-md-5">
                        <a href="/" className='footer__link d-inline-block fw-normal pt-md-5 pt-3 pb-3 pb-md-0 text-decoration-none text-uppercase text-white'>locations</a>
                    </div>
                    <div className="col-12 col-md-2 text-center text-lg-end pt-md-5">
                        <a href="/" className='footer__link d-inline-block fw-normal pt-md-5 pt-3 pb-3 pb-md-0 text-decoration-none text-uppercase text-white'>contact</a>
                    </div>
                </div>
                <div className="border-opacity-10 border-bottom border-white d-none d-md-block my-3"></div>

                <div className="row pt-4 pt-md-3">

                    <div className="col-12 col-md-4">
                        <div>
                            <h3 className='text-white fw-bold footer-heading mb-0'>Designo Central Office</h3>
                            <address className=''>
                                <p className='mb-0 footer-desc text-white'>3886 Wellington Street</p>
                                <p className='mb-0 footer-desc text-white'>Toronto, Ontario M9C 3J5</p>
                            </address>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div>
                            <h3 className='text-white fw-bold footer-heading mb-0'>Contact Us (Central Office)</h3>
                            <address className=''>
                                <p className='mb-0 footer-heading fw-bold text-white'>P&nbsp;: <a className='footer-heading fw-bold text-white text-decoration-none' href="tel:+12538638967">+1 253-863-8967</a></p>
                                <p className='mb-0 footer-heading fw-bold text-white'>M&nbsp;: <a href="mailto:contact@designo.co" className='footer-heading fw-bold text-white text-decoration-none'>contact@designo.co</a></p>
                            </address>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className=''>
                            <div className='d-flex column-gap-3'>
                                <a href="/">
                                    <FacebookIcon className='icons' />
                                </a>
                                <a href="/">
                                    <YoutubeIcon className='icons' />
                                </a>
                                <a href="/">
                                    <TwitterIcon className='icons' />
                                </a>
                                <a href="/">
                                    <PinterestIcon className='icons' />
                                </a>
                                <a href="/">
                                    <InstagramIcon className='icons' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
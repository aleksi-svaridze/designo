import Button from '../../components/buttons/Button'
import Circles from '../../components/circles/Circles';
import heroBg from '../../images/hero/hero_bg.png'

const Hero = () => {
    return(
        <div className="container">
            <div className="hero bg-primary row overflow-hidden position-relative">
                <Circles styles={'hero_circle rounded-circle position-absolute'} />

                <div className="col-12 col-lg-6">
                    <div className='hero__text-content text-center text-lg-start position-relative'>
                        <h1 className="hero__text-content--title text-white fw-medium">Award-winning custom designs and digital branding solutions</h1>
                        <p className="hero__text-content--desc text-white fw-normal">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                        <Button path={''} content='learn more' btnStyle={'btn-white mx-auto ms-lg-0 me-lg-auto'} />
                    </div>
                </div>

                <div className='col-12 col-lg-6'>
                    <div className='hero__image-content position-relative h-100'>
                        <img src={heroBg} alt="" className='hero__image-content-img position-absolute' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;
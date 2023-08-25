import heroBg from '../../images/hero/hero_bg.png'

const Hero = () => {
    return(
        <div className="container">
            <div className="hero bg-primary row overflow-hidden">

                <div className="hero__text-content col-12 col-lg-6 text-center text-lg-start">
                    <h1 className="hero__text-content--title text-white fw-medium">Award-winning custom designs and digital branding solutions</h1>
                    <p className="hero__text-content--desc text-white fw-normal">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <div className="btn">button</div>
                </div>

                <div className='hero__image-content col-12 col-lg-6 text-center text-lg-end'>
                    <img src={heroBg} alt="" className='hero__image-content-img' />
                </div>

            </div>
        </div>
    )
}

export default Hero;
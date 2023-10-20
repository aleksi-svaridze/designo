import { AboutCard, AboutPageCard } from "../components/cards/Cards"
import { useWindowSize } from "usehooks-ts"

import aboutBg from '../images/about-page/about_us_bg.jpg'
import worldClassTallentBg from '../images/about-page/world_class_talent_bg.jpg'
import realDealBg from '../images/about-page/real_deal_bg.jpg'

import image1 from '../images/about-page/canada.png'
import image2 from '../images/about-page/australia.png'
import image3 from '../images/about-page/uk.png'

const AboutPage = () => {
    const {width} = useWindowSize();

    let locationData = [
        {id: 1, img: image1, title: 'PASSIONATE', buttonText: 'see location'},
        {id: 2, img: image2, title: 'RESOURCEFUL', buttonText: 'see location'},
        {id: 3, img: image3, title: 'FRIENDLY', buttonText: 'see location'},
    ]

    return(
        <div className="container portfolio-card-container" style={{padding: width <= 576 && '0px'}}>
            <div style={{marginBottom: width <= 576 ? '0' : width <= 768 ? '30px' : '65px'}}>
                <AboutPageCard 
                    img={aboutBg}
                    imgOrder={'order-1 order-lg-2'}
                    imgHeight='480px'
                    heading={'About Us'} 
                    textBg={'bg-primary text-white'}
                    textOrder={'order-2 order-lg-1'}
                    desc={"Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."}
                />
            </div>

            <div className="row">
                {locationData.map(item => (
                    <div className="col-12 col-lg-4" key={item.id}>
                        <AboutCard 
                            id={item.id} 
                            img={item.img} 
                            title={item.title} 
                            buttonText={item.buttonText} 
                            cardStyle={'d-flex flex-column align-items-center about-card'}
                            textStyles='text-center'
                            btnStyle='btn btn-pink mx-auto'
                            imageStyle='mb-5'
                        />
                    </div>
                ))}
            </div>

            <AboutPageCard 
                img={worldClassTallentBg}
                imgOrder={'order-1'}
                imgHeight='640px'
                heading={'World-class talent'} 
                textBg={'bg-tertiary'}
                textOrder={'order-2'}
                headingColor={'text-primary'}
                descColor={'text-gray-dark'}
                desc={`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.`}
                desc2={`Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.`}
            />

            <AboutPageCard 
                img={realDealBg}
                imgOrder={'order-1 order-lg-2'}
                imgHeight='640px'
                heading={'The real deal'} 
                textBg={'bg-tertiary'}
                textOrder={'order-2 order-lg-1'}
                headingColor={'text-primary'}
                descColor={'text-gray-dark'}
                desc={`As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`}
                desc2={`We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
            />
        </div>
    )
}

export default AboutPage;
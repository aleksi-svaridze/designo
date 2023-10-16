import {HeadingCard, WorksCard} from '../components/cards/Cards'
import Rect from '../components/rect/Rect'

// Assets for Portfolio card
import { PortfolioCard } from "../components/cards/Cards"
import img1 from '../images/portfolio/cover_1.png'
import img2 from '../images/portfolio/cover_2.png'

// Assets for Works card
import workImg1 from '../images/works/graphics/1.png'
import workImg2 from '../images/works/graphics/2.png'
import workImg3 from '../images/works/graphics/3.png'

const WebDesign = () => {
    let portfolioCardData = [
        {id: 1, img: img2, title: 'app design', path: 'app-design'},
        {id: 2, img: img1, title: 'web design', path: 'web-design'},
    ]
    let graphicDesignData = [
        {id: 1, img: workImg1, title: 'TIM BROWN', desc: 'A book cover designed for Tim Brown\'s new release, \'Change\''},
        {id: 2, img: workImg2, title: 'BOXED WATER', desc: 'A simple packaging concept made for Boxed Water'},
        {id: 3, img: workImg3, title: 'SCIENCE!', desc: 'A poster made in collaboration with the Federal Art Project'}
    ]
    return(
        <div className="overflow-hidden">
            <HeadingCard 
                title={'Graphic Design'} 
                desc={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'} 

                circleTopRight='rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--1 d-lg-none'

                circleTopMidLeft='rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--3 d-lg-none'

                circleTopLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--4'}


                circleTopMidRight={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--2'}

                circleBottomLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--4 d-none d-lg-block'}

                circleBottomMidLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--3 d-none d-lg-block'}

                circleBottomRight='rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--1 d-lg-none'

                circleBottomMidRight='rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--2 d-lg-none' 
            />

            <div className="position-relative rect-container">
                <div className="container works-card-container">
                    <div className="row">
                        {graphicDesignData.map(item => (
                            <div className="col-12 col-lg-6 col-xl-4" key={item.id}>
                                <WorksCard id={item.id} title={item.title} img={item.img} desc={item.desc} />
                             </div>
                        ))}
                    </div>
                </div>
                <Rect styles="works-rect works-rect-left position-absolute bg-gray-light d-none d-xl-block" />
            </div>

            <div className="container portfolio-card-container">
                <div className="row gy-4 gy-lg-0">
                    {
                        portfolioCardData.map(item => (
                        <div className="col-12 col-lg-6" key={item.id}>
                            <PortfolioCard img={item.img} title={item.title} path={item.path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WebDesign;
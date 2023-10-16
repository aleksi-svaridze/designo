import {HeadingCard, WorksCard} from '../components/cards/Cards'
import Rect from '../components/rect/Rect'

import { PortfolioCard } from "../components/cards/Cards"
import img1 from '../images/portfolio/cover_1.png'
import img3 from '../images/portfolio/cover_3.png'

// Assets for Works card
import app1 from '../images/works/apps/1.png'
import app2 from '../images/works/apps/2.png'
import app3 from '../images/works/apps/3.png'
import app4 from '../images/works/apps/4.png'
import app5 from '../images/works/apps/5.png'


const AppDesign = () => {
    let portfolioCardData = [
        {id: 1, img: img1, title: 'web design', path: 'web-design'},
        {id: 2, img: img3, title: 'graphic design', path: 'graphic-design'},
    ]
    let appDesignData = [
        {id: 1, img: app1, title: 'AIRFILTER', desc: 'Solving the problem of poor indoor air quality by filtering the air'},
        {id: 2, img: app2, title: 'EYECAM', desc: 'Product that lets you edit your favorite photos and videos at any time'},
        {id: 3, img: app3, title: 'FACEIT', desc: 'Get to meet your favorite internet superstar with the faceit app'},
        {id: 4, img: app4, title: 'TODO', desc: 'A todo app that features cloud sync with light and dark mode'},
        {id: 5, img: app5, title: 'LOOPSTUDIOS', desc: 'A VR experience app made for Loopstudios'}
    ]
    return(
        <div className="overflow-hidden">
            <HeadingCard 
                title={'app design'} 
                desc={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'} 

                circleTopRight='rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--1 d-lg-none'

                circleTopMidRight={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--2'}
                
                circleTopMidLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--top heading-card__circles--top--3'}


                circleBottomLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--4 d-none d-lg-block'}

                circleBottomMidLeft={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--3 d-none d-lg-block'}

                circleBottomMidRight={'rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--2'} 

                circleBottomRight='rounded-circle position-absolute heading-card__circles heading-card__circles--bottom heading-card__circles--bottom--1 d-lg-none'
            />
                
       
            <div className="position-relative rect-container">
                <div className="container works-card-container">
                    <div className="row">
                        {appDesignData.map(item => (
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

export default AppDesign;
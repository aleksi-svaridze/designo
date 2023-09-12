import {HeadingCard, WorksCard} from '../components/cards/Cards'
import Rect from '../components/rect/Rect'

import { PortfolioCard } from "../components/cards/Cards"
import img2 from '../images/portfolio/cover_2.png'
import img3 from '../images/portfolio/cover_3.png'

// Assets for Works card
import web1 from '../images/works/webs/Express1.jpg'
import web2 from '../images/works/webs/Express2.jpg'
import web3 from '../images/works/webs/Express3.jpg'
import web4 from '../images/works/webs/Express4.jpg'
import web5 from '../images/works/webs/Express5.jpg'
import web6 from '../images/works/webs/Express6.jpg'

const WebDesign = () => {
    let portfolioCardData = [
        {id: 1, img: img2, title: 'app design', path: 'app-design'},
        {id: 2, img: img3, title: 'graphic design', path: 'graphic-design'},
    ]

    let webDesignData = [
        {id: 1, img: web1, title: 'express', desc: 'A multi-carrier shipping website for ecommerce businesses'},
        {id: 2, img: web2, title: 'TRANSFER', desc: 'Site for low-cost money transfers and sending money within seconds'},
        {id: 3, img: web3, title: 'PHOTON', desc: 'A state-of-the-art music player with high-resolution audio and DSP effects'},
        {id: 4, img: web4, title: 'BUILDER', desc: 'Connects users with local contractors based on their location'},
        {id: 5, img: web5, title: 'BLOGR', desc: 'Blogr is a platform for creating an online blog or publication'},
        {id: 6, img: web6, title: 'CAMP', desc: 'Get expert training in coding, data, design, and digital marketing'},
    ]
    return(
        <div className="overflow-hidden">
            <HeadingCard title='web design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' />

            <div className="position-relative rect-container">
                <div className="container works-card-container">
                    <div className="row">
                        {webDesignData.map(item => (
                             <WorksCard id={item.id} title={item.title} img={item.img} desc={item.desc} />
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
import { AboutCard } from "../../components/cards/Cards";
import Rect from "../../components/rect/Rect";

import image1 from '../../images/about/passionate.png'
import image2 from '../../images/about/resourceful.png'
import image3 from '../../images/about/friendly.png'



const AboutUs = () => {
    let aboutUsData = [
        {id: 1, img: image1, title: 'PASSIONATE', desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'},
        {id: 2, img: image2, title: 'RESOURCEFUL', desc: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'},
        {id: 3, img: image3, title: 'FRIENDLY', desc: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'},
    ]
    return(
        <div className="position-relative rect-container">
            <div className="container about-container">
                <div className="row">
                    {aboutUsData.map(item => (
                        <div className="col-12 col-xl-4" key={item.id}>
                            <AboutCard 
                                id={item.id} 
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc}
                                cardStyle={'d-flex flex-column flex-md-row flex-xl-column align-items-center about-card'}
                                textStyles='text-center text-md-start text-xl-center ms-md-5 ms-0 ms-xl-0'
                                imageStyle={'mb-xl-5 mb-5 mb-md-0'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Rect styles={'rect rect-right position-absolute bg-gray-light d-none d-xl-block'} />
        </div>
    )
}

export default AboutUs;
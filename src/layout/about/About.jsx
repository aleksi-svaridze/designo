import AboutCard from "../../components/cards/AboutCard";
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
        <div className="position-relative" style={{maxWidth: '1600px', margin: '0 auto'}}>
            <div className="container about-container">
                <div className="row">
                    {aboutUsData.map(item => (
                        <AboutCard id={item.id} img={item.img} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>

            <Rect styles={'rect rect-right position-absolute bg-gray-light d-none d-xl-block'} />
        </div>
    )
}
// d-none d-lg-block d-xxl-none

export default AboutUs;
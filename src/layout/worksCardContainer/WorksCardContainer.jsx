import { WorksCard } from "../../components/cards/Cards";

import img1 from '../../images/works/Express1.jpg'
import img2 from '../../images/works/Express2.jpg'
import img3 from '../../images/works/Express3.jpg'
import img4 from '../../images/works/Express4.jpg'
import img5 from '../../images/works/Express5.jpg'
import img6 from '../../images/works/Express6.jpg'


const WorksCardContainer = () => {
    let webDesignData = [
        {id: 1, img: img1, title: 'express', desc: 'A multi-carrier shipping website for ecommerce businesses'},
        {id: 2, img: img2, title: 'TRANSFER', desc: 'Site for low-cost money transfers and sending money within seconds'},
        {id: 3, img: img3, title: 'PHOTON', desc: 'A state-of-the-art music player with high-resolution audio and DSP effects'},
        {id: 4, img: img4, title: 'BUILDER', desc: 'Connects users with local contractors based on their location'},
        {id: 5, img: img5, title: 'BLOGR', desc: 'Blogr is a platform for creating an online blog or publication'},
        {id: 6, img: img6, title: 'CAMP', desc: 'Get expert training in coding, data, design, and digital marketing'},
    ]
    return(
        <div className="container works-card-container">
            <div className="row">
                {
                    webDesignData.map(item => (
                        <WorksCard 
                            img={item.img} 
                            title={item.title} 
                            id={item.id} 
                            desc={item.desc}    
                        />       
                    ))
                }
            </div>
        </div>
    )
}

export default WorksCardContainer;
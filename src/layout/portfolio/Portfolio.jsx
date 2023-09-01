import { useWindowSize } from 'usehooks-ts';

import img1 from '../../images/portfolio/cover_1.png'
import img2 from '../../images/portfolio/cover_2.png'
import img3 from '../../images/portfolio/cover_3.png'

import { PortfolioCard } from '../../components/cards/Cards'


const Portfolio = () => {
    const {width} = useWindowSize();

    let styles = '';

    if(width > 992) {
        styles = '100%';
    }
    else if(width <= 768) {
        styles = '250px';
    }
    else if(width > 768) {
        styles = '200px';
    }

    let portfolioCardData = [
        {id: 1, img: img2, title: 'app design', path: 'app-design'},
        {id: 2, img: img3, title: 'graphic design', path: 'graphic-design'},
    ]
    return(
        <div className="my-5 py-5">
            <div className="container my-0 my-lg-3 py-3 py-lg-5">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-6">

                        <PortfolioCard 
                            title={'web design'} 
                            img={img1} 
                            path={'web-design'} 
                            styles={styles}
                        />  

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row gy-4">
                            {
                                portfolioCardData.map(item => (
                                    <div className="col-12" key={item.id}>
                                        <PortfolioCard 
                                            title={item.title} 
                                            img={item.img} 
                                            path={item.path} 
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
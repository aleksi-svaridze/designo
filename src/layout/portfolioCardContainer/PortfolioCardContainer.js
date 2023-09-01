import { PortfolioCard } from "../../components/cards/Cards"
import img1 from '../../images/portfolio/cover_2.png'
import img2 from '../../images/portfolio/cover_3.png'

const PortfolioCardContainer = () => {
    let portfolioCardData = [
        {id: 1, img: img1, title: 'app design', path: 'app-design'},
        {id: 2, img: img2, title: 'graphic design', path: 'graphic-design'},
    ]
    return(
        <div className="container portfolio-card-container">
            <div className="row gy-4 gy-lg-0">
                {portfolioCardData.map(item => (
                    <div className="col-12 col-lg-6" key={item.id}>
                        <PortfolioCard 
                            img={item.img} 
                            title={item.title} 
                            path={item.path}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioCardContainer;
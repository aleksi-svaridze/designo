import { PortfolioMiniCards } from "../../components/cards/Cards"
import img1 from '../../images/portfolio/cover_2.png'
import img2 from '../../images/portfolio/cover_3.png'

const PortfolioCardContainer = () => {
    let portfolioCardData = [
        {id: 1, img: img1, title: 'app design', path: 'app-design'},
        {id: 1, img: img2, title: 'graphic design', path: 'graphic-design'},
    ]
    return(
        <div className="container portfolio-card-container">
            <div className="row">
                {portfolioCardData.map(item => (
                    <PortfolioMiniCards 
                        img={item.img} 
                        title={item.title} 
                        path={item.path} 
                        id={item.id} 
                    />
                ))}
            </div>
        </div>
    )
}

export default PortfolioCardContainer;
import {HeadingCard} from '../components/cards/Cards'
import PortfolioCardContainer from '../layout/portfolioCardContainer/PortfolioCardContainer';
import WorksCardContainer from '../layout/worksCardContainer/WorksCardContainer';


const Works = () => {
    return(
        <div className="overflow-hidden">
            <HeadingCard />
            <WorksCardContainer />
            <PortfolioCardContainer />
        </div>
    )
}

export default Works;
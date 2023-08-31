import AboutUs from "../layout/about/About"
import Hero from "../layout/hero/Hero"
import Portfolio from "../layout/portfolio/Portfolio"


const Main = () => {
    return(
        <div className="overflow-hidden">
            <Hero />
            <Portfolio />
            <AboutUs />
        </div>
    )
}

export default Main;
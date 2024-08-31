import { Link } from "react-router-dom";


const MobileMenu = () => {
    return(
        <div className="fixed z-10 top-24 h-screen left-0 right-0 bg-black/95 overflow-hidden">
            <div className="bg-black">
                <nav className="flex flex-col text-white gap-y-9 container px-6 md:px-10 py-14">
                    <Link to="about" className="text-2xl leading-[25px] tracking-[2px] uppercase">our company</Link>
                    <Link to="locations" className="text-2xl leading-[25px] tracking-[2px] uppercase">locations</Link>
                    <Link to="contact" className="text-2xl leading-[25px] tracking-[2px] uppercase">contact</Link>
                </nav>    
            </div>    
        </div>
    )
}

export default MobileMenu;
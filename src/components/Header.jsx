import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../images/logo.png';
import { Menu } from '../images/svgs';

export const Header = () => {
    return(
        <header className='py-9 md:py-16'>
            <div className='flex items-center justify-between container'>
                <Link to="" className='flex items-center gap-x-5'>
                    <img src={LogoImage} alt="" className='w-6 h-6' />
                    <span className='text-2xl leading-6 tracking-[5px] uppercase font-bold font-spartan'>designo</span>    
                </Link>

                <nav className="hidden md:flex items-start gap-x-[42px] uppercase text-sm leading-[14px] tracking-[2px]">
                    <NavLink to="about" className={({isActive}) => isActive && 'border-b border-dark-gray'}>our company</NavLink>
                    <NavLink to="locations" className={({isActive}) => isActive && 'border-b border-dark-gray'}>locations</NavLink>
                    <NavLink to="contact" className={({isActive}) => isActive && 'border-b border-dark-gray'}>contact</NavLink>
                </nav>

                <div className='md:hidden'>
                    <Menu />
                </div>
            </div>
        </header>
    )
}
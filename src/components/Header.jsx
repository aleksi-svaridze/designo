import { Link, NavLink } from 'react-router-dom'
import LogoImage from '../images/logo.png'

export const Header = () => {
    return(
        <header className='py-16'>
            <div className='flex items-start justify-between container mx-auto'>
                <Link to="" className='font-spartan text-dark-gray flex items-start gap-x-5 text-2xl leading-6 tracking-[5px] uppercase font-bold'>
                    <img src={LogoImage} alt="" className='w-6 h-6' />
                    designo
                </Link>

                <nav className="flex items-start gap-x-[42px] uppercase text-sm leading-3 tracking-[2px]">
                    <NavLink to="" className={({isActive}) => isActive && 'border-b border-dark-gray'}>our company</NavLink>
                    <NavLink to="locations" className={({isActive}) => isActive && 'border-b border-dark-gray'}>locations</NavLink>
                    <NavLink to="about" className={({isActive}) => isActive && 'border-b border-dark-gray'}>about</NavLink>
                    <NavLink to="contact" className={({isActive}) => isActive && 'border-b border-dark-gray'}>contact</NavLink>
                </nav>
            </div>
        </header>
    )
}
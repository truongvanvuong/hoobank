import { useState, useRef, useEffect } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { HandleScroll } from '../Handle';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);
    useEffect(() => {
        setNavHeight(navRef.current.clientHeight);
    }, []);
    const isVisible = HandleScroll(navHeight);
    return (
        <nav
            ref={navRef}
            className={` w-full z-[90] flex py-[10px] mt-2 md:mt-0 md:py-5 justify-between items-center navbar ${
                isVisible ? 'bg-slate-600 md:mt-3 px-5 rounded-full fadein' : ''
            }`}>
            <img
                src={logo}
                alt='hooBank'
                className='w-[114px] h-[22px] sm:w-[124px] sm:h-[32px] '
            />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] 
                        ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                        } text-white`}>
                        <a href={`#${nav.id}`} className=''>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-end'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[24px] h-[24px] object-contian'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${
                        toggle ? 'flex' : 'hidden'
                    } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] 
                        ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                        } text-white`}>
                                <a href={`#${nav.id}`} className=''>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

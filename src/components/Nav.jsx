import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
          src={headerLogo}
          alt="Logo"
          width={60}
          height={20}
          />
        </a>
        <h5 className="font-palanquin font-bold text-xl text-[#A3BB88]">Celestial Charms</h5>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray hover:underline underline-offset-4 decoration-2 decoration-[#A3BB88]'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav

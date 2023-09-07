import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BiBookHeart, BiMessageDetail } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'

const Nav = () => {
  const [activeLink, setActiveLink] = useState('/')

  return (
    <nav className='flex fixed left-1/2 -translate-x-1/2 bottom-8 w-max p-2 rounded-full backdrop-blur-md bg-opacity-30 bg-gray-200 z-10'>
      {/* <Link
        to='/'
        onClick={() => setActiveLink('/')}
        className={`${
          activeLink === '/'
            ? 'bg-blue-950 text-white'
            : 'bg-transparent text-light'
        } p-2 rounded-full flex items-center justify-center text-1.1rem`}
      >
        <BiHome size={20} />
      </Link> */}
      <Link
        to='/'
        onClick={() => setActiveLink('/')}
        className={`${
          activeLink === '/'
            ? 'bg-blue-950 text-white'
            : 'bg-transparent text-light'
        } p-2 rounded-full flex items-center justify-center text-1.1rem`}
      >
        <FiUser size={20} />
      </Link>
      <Link
        to='experience'
        onClick={() => setActiveLink('experience')}
        className={`${
          activeLink === 'experience'
            ? 'bg-blue-950 text-white'
            : 'bg-transparent text-light'
        } p-2 rounded-full flex items-center justify-center text-1.1rem`}
      >
        <BiBookHeart size={20} />
      </Link>
      <Link
        to='portfolio'
        onClick={() => setActiveLink('portfolio')}
        className={`${
          activeLink === 'portfolio'
            ? 'bg-blue-950 text-white'
            : 'bg-transparent text-light'
        } p-2 rounded-full flex items-center justify-center text-1.1rem`}
      >
        <PiSuitcaseSimpleBold size={20} />
      </Link>
      <Link
        to='contact'
        onClick={() => setActiveLink('contact')}
        className={`${
          activeLink === 'contact'
            ? 'bg-blue-950 text-white'
            : 'bg-transparent text-light'
        } p-2 rounded-full flex items-center justify-center text-1.1rem`}
      >
        <BiMessageDetail size={20} />
      </Link>
    </nav>
  )
}

export default Nav

import Link from 'next/link'

import React from 'react'
import { twMerge } from 'tailwind-merge'

const menuData = [
  {
    text: 'Portfolio',
    url: '/portfolio',
    download: false,
    transition: 'animate-fade-up',
  },
  {
    text: 'Download CV',
    url: './public/cv.pdf',
    download: true,
    transition: 'animate-fade-up-two',
  },
  {
    text: 'Contact Info',
    url: '/contact-info',
    download: false,
    transition: 'animate-fade-up-three',
  },
]

interface Props {
  isMenuActive: boolean
  closeNavMenu: () => void
}

const NavMenu: React.FC<Props> = ({
  isMenuActive,
  closeNavMenu,
}) => {
  return (
    <div
      className={twMerge(
        'nav-menu fixed z-50 w-screen h-screen bg-black duration-300 flex flex-col justify-center py-10 lg:py-20',
        isMenuActive
          ? 'lg:top-0 right-0'
          : 'lg:-top-full -right-full lg:right-0'
      )}
    >
      <nav
        className={twMerge(
          'container h-fit',
          isMenuActive ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <div className="w-full">
          <ul className="lg:relative w-full flex flex-col gap-y-5">
            {menuData
              ?.map((item: any, index: any) =>
                (
                  <li className={twMerge('opacity-0', isMenuActive && item.transition)} key={`link-${index}`}>
                    <Link
                      href={item.url}
                      target='_self'
                      onClick={closeNavMenu}
                      className={twMerge(
                        'menu-item',
                      )}
                      download={item.download}
                    >
                      <span className='block heading-6xl text-white duration-300 lg:translate-x-0 lg:hover:translate-x-8'>{item.text}</span>
                    </Link>
                  </li>
                )
              )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu
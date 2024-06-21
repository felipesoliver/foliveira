'use client'

import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'
import { twMerge } from 'tailwind-merge'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const closeNavMenu = useCallback(() => {
    setIsMenuActive(false)
  }, [])

  return (
    <>
      <NavMenu isMenuActive={isMenuActive} closeNavMenu={closeNavMenu} />
      <header className='header' >
      <div className='header-wrapper container'>
        <Link href={'/'}>
          <span className={twMerge('heading-4xl duration-300', isMenuActive ? 'text-white' : 'text-black')}>F.</span>
        </Link>
        <div className={twMerge('phrase', isMenuActive ? 'hidden' : 'hidden lg:flex opacity-0 animate-fade-in-two')}>
          <p>me = Person();</p>
          <p>while(me.awake());</p>
          <p>me.code();</p>
        </div>
        <Hamburger
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      </div>
      </header>
    </>
  )
}

export default Header
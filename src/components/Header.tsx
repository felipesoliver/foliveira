'use client';

import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import { twMerge } from 'tailwind-merge';
import { onScroll } from '@/utils/scroll';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return onScroll((scrollPosition) => {
      scrollPosition > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  const closeNavMenu = useCallback(() => {
    setIsMenuActive(false);
  }, []);

  return (
    <>
      <NavMenu isMenuActive={isMenuActive} closeNavMenu={closeNavMenu} />
      <header
        className={twMerge(
          'header duration-300 transition-[cubic-bezier(0.455, 0.03, 0.515, 0.955)]',
          isScrolled && !isMenuActive ? 'lg:h-28' : 'lg:h-[8.125rem]'
        )}
      >
        <div className="header-wrapper container">
          <Link href={'/'} onClick={closeNavMenu}>
            <span
              className={twMerge(
                'heading-4xl duration-300',
                isMenuActive ? 'text-white' : 'text-black'
              )}
            >
              F.
            </span>
          </Link>
          <div className='flex items-center gap-2'>
            <span className={twMerge('text-lg', isMenuActive ? 'text-white' : 'text-black')}>Menu</span>
            <Hamburger
              isMenuActive={isMenuActive}
              setIsMenuActive={setIsMenuActive}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

'use client'

import useStateController from '@/hooks/use-state-controller'
import { currentYear } from '@/utils/date'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Footer = () => {
  const { selectedTheme } = useStateController()

  return (
    <footer className={twMerge(
      'py-10 lg:py-20 text-center',
      selectedTheme === 'light' ? 'text-black' : 'text-white'
    )}>
      {`©${currentYear} - Felipe Oliveira. All rights reserved.`}
    </footer>
  )
}

export default Footer

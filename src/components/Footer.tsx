'use client'

import { currentYear } from '@/utils/date'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-10 lg:py-20 text-center'>{`©${currentYear} - Felipe Oliveira. All rights reserved.`}</footer>
  )
}

export default Footer

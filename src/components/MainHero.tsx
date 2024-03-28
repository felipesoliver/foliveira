/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { data } from '@/api/homepage'
import Image from 'next/image'
import Link from 'next/link'

const MainHero = () => {
  const content = data.mainHero

  return (
    <section className='relative lg:h-[50rem]'>
      <Image className='lg:hidden absolute top-0 left-0 w-full' {...content.bgImageMb} />
      <Image className='hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full' {...content.bgImage} />

      <div className='container relative z-10'>
        <ul className='flex gap-4'>
          <li className='font-bold'>Follow</li>
          {content.links.length > 0 &&
            content.links.map((link, index) => (
              <li key={`link-${index}`}>
                <Link href={link.url} target={link.blank ? '_blank' : ''}>{link.text}</Link>
              </li>
            ))
          }
        </ul>

        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default MainHero
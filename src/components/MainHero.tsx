'use client'
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react'
import { data } from '@/api/homepage'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Cta from './Cta'

const MainHero = () => {
  const content = data.mainHero
  const scrollRef = useRef(null)

  return (
    <section className='main-hero relative h-screen lg:h-[50rem] lg:min-h-screen pb-10 lg:pb-20 pt-20 lg:pt-28 flex items-center' ref={scrollRef}>
      <Image className='lg:hidden absolute top-0 left-0 w-full pointer-events-none' {...content.bgImageMb} />
      <Image className='hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full' {...content.bgImage} />
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 z-10'>
        <motion.div
          className='relative flex flex-col gap-5'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
        >
          <div className='flex items-center gap-4'>
            <span className='w-8 h-[0.125rem] bg-black'/>
            <span className='lg:text-lg'>{content.name}</span>
          </div>
          <h1 className='text-7xl lg:text-[7.92vw] font-vollkorn font-extralight'>{content.role}</h1>
          <ul className='flex gap-4 lg:absolute lg:-bottom-24 lg:left-0 lg:-rotate-90 lg:-translate-x-1/2'>
            <li className='font-bold'>Follow</li>
            {content.links.length > 0 &&
              content.links.map((link, index) => (
                <li className='transition-all duration-200 hover:text-purple' key={`link-${index}`}>
                  <Link href={link.url} target={link.blank ? '_blank' : ''}>{link.text}</Link>
                </li>
              ))
            }
          </ul>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center gap-5 md:gap-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ root: scrollRef }}
        >
          <div className='flex flex-col justify-center gap-2 lg:pl-5'>
            <span className='block w-8 h-[0.125rem] bg-black'/>
            <p className='lg:text-xl 2xl:text-2xl lg:w-1/2'>{content.intro}</p>
          </div>
          <Cta
            text={content.cta.text}
            url={content.cta.url}
            blank={content.cta.blank}
            variant='dark'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default MainHero

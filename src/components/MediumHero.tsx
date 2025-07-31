'use client'
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react'
import { data } from '@/api/portfolio'
import { motion } from 'framer-motion'

import ScrollDown from '@/assets/icons/scroll-down.svg'

const MediumHero = () => {
  const content = data.mediumHero
  const scrollRef = useRef(null)

  return (
    <section className='main-hero relative z-10 h-screen lg:h-[50rem] lg:min-h-screen pb-10 lg:pb-20 pt-20 lg:pt-28 flex items-center' ref={scrollRef}>
      <div className='container grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0 z-10'>
        <motion.div
          className='relative flex flex-col gap-5 text-white lg:col-span-3'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
        >
          <h1 className='text-5xl lg:text-[4.92vw] font-vollkorn font-extralight'>{content.title}</h1>
          <div className='flex flex-col justify-center gap-2'>
            <span className='block w-8 h-[0.125rem] bg-white'/>
            <p className='lg:text-xl 2xl:text-2xl lg:w-1/2'>{content.description}</p>
          </div>
        </motion.div>
      </div>
      <motion.button
        className='group hidden lg:block absolute bottom-20 left-1/2 -translate-x-1/2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.5,
          duration: 0.7
        }}
      >
        <ScrollDown className='w-28 h-28 animate-hour-rotation' />
        <span className='absolute top-[4.25rem] left-1/2 -translate-x-1/2 w-[0.0625rem] h-[0.0625rem] group-hover:h-[5rem] bg-white duration-500 ease-linear transition-all opacity-60' />
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-5 border-l border-b border-white -rotate-45 duration-500 ease-linear transition-all group-hover:top-[8.5rem]' />
      </motion.button>
    </section>
  )
}

export default MediumHero

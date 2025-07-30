import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ICta } from '@/types/types'

import Arrow from '@/assets/icons/arrow.svg'
import { tv } from 'tailwind-variants'

const ctaVariants = tv({
  base: 'cta group w-screen md:w-[50vw] lg:w-[25vw] flex justify-between items-center px-5 md:px-8 lg:px-5 py-4 md:py-6 border-y text-base lg:text-lg -ml-5 md:-ml-8 lg:mx-0',
  variants: {
    variant: {
      light: 'text-white border-white/10',
      dark: 'text-black border-black/10',
    },
  },
})

const Cta: React.FC<
  ICta &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  blank,
  text,
  url,
  variant,
  className,
  ...props
}) => {
  if (url) {
    return (
      <Link
        href={url}
        target={blank ? '_blank' : '_self'}
        className={twMerge(ctaVariants({variant}), className)}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{text}</span>
        <div className='w-6 h-6 overflow-hidden'>
          <Arrow className='w-full h-full translate-x-0 translate-y-0 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500' />
          <Arrow className='w-full h-full -translate-x-6 translate-y-0 group-hover:translate-x-0 group-hover:-translate-y-6 transition-all duration-500' />
        </div>
      </Link>
    )
  }

  return (
    <button
      className={twMerge(ctaVariants({variant}), className)}
      {...(props as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{text}</span>
      <div className='w-6 h-6 overflow-hidden'>
        <Arrow className='w-full h-full translate-x-0 translate-y-0 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500' />
        <Arrow className='w-full h-full -translate-x-6 translate-y-0 group-hover:translate-x-0 group-hover:-translate-y-6 transition-all duration-500' />
      </div>
    </button>
  )
}

export default Cta

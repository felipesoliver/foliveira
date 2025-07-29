import { Manrope, Vollkorn } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const vollkorn = Vollkorn({
  subsets: ['latin'],
  variable: '--font-vollkorn',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

import MainHero from '@/components/MainHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Felipe Oliveira',
  description: 'A web app for my portfolio',
}

export default function Page() {
  return (
    <MainHero />
  )
}
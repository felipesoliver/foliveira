/* eslint-disable react-hooks/exhaustive-deps */
import Main from '@/components/Main'
import MediumHero from '@/components/MediumHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "This section shows my latest web developer's jobs",
}

export default function Page() {
  return (
    <Main theme='dark'>
      <MediumHero />
    </Main>
  )
}

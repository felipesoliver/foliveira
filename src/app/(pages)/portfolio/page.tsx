/* eslint-disable react-hooks/exhaustive-deps */
import Main from '@/components/Main'
import useStateController from '@/hooks/use-state-controller'
import { Metadata } from 'next'
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "This section shows my latest web developer's jobs",
}

export default function Page() {

  return (
    <Main theme='dark'>
      <h1 className='heading-7xl'>Portfolio</h1>
    </Main>
  )
}

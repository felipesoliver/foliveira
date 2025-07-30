'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import useStateController from '@/hooks/use-state-controller'
import React, { useEffect } from 'react'

interface Props {
  theme: 'light' | 'dark'
  children: React.ReactNode
}

const Main: React.FC<Props> = ({
  children,
  theme = 'light',
}) => {
  const { setCurrentTheme } = useStateController()

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <main>{children}</main>
  )
}

export default Main

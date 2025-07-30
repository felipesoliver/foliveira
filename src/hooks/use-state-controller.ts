'use client'

import { useContext, useMemo } from 'react'

import { StateControllerContext } from '@/contexts/state-controller'

function useStateController() {
  const {
    currentTheme,
    setCurrentTheme
  } = useContext(StateControllerContext)

  const selectedTheme = useMemo(() => currentTheme, [currentTheme])

  return {
    currentTheme,
    setCurrentTheme,
    selectedTheme,
  }
}

export default useStateController

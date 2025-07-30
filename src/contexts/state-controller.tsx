'use client'

import React, { createContext, useState } from 'react'

export interface IStateControllerContext {
  currentTheme: 'light' | 'dark'
  setCurrentTheme: (value: 'light' | 'dark') => void
}

const initialState: IStateControllerContext = {
  currentTheme: 'light',
  setCurrentTheme: () => {},
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(initialState.currentTheme)

  return (
    <StateControllerContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider

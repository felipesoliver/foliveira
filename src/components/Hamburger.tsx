import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  isMenuActive: boolean
  setIsMenuActive: any
  selectedTheme: 'light' | 'dark'
}

const Hamburger: React.FC<Props> = ({
  isMenuActive,
  setIsMenuActive,
  selectedTheme,
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        'hamburger hamburger--squeeze flex items-center justify-center transition-colors duration-300',
        isMenuActive || selectedTheme === 'dark' ? 'text-white' : 'text-black',
        isMenuActive && 'is-active'
      )}
      onClick={() => {
        setIsMenuActive(!isMenuActive)
      }}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner duration-500 transition-colors text-current" />
      </div>
    </button>
  )
}

export default Hamburger

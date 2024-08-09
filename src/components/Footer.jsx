import React from 'react'
import logoWhite from '../assets/logos/logo.svg'
import { footer } from '../constants'
import { MenuFooter } from './footer.components'

function Footer() {
  return (
    <footer className='bg-black p-6 md:p-16 text-white flex flex-col gap-8'>
        <div className="flex flex-wrap space-y-5 justify-between">
              <div className="flex flex-col gap-5">
                  <img src={logoWhite} alt="logo" className='w-158 h-9' />
                  <p className="font-archivo font-medium text-sm">{footer[0]}</p>
                  <form className="h-[44px] w-full flex flex-row gap-2">
                      <input className='md:w-3/4 w-3/5 h-full border border-white text-white outline-none bg-transparent rounded-3xl px-4' type="text" name="" id="" placeholder='Your email' />
                      <input className='md:w-1/4 w-2/5 h-full bg-white rounded-3xl px-5 text-black text-sm font-archivo font-semibold' type="submit" value="Subscribe" />
                  </form>
              </div>
              <div className="flex flex-row md:gap-12 gap-5">
                  <MenuFooter title={'Product'} list={footer[1]} />
                  <MenuFooter title={'Categories'} list={footer[2]} />
                  <MenuFooter title={'Our Social Media'} list={footer[3]} />
              </div>
        </div>
        <p className="font-archivo font-regular text-xs text-center text-gray-dark">{footer[4]}</p>
    </footer>
  )
}

export default Footer

import React, {useContext} from 'react'
import logoBlack from '../assets/logos/logo-black.svg'
import hamburgerMenu from '../assets/icons/hambuger-menu.svg'
import times from '../assets/icons/times.svg'
import user from '../assets/icons/user.svg'
import search from '../assets/icons/search.svg'
import bag from '../assets/icons/bag.svg'
import {HeaderDesktop, HeaderMobile} from './headers'
import { CartContext } from '../context'

import { useState } from 'react'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const {cart} = useContext(CartContext)

  const handleHamburgerClick = () => {
     setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header>
       <HeaderDesktop numberProductsToCart={cart.length} handleHamburgerClick={handleHamburgerClick}  
        isOpenMenu={isOpenMenu} times={times} hamburgerMenu={hamburgerMenu}
        logoBlack={logoBlack} user={user} search={search} bag={bag}
       />  
       <HeaderMobile user={user} isOpenMenu={isOpenMenu} /> 
    </header>
  )
}

export default Header

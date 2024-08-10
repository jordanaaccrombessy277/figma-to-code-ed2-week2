import React from 'react'
import { Link } from 'react-router-dom';

const HeaderDesktop = ({handleHamburgerClick, numberProductsToCart, isOpenMenu, times, hamburgerMenu, logoBlack, user, search, bag}) => {
  return (
    <div className="px-6 md:px-16">
            <div className="flex justify-between h-76 items-center border-b">
                  <div className="flex">
                    <img onClick={handleHamburgerClick} src={ isOpenMenu ? times : hamburgerMenu} className={`lg:hidden`} alt="hamburger menu" />
                    <ul className='hidden lg:flex lg:flex-row gap-4.5'>
                        <li><Link to="/" className="text-base font-archivo">Men</Link></li>
                        <li><Link to="/" className="text-base font-archivo">Women</Link></li>
                        <li><Link to="/" className="text-base font-archivo">Kids</Link></li>
                        <li><Link to="/" className="text-base font-archivo">Collection</Link></li>
                    </ul>
                  </div>

                  <img src={logoBlack} alt="logo" />

                  <div className="flex gap-4.5">
                    <ul className='hidden lg:flex lg:flex-row gap-4.5'>
                        <li><Link to="/" className="text-base font-archivo">Shop</Link></li>
                        <li><Link to="/" className="text-base font-archivo">About us</Link></li>
                        <li><Link to="/" className="text-base font-archivo flex gap-1.5">
                          <img src={user} alt="icon user" /> Account</Link>
                        </li>
                        <li><Link to="/cart" className="text-base font-archivo">Cart({numberProductsToCart})</Link></li>
                    </ul>
                    <img src={search} className='w-5 h-5' alt="search icon" />
                    <img src={bag} className='w-5 h-5 lg:hidden' alt="bag icon" />
                  </div>
            </div>
    </div>
  )
}

export default HeaderDesktop;



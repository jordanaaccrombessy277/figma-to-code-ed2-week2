import React from 'react'

const HeaderDesktop = ({handleHamburgerClick, isOpenMenu, times, hamburgerMenu, logoBlack, user, search, bag}) => {
  return (
    <div className="px-6 md:px-16">
            <div className="flex justify-between h-76 items-center border-b">
                  <div className="flex">
                    <img onClick={handleHamburgerClick} src={ isOpenMenu ? times : hamburgerMenu} className={`lg:hidden`} alt="hamburger menu" />
                    <ul className='hidden lg:flex lg:flex-row gap-4.5'>
                        <li><a href="/" className="text-base font-archivo">Men</a></li>
                        <li><a href="/" className="text-base font-archivo">Women</a></li>
                        <li><a href="/" className="text-base font-archivo">Kids</a></li>
                        <li><a href="/" className="text-base font-archivo">Collection</a></li>
                    </ul>
                  </div>

                  <img src={logoBlack} alt="logo" />

                  <div className="flex gap-4.5">
                    <ul className='hidden lg:flex lg:flex-row gap-4.5'>
                        <li><a href="/" className="text-base font-archivo">Shop</a></li>
                        <li><a href="/" className="text-base font-archivo">About us</a></li>
                        <li><a href="/" className="text-base font-archivo flex gap-1.5">
                          <img src={user} alt="icon user" /> Account</a>
                        </li>
                        <li><a href="/" className="text-base font-archivo">Cart(0)</a></li>
                    </ul>
                    <img src={search} className='w-5 h-5' alt="search icon" />
                    <img src={bag} className='w-5 h-5 lg:hidden' alt="bag icon" />
                  </div>
            </div>
    </div>
  )
}

export default HeaderDesktop;



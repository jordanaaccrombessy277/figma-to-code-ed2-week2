import React from 'react'

const HeaderMobile = ({user, isOpenMenu}) => {
  return (
    <div className={`flex justify-center py-4 bg-white lg:hidden z-20 fixed w-full h-full duration-1000 ${isOpenMenu ? 'translate-y-0' : '-translate-y-double-full'} `}>
        <ul className='flex flex-col gap-y-10.5'>
                <div className="flex flex-col gap-4.5">
                    <li className='text-center'><a href="/" className="text-base font-archivo">Men</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">Women</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">Kids</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">Collection</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">Shop</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">About us</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo flex gap-1.5">
                       <img src={user} alt="icon user" /> Account</a>
                    </li>
                </div>
                <div className="flex flex-col gap-4.5">
                    <li className='text-center'><a href="/" className="text-base font-archivo">FAQ</a></li>
                    <li className='text-center'><a href="/" className="text-base font-archivo">Contact Us</a></li>
                </div>
        </ul>
    </div>
  )
}

export default HeaderMobile;
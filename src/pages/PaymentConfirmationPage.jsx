import React from 'react'
import check from '../assets/icons/checkline.svg'

function PaymentConfirmationPage() {
  return (
    <div className='p-6 md:px-16 flex flex-wrap justify-center lg:h-screen h-auto'>
         <div className="flex flex-col place-items-center gap-2.5 py-8 md:py-32">
              <div className="w-12 h-12 rounded-full border-4 py-3 px-2.5 border-black">
                  <img src={check} alt="" />
              </div>
              <p className="font-archivo text-center font-semibold text-lg">Thanks for your order !</p>
              <p className="font-archivo text-center text-sm text-gray-dark">The order confirmation has been sent to johndoe@gmail.com</p>
         </div>
    </div>
  )
}

export default PaymentConfirmationPage

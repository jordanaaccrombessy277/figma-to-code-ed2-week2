import React from 'react'
import trash from '../assets/icons/trash.svg'
import jordantatum from '../assets/images/JORDAN+TATUM+2 1.svg'
import top1 from '../assets/images/top1.svg' 
import jacket1 from '../assets/images/jacket1.svg'
import trashb from '../assets/icons/trashb.svg'
import remove_iconb from '../assets/icons/remove_iconb.svg'
import remove_icon from '../assets/icons/remove_icon.svg'
import add_icon from '../assets/icons/add_icon.svg'

import { ProductCart, OrderSummary } from '../components/cart.components'


function CartPage() {
  return (
    <div>
       <div className="p-6 pt-10 pb-11 md:px-16 md:py-16 flex flex-col lg:flex-row gap-10.5">
            <div className=" lg:w-3/4 w-full">
               <div className="pb-5 flex flex-row justify-between">
                  <p className="font-chillaxsemibold md:text-2xl text-lg">Cart(3)</p>
                  <a href="/" className="px-2.5 py-2 bg-grayopacity50 rounded-2xl flex flex-row items-center gap-1"> <img src={trash} alt="trash" /><span className='font-archivo font-medium md:text-xs text-10 text-gray-dark'>Clear Cart</span></a>
               </div>
               <table className="border-collapse w-full">
                  <thead>
                     <tr className='border-b'>
                        <th className='py-3 w-60 font-archivo font-medium text-left text-xs text-gray-dark'>Product</th>
                        <th className='py-3 w-35 font-archivo font-medium text-center text-xs text-gray-dark'>Quantity</th>
                        <th className='py-3 w-5 font-archivo font-medium md:text-left text-right text-xs text-gray-dark'>Price</th>
                     </tr>
                  </thead>
                  <tbody className=''>
                       <ProductCart productImg={jacket1} add_icon={add_icon} remove_icon={remove_iconb}
                        trashb={trashb} title={`T-Shirt`} short_description={`Green - Large`}
                        price={`87`} price_total={`174.00`} number_product={2}
                        />
                         <ProductCart productImg={top1} add_icon={add_icon} remove_icon={remove_icon}
                        trashb={trashb} title={`Men's Dri-FIT Golf Jacket`} short_description={`Ocean - Large`}
                        price={`100`} price_total={`100.00`} number_product={1}
                        />
                         <ProductCart productImg={jordantatum} add_icon={add_icon} remove_icon={remove_iconb}
                        trashb={trashb} title={`Tatum 2 "Red Cement"`} short_description={`Size: 15`}
                        price={`125`} price_total={`250.00`} number_product={2}
                        />         
                  </tbody>
               </table>
            
            </div>
            <div className="lg:w-1/4 md:mx-auto md:w-81">
                 <OrderSummary subtotal={`524.00`} discount={0} order_total={`524.00`} />
            </div>
       </div>
    </div>
  )
}

export default CartPage

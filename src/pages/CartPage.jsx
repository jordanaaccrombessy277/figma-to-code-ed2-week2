import React, { useContext, useState, useEffect } from 'react'
import trash from '../assets/icons/trash.svg'
import trashb from '../assets/icons/trashb.svg'
import add_icon from '../assets/icons/add_icon.svg'

import { ProductCart, OrderSummary } from '../components/cart.components'
import { CartContext } from '../context'


function CartPage() {

  const {cart, removeFromCart, incrementQuantityProduct, decrementQuantityProduct, clearCart} = useContext(CartContext)
  const [subtotal, setSubtotal] = useState(0)

  const handleRemoveFromCart = (product) =>{
     removeFromCart(product);
  }

  const handleClearCart = () => {
     clearCart();
  }

  const handleincrementQuantityProduct = (product) =>{
    incrementQuantityProduct(product)
  }

  const handledecrementQuantityProduct = (product) =>{
    decrementQuantityProduct(product)
  }

  useEffect(() => {
   const calculateSubtotal = () => {
     let total = 0;
     cart.forEach((product) => {
       total += parseFloat(product.variants.edges[0].node.price.amount) * product.quantity;
     });
     setSubtotal(total);
   };

   calculateSubtotal();
 }, [cart]);

  return (
    <div>
       <div className="p-6 pt-10 pb-11 md:px-16 md:py-16 flex flex-col lg:flex-row gap-10.5">
            <div className=" lg:w-3/4 w-full">
               <div className="pb-5 flex flex-row justify-between">
                  <p className="font-chillaxsemibold md:text-2xl text-lg">Cart({cart.length})</p>
                  <span onClick={()=>handleClearCart()} className="px-2.5 cursor-pointer py-2 bg-grayopacity50 rounded-2xl flex flex-row items-center gap-1"> <img src={trash} alt="trash" /><span className='font-archivo font-medium md:text-xs text-10 text-gray-dark'>Clear Cart</span></span>
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
                      {
                        cart.length === 0 ? <p className="py-6 text-base">Vous n'avez encore ajouté aucun produit dans le panier</p> :
                        (
                           cart.map((product)=>(
                              <ProductCart key={product.id} handleRemoveFromCart={()=>handleRemoveFromCart(product)} productImg={product.featuredImage.url} add_icon={add_icon}
                              trashb={trashb} incrementQuantityProduct={()=>handleincrementQuantityProduct(product)} decrementQuantityProduct={()=>handledecrementQuantityProduct(product)} title={product.title} 
                              short_description={product.description} price={product.variants.edges[0].node.price.amount} number_product={product.quantity}
                              />
                           ))
                        )
                      }   
                  </tbody>
               </table>
            
            </div>
            <div className="lg:w-1/4 md:mx-auto md:w-81">
                 <OrderSummary subtotal={subtotal} discount={0} order_total={subtotal} />
            </div>
       </div>
    </div>
  )
}

export default CartPage

import React, { useContext, useEffect, useState } from 'react'
import { ProductCheckout, ShippingMethod, InputShippingAddress, PaymentMethod, InputLock } from '../components/checkout.components'
import card_icon from '../assets/icons/card_icon.svg'
import home_icon from '../assets/icons/home.svg'
import lock from '../assets/icons/lock.svg'
import arrowright from '../assets/icons/arrow-right.svg'
import { CartContext } from '../context'
import { priceShippingMethod } from '../constants'

function CheckoutPage() {

  const {cart} = useContext(CartContext)
  const [subtotal, setSubtotal] = useState(0)
  const [payment, setPayment] = useState(0)
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(priceShippingMethod)
  const [shippingMethodPrice, setShippingMethodPrice] = useState(0)
  

  const handleClickShippingMethod = (index) =>{ 
    setSelectedShippingMethod((prevSelectedShipping) =>
       {
        return prevSelectedShipping.map((element, i) => (
        i === index ? {...element, isSelected:true } : {...element, isSelected:false } ))
       });  

       const selectedMethod = priceShippingMethod[index];
       setShippingMethodPrice(parseFloat(selectedMethod.price));   
  }

  useEffect(() => {
    const calculateSubtotal = () => {
      let total = 0;
      cart.forEach((product) => {
        total += parseFloat(product.variants.edges[0].node.price.amount) * product.quantity;
      });

      setSubtotal(total);
      setPayment(subtotal + shippingMethodPrice)
    };
 
    calculateSubtotal();
  }, [cart, shippingMethodPrice, subtotal]);

  return (
    <div className='p-6 pt-10 pb-11 md:px-16 md:py-16 flex flex-col'>
          <p className="font-chillaxsemibold pb-5 md:text-2xl text-lg">Checkout</p>
          <div className="flex flex-col lg:flex-row lg:gap-28 gap-10">
               <div className="lg:w-1/2 w-full">
                  <p className="font-archivo py-1 font-semibold text-sm text-black">Your Order</p>
                  <p className="font-archivo font-medium text-gray-dark text-xs">By placing your order, you agree to Ballamas <span className='text-black'>Privacy</span> and <span className='text-black'>Policy</span>.</p>
                  <div className="flex flex-col gap-6 pt-4 pb-6 w-full">
                        {
                            cart.map((product)=>(
                                <ProductCheckout key={product.id} productImg={product.featuredImage.url} title={product.title} short_description={product.description} price={parseFloat(product.variants.edges[0].node.price.amount) * product.quantity}/>
                            ))
                        }
                  </div>
                  <div className="flex flex-col gap-1">
                      <p className="font-archivo font-medium text-xs">Discount Code</p>
                      <form action='' className="flex flex-row gap-2 h-11">
                           <input type="text" className='font-archivo text-xs w-2/3 h-full rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-black' name="" placeholder='Add discount code' />
                           <input type="submit" value="Apply" className='bg-black text-white rounded-3xl font-archivo font-semibold text-sm px-5 py-3' />
                      </form>
                  </div>
                  <p className="font-archivo pt-2 pb-6 font-medium text-sm text-black">New customer? Signup <span className='text-gray-dark'>to get better offer</span></p>
                  <div className="py-4 flex flex-col gap-1 border-b">
                      <div className="flex flex-row justify-between">
                          <p className="font-archivo font-medium text-sm text-gray-dark">Subtotal</p>
                          <p className="font-archivo font-medium text-sm text-gray-dark">${subtotal}</p>
                      </div>
                      <div className="flex flex-row justify-between">
                          <p className="font-archivo font-medium text-sm text-gray-dark">Discount</p>
                          <p className="font-archivo font-medium text-sm text-gray-dark">$0</p>
                      </div>
                  </div>
                  <div className="flex pt-3 flex-row justify-between">
                      <p className="font-archivo font-semibold text-sm">Order total</p>
                      <p className="font-archivo font-extrabold text-base">${subtotal}</p>
                  </div>
                  <div className="py-6">
                      <p className="font-archivo font-semibold text-sm">Shipping method</p>
                      <div className="flex flex-col py-3.5 gap-3">
                           {
                             selectedShippingMethod.map((element, index)=>(
                                <ShippingMethod key={index} isSelected={element.isSelected} handleClickShippingMethod={()=>handleClickShippingMethod(index)} 
                                title={element.title} short_description={element.description} 
                                price={element.price} />
                             ))
                           }
                      </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                    <p className="font-archivo py-1 font-semibold text-sm text-black">Payment details</p>
                    <p className="font-archivo font-medium text-gray-dark text-xs">Complete your purchase by providing your payment details.</p>
                    <p className="font-archivo pt-4 pb-3 font-semibold text-sm text-black">Shipping address</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-2">
                         <InputShippingAddress title={`First name`} placeholder={`Enter your first name`} />
                         <InputShippingAddress title={`Last name`} placeholder={`Enter your last name`} />
                         <InputShippingAddress title={`Email address`} placeholder={`Enter your email address`} />
                         <InputShippingAddress title={`Phone number`} placeholder={`Enter your phone number`} />
                         <InputShippingAddress title={`Address`} placeholder={`Enter your address`} />
                         <InputShippingAddress title={`City`} placeholder={`City`} />
                         <InputShippingAddress title={`Region`} placeholder={`Select region`} />
                         <InputShippingAddress title={`Postal code`} placeholder={`Enter your postal code`} />
                    </div>
                    <p className="font-archivo pt-6 pb-3 font-semibold text-sm text-black">Select payment method</p>
                    <div className="flex pb-5.5 flex-row gap-5 w-full">
                         <PaymentMethod icon={card_icon} borderColor={`border-black`} title={`Debit / Credit Card`} />
                         <PaymentMethod icon={home_icon} borderColor={`border-gray-light`} title={`Virtual account`} />
                    </div>
                    <InputLock title={`Card number`} lock={lock} />
                    <div className="pt-2 pb-3 flex flex-col md:flex-row gap-2">
                        <input type="text" className='font-archivo md:w-1/2 text-xs h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-black' name="" placeholder={`Expiration date (MM/YY)`} />
                        <input type="text" className='font-archivo md:w-1/2 text-xs h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-black' name="" placeholder={`Security code`} />
                    </div>
                    <div className="flex pb-5 flex-row gap-1">
                        <input className='' type="checkbox" name="" id="" />
                        <p className="w-11/12 flex justify-start font-archivo text-xs">Use shipping address as billing address</p>
                    </div>
                    <p className="font-archivo md:w-60 md:mx-auto pt-2 font-semibold text-sm">
                        <a href="/payment-confirmation" className="px-2.5 py-3 bg-black text-white rounded-3xl flex flex-row items-center gap-1.5 justify-center"> <span>Pay ${payment}</span> <img src={arrowright} alt="" /></a>
                    </p>
               </div>
          </div>
    </div>
  )
}

export default CheckoutPage

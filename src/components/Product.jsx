import React from 'react'

function Product({handleAddToCart, productImg, productPrice, productCurrencyCode, productTitle, cart}) {

  return (
    <div className="flex flex-col gap-4">
        <div className="w-full group h-auto relative">
            <img src={productImg} className='rounded-32' alt="product" />
            <p className="font-archivo absolute z-10 top-5 left-5 px-2.5 py-2 font-semibold text-xs text-black bg-white rounded-2xl">GET OFF 20%</p>
            <div className="absolute hidden rounded-32 bg-blackopacity23 top-0 w-full h-full group-hover:flex flex-wrap justify-center items-end">
                <div className="flex flex-row gap-1 pb-4">
                    <button onClick={() => handleAddToCart()} className="uppercase font-jetbrainsmono font-extrabold md:text-sm text-xs flex flex-row gap-1.5 px-4 py-2.5 bg-white rounded-3xl items-center"> <img src={cart} alt="" /> <span className='mt-0.5'>Add to cart</span></button>
                    <button className="uppercase font-jetbrainsmono font-extrabold md:text-sm text-xs px-10 py-2.5 border border-white text-white rounded-3xl">Buy now</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <p className="font-archivo font-semibold text-black md:text-3xl text-2xl">{productTitle}</p>
            <p className="font-archivo font-semibold text-gray-dark md:text-2xl text-xl">{`${productPrice} ${productCurrencyCode}`}</p>
        </div>
     </div>
  )
}

export default Product

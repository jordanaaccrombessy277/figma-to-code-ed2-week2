export const SizeProduct = ({size, isSelected, handleClickSizeProduct}) => {
    return (
        <p onClick={handleClickSizeProduct} className={`md:px-6 md:py-2.5 px-4 cursor-pointer py-2 font-archivo font-medium md:text-2xl text-lg ${isSelected ? 'bg-black text-white' : 'text-black border border-black'} rounded-3xl`}> 
               {size}
        </p>
    )
}

export const ColorProduct = ({bgColor, isSelected, handleClickColorProduct}) => {
    return (
        <span onClick={handleClickColorProduct} className={`w-7 h-7 cursor-pointer ${bgColor} ${isSelected ? 'border-2 border-gray-light' : ''} rounded-full inline-block`}></span>
    )
}

export const AddToCartButton = ({handleClickAdd}) => {
    return (
        <button onClick={()=>handleClickAdd()} className="uppercase font-archivo font-semibold text-sm w-1/2 flex justify-center md:h-14 h-10 bg-white border border-black rounded-3xl items-center"> Add to cart</button>
    )
}

export const BuyToNowButton = ({handleBuyNow}) => {
    return(
        <button onClick={()=>handleBuyNow()} className="uppercase font-archivo font-semibold text-sm w-1/2 flex justify-center md:h-14 h-10 bg-black text-white rounded-3xl items-center">Buy now</button>
    )
}
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
import { Link } from 'react-router-dom'
import remove_iconblack from '../assets/icons/remove_iconb.svg'
import remove_icongray from '../assets/icons/remove_icon.svg'

 export const ProductCart = ({productImg, handleRemoveFromCart, add_icon, trashb, title, short_description,price,number_product, incrementQuantityProduct, decrementQuantityProduct }) => {
    return (
        <tr className='border-b '>
            <td className='py-5 md:w-60 w-30'>
                <div className="flex flex-row gap-2.5">
                    <div className="md:w-72 md:h-72 w-45 h-45 rounded-lg overflow-hidden">
                        <img src={productImg} className='w-full h-full object-cover' alt="product" />
                    </div>
                    <div className="flex flex-col gap-0.5 justify-center">
                        <p className="font-archivo font-semibold md:text-sm text-10">{title}</p>
                        <p className="font-archivo font-medium md:text-xs text-10 text-gray-dark">{short_description}</p>
                        <p className="font-archivo font-semibold md:text-sm text-10">${price}</p>
                    </div>
                </div>
            </td>
            <td className='py-5 md:w-35 w-60'>                       
                <div className="flex flex-row md:gap-2 gap-1.5 justify-center">
                    <div className="flex flex-row md:p-3 justify-center py-2 md:gap-3 gap-1.5 bg-grayopacity40 rounded-3xl">
                        <img onClick={number_product === 1 ? null : ()=>decrementQuantityProduct()} className="md:w-5 md:h-5 w-4 h-4 cursor-pointer" src={number_product === 1 ? remove_icongray : remove_iconblack} alt="remove icon" />
                        <p className="font-archivo font-medium md:text-sm text-xs">{number_product}</p>
                        <img onClick={()=>incrementQuantityProduct()} className="md:w-5 md:h-5 w-4 h-4 cursor-pointer" src={add_icon} alt="add icon" />
                    </div>
                    <div className="md:p-3 p-2 bg-grayopacity40 rounded-full">
                        <img onClick={()=>handleRemoveFromCart()} className="md:w-5 md:h-5 w-4 h-4 cursor-pointer" src={trashb} alt="" />
                    </div>
                </div>
            </td>
            <td className='py-5 md:w-6 w-10 text-left font-archivo font-semibold md:text-sm text-xs'>${price * number_product}</td>
     </tr>
    )
 }

 export const OrderSummary = ({subtotal, discount, order_total}) =>{
    return (
        <div className="px-6 py-4 border rounded-2xl">
            <p className="font-archivo font-semibold text-lg">Order summary</p>
            <div className="py-4 flex flex-col gap-1 border-b">
                <div className="flex flex-row justify-between">
                    <p className="font-archivo font-medium text-sm text-gray-dark">Subtotal</p>
                    <p className="font-archivo font-medium text-sm text-gray-dark">${subtotal}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-archivo font-medium text-sm text-gray-dark">Discount</p>
                    <p className="font-archivo font-medium text-sm text-gray-dark">${discount}</p>
                </div>
            </div>
            <div className="flex pt-3 flex-row justify-between">
                <p className="font-archivo font-semibold text-sm">Order total</p>
                <p className="font-archivo font-extrabold text-base">${order_total}</p>
            </div>
            <p className="font-archivo pt-2 font-semibold text-sm">
                <Link to="/checkout" className="px-2.5 py-3 bg-black text-white rounded-3xl flex flex-row items-center gap-1 justify-center"> Checkout now</Link>
            </p>
        </div>
    )
 }
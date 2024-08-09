export const ProductCheckout = ({productImg, title, short_description,price }) => {
    return (
        <div className="flex flex-row gap-2.5 w-full items-center">
            <div className="md:w-72 md:h-72 w-45 h-45 rounded-lg overflow-hidden">
                <img src={productImg} className='w-full h-full object-cover' alt="product" />
            </div>
            <div className="flex w-10/12 flex-col gap-0.5 justify-center">
                <p className="font-archivo font-semibold md:text-sm text-10">{title}</p>
                <p className="font-archivo font-medium md:text-xs text-10 text-gray-dark">{short_description}</p>
            </div>
            <p className="font-archivo flex justify-end font-semibold md:text-sm text-10">{price}</p>
        </div>
    )
 }

 export const ShippingMethod = ({iconshipping, title, short_description,price }) => {
    return (
        <div className="flex flex-row rounded-xl w-full items-center p-3 border border-gray-light gap-5">
           
            <img src={iconshipping} className='' alt="icon shipping method" />
            
            <div className="flex w-11/12 flex-col gap-0.5 justify-center">
                <p className="font-archivo font-semibold md:text-sm text-10">{title}</p>
                <p className="font-archivo font-medium md:text-xs text-10 text-gray-dark">{short_description}</p>
            </div>
            <p className="font-archivo flex justify-end font-semibold md:text-sm text-10">${price}</p>
        </div>
    )
 }

 export const InputShippingAddress = ({title, placeholder}) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-archivo font-medium text-xs text-black">{title}</p>
            <input type="text" className='font-archivo text-xs h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-black' name="" placeholder={placeholder} />
        </div>
    )
 }

 export const InputLock = ({title, lock}) => {
    return (
        <div className="flex flex-row items-center gap-1 h-11 rounded-3xl px-3 border border-gray-dark">
            <input type="text" className='font-archivo bg-transparent w-11/12 text-xs outline-none placeholder:text-black' name="" placeholder={title} />
            <div className="w-1/12 flex justify-end"><img src={lock} className='w-5 h-5' alt="" /></div>
        </div>
    )
 }
 export const PaymentMethod = ({icon, title, borderColor}) => {
    return (
        <div className={`h-76 w-1/2 rounded-xl border ${borderColor} p-3 flex flex-col justify-center gap-2`}>
            <img src={icon} className='w-5 h-5' alt="card icon" />
            <p className="font-archivo font-medium text-xs">{title}</p>
        </div>
    )
 }
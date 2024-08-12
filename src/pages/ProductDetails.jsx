import React, { useContext, useEffect, useState } from 'react'

import Product from '../components/Product'
import { SizeProduct, ColorProduct, AddToCartButton,BuyNowButton } from '../components/product.components'
import cart from '../assets/icons/cart.svg'
import { fetchProducts, fetchProduct } from '../services/productService'
import { useParams, useNavigate} from 'react-router-dom'
import { CartContext } from '../context'



function ProductDetails() {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);
  const [isSelectedColor, setIsSelectedColor] = useState([false, false, false, false])
  const [isSelectedSize, setIsSelectedSize] = useState([false, false, false, false, false])

  const {addToCart} = useContext(CartContext)
  const navigate= useNavigate()

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/cart')
 }

  useEffect(()=>{
    
      const getProduct = async () => {
        try {  
          const getProduct = await fetchProduct(id)
          setProduct(getProduct);  
        }catch (error) {
          setError(error.message);
        }finally{
          setTimeout(()=> {
            setLoading(false);
          }, 500)
        }  
    };

     getProduct()

     const getProducts = async () => {
        try {  
          const getProducts = await fetchProducts(4)
          setProducts(getProducts);  
        }catch (error) {
          setErrorProducts(error.message);
        }finally{
          setTimeout(()=> {
            setLoadingProducts(false);
          }, 500)
        }  
    };
     
    getProducts()
  },[id])

  const handleClickColorProduct = (index) =>{ 
        setIsSelectedColor((prevSelectedColor) =>
          prevSelectedColor.map((isSelected, i) => (
            i === index ? true : false
          ))
        );
  }

  const handleClickSizeProduct = (index) =>{ 
    setIsSelectedSize((prevSelectedSize) =>
      prevSelectedSize.map((isSelected, i) => (
        i === index ? true : false
      ))
    );
}


  return (
    <>{ loading ? <p className="text-center h-screen p-6 text-base font-semibold">Loading...</p>
      : error ? <p className='text-center h-screen p-6 text-base font-semibold text-red-500'>{error}</p> :
       ( <div>
            <div className="p-6 pt-14 md:px-16 md:pt-76 flex flex-col md:flex-row gap-10.5 h-auto">
                <div className="md:w-1/2 w-full md:h-full h-auto rounded-32 overflow-hidden">
                      <img src={product.featuredImage.url} className='w-full h-full' alt="product" />
                </div>
                <div className="md:w-1/2 w-full md:h-full h-auto flex flex-col gap-7">
                      <p className="font-chillax md:text-4xl text-3xl">{product.title}</p>
                      <p className="font-archivo font-semibold md:text-4xl text-2xl">CAD $80 </p>
                      <p className="font-archivo md:text-3xl text-xl">Color:Green</p>
                      <div className="space-x-2.5">
                          <ColorProduct handleClickColorProduct={() => handleClickColorProduct(0)} isSelected={isSelectedColor[0]} bgColor={`bg-green-dark`} />
                          <ColorProduct handleClickColorProduct={() => handleClickColorProduct(1)} isSelected={isSelectedColor[1]} bgColor={`bg-purple-dark`} />
                          <ColorProduct handleClickColorProduct={() => handleClickColorProduct(2)} isSelected={isSelectedColor[2]} bgColor={`bg-ocean`} />
                          <ColorProduct handleClickColorProduct={() => handleClickColorProduct(3)} isSelected={isSelectedColor[3]} bgColor={`bg-olive`} />
                      </div>
                      <p className="font-archivo md:text-3xl text-xl">Size :</p>
                      <ul className='flex flex-wrap flex-row md:gap-3 gap-2'>
                          <SizeProduct size={`XS`} isSelected={isSelectedSize[0]} handleClickSizeProduct={() => handleClickSizeProduct(0)} />
                          <SizeProduct size={`S`} isSelected={isSelectedSize[1]} handleClickSizeProduct={() => handleClickSizeProduct(1)} />
                          <SizeProduct size={`M`} isSelected={isSelectedSize[2]} handleClickSizeProduct={() => handleClickSizeProduct(2)} />
                          <SizeProduct size={`L`} isSelected={isSelectedSize[3]} handleClickSizeProduct={() => handleClickSizeProduct(3)} />
                          <SizeProduct size={`XL`} isSelected={isSelectedSize[4]} handleClickSizeProduct={() => handleClickSizeProduct(4)} />
                      </ul>
                      <div className="flex flex-row gap-3.5">
                          <BuyNowButton handleBuyNow={()=>handleBuyNow(product)} />
                          <AddToCartButton handleClickAdd={()=>handleAddToCart(product)} />
                      </div>
                      <p className="font-chillax md:text-3xl text-2xl">Description</p>
                      <p className="text-gray-dark font-archivo md:text-lg text-sm">
                         {product.description}
                      </p>
                </div>
            </div>
            <div className="p-6 md:px-16">
              <p className="font-chillax py-2 font-semibold md:text-3xl text-2xl">You may also like</p>
              { loadingProducts ? <p className="text-center p-6 text-base font-semibold">Loading...</p>
                : errorProducts ? <p className='text-center p-6 text-base font-semibold text-red-500'>{errorProducts}</p> :
                (<div className="py-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3.5">
                        {
                           products.map((product)=>(          
                            <Product key={product.id} id={product.id} handleBuyNow={()=>handleBuyNow(product)} productImg={product.featuredImage.url} productCurrencyCode={product.variants.edges[0].node.price.currencyCode} productPrice={product.variants.edges[0].node.price.amount} productTitle={product.title} cart={cart} />          
                           ))                
                        }
                 </div>) 
              }
            </div>
      </div>)
    }</> )
}

export default ProductDetails

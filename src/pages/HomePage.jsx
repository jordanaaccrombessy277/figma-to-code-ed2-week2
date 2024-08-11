import React, { useContext, useEffect, useState } from 'react'
import { Hero } from '../components/home.components'
import arrow from '../assets/icons/arrow.svg'
import { hero } from '../constants'
import cart from '../assets/icons/cart.svg'
import Product from '../components/Product'
import classicman from '../assets/logos/CLASSIC MEN.png'
import abrahamg from '../assets/images/abraham-george-wwVtHt5Px18-unsplash.svg'
import techmen from '../assets/images/tech-mens-fleece-shacket-W5pmdx.svg'
import { fetchProducts } from '../services/productService'
import { Link } from 'react-router-dom';
import { CartContext } from '../context'

function HomePage() {

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const {addToCart} = useContext(CartContext)

   const handleAddToCart = (product) => {
      addToCart(product);
    };

   useEffect(() => {
     
      const getProducts = async () => {
        try {  
          const getProducts = await fetchProducts(6)
          setProducts(getProducts);  
        }catch (error) {
          setError(error.message);
        }finally{
           setTimeout(()=> {
            setLoading(false);
           }, 2000)
        }  
      };
       
      getProducts()
   }, [])

  return (
    <div>
        <Hero title={hero[1]} subtitle={hero[0]} subtitle_two={hero[2]} iconButton={arrow} textButton={'Start Shopping'} />
        <p className="pt-6 px-6 md:px-20 md:pt-20 font-chillaxsemibold lg:text-3xl md:text-2xl text-xl text-center">Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.</p>
        <div className="pt-16 px-6 flex flex-wrap justify-center">
            <ul className='flex flex-wrap flex-row md:gap-2.5 gap-2'>
               <li className='bg-black md:px-3.5 md:py-2.5 px-3 py-2 text-white rounded-3xl'><a href="/" className="font-archivo font-medium lg:text-xl md:text-lg text-sm">All <span className='md:text-base text-xs'>132</span></a></li>
               <li className='md:px-3.5 md:py-2.5 px-3 py-2 text-black border border-black rounded-3xl'><a href="/" className="font-archivo font-medium lg:text-xl md:text-lg text-sm">Accessories <span className='md:text-base text-xs'>13</span></a></li>
               <li className='md:px-3.5 md:py-2.5 px-3 py-2 text-black border border-black rounded-3xl'><a href="/" className="font-archivo font-medium lg:text-xl md:text-lg text-sm">Featured <span className='md:text-base text-xs'>76</span></a></li>
               <li className='md:px-3.5 md:py-2.5 px-3 py-2 text-black border border-black rounded-3xl'><a href="/" className="font-archivo font-medium lg:text-xl md:text-lg text-sm">Unisex <span className='md:text-base text-xs'>52</span></a></li>
            </ul>
        </div>
        {
          loading ? <p className="text-center p-6 text-base">Loading...</p>
          : error ? <p className='text-center p-6 text-base text-red-500'>{error}</p> : (
              <div className="px-6 md:px-150 py-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3.5">
                  {
                     products.map((product)=>(
                       <Link key={product.id} to={`/product-details/${encodeURIComponent(product.id)}`} className="">
                          <Product handleAddToCart={()=>handleAddToCart(product)} productImg={product.featuredImage.url} productCurrencyCode={product.variants.edges[0].node.price.currencyCode} productPrice={product.variants.edges[0].node.price.amount} productTitle={product.title} cart={cart} /> 
                       </Link>
                      ))                 
                  }
              </div> )
        }
        <p className="flex flex-wrap pb-1 justify-center">
             <a href="/" className="capitalize font-archivo font-semibold md:text-sm text-xs px-8 py-3 border border-black text-black rounded-3xl">View more</a>
        </p>

        <div className="px-6 md:px-150 py-9">
             <div className="">
                <p className="px-6 pt-6 md:px-20 font-chillaxsemibold lg:text-4xl md:text-3xl text-xl text-center uppercase">Our collection</p>
                <p className="font-archivo py-1 font-medium lg:text-lg text-base text-center text-gray-dark">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
                <div className="py-9 flex flex-col md:flex-row gap-4 md:h-[570px] h-auto">
                     <div className="lg:w-1/3 relative md:w-1/2 w-full md:h-full h-auto">
                           <img src={techmen} className='w-full h-full rounded-32 object-cover' alt="tech men" />
                           <div className="absolute rounded-32 bg-blackopacity15 top-0 w-full h-full flex flex-wrap justify-center items-end">
                              <div className="flex flex-row gap-1 pb-4">
                                  <a href="/" className="uppercase font-archivo font-semibold md:text-sm text-xs flex flex-row gap-1.5 px-4 py-3 bg-white rounded-3xl items-center"> Learn more <img src={arrow} alt="" /> </a>
                              </div>
                           </div>
                     </div>
                     <div className="lg:w-2/3 relative md:w-1/2 w-full md:h-full h-auto">
                           <img src={abrahamg} className='w-full h-full rounded-32 object-cover' alt="abraham george" />
                           <div className="absolute rounded-32 bg-blackopacity15 top-0 w-full h-full flex flex-wrap justify-center items-center">
                              <div className="flex flex-col gap-1 p-8">
                                  <img src={classicman} alt="classicman" />
                                  <p className="font-archivo text-center text-lg text-white">We’re changing the way things get made</p>
                              </div>
                           </div>
                     </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default HomePage

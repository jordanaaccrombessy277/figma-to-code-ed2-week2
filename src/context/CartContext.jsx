import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) =>{
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
              return prevCart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              return [...prevCart, { ...product, quantity: 1 }];
            }
          });
    }

    const incrementQuantityProduct = (product) => {
         setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
         })
    }

    const decrementQuantityProduct = (product) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
         })
    }

    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
    };

    const clearCart = () => {
        setCart([]);
    };
    
    return(
       <CartContext.Provider value={{cart, addToCart, incrementQuantityProduct, removeFromCart, decrementQuantityProduct, clearCart}}>
           {children}
       </CartContext.Provider>
    )
}
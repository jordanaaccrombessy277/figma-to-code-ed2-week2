export const fetchProducts = async (numberProducts) => {
    try {
      
      const request = await fetch(`https://mock.shop/api?query=%7B%20products(first%3A%20${numberProducts})%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D`)
      if (!request.ok) {
        throw new Error('La requête de récupération des produits a échoué');
      }

      const data = await request.json();
      const productsExtract = data.data.products.edges.map((edge) => edge.node);
      return productsExtract;
     
    }catch (error) {
        console.error('Fetch error produits:', error);
        throw error;
      } 
  };

  export const fetchProduct = async () => {
    try {
        const request = await fetch('https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F7982905098262%22)%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20%7D%7D')
        if (!request.ok){
            throw new Error('La requête de récupération du produit a échoué');
        }
        const data = await request.json();
        const productsExtract = data.product;
        return productsExtract;
   
    }catch (error) {
      console.error('Fetch error produit:', error);
      throw error;
    } 
  }

  /**const getProduct = async () =>{try {  
      const getProduct = await fetchProduct()
      setProduct(getProduct);  
      console.log(product)
    }catch (error) {
      setError(error.message);
      console.log('Une erreur pour product details', error)
    }finally{
       console.log('Requete terminé pour product details.')
       setTimeout(()=> {
        setLoading(false);
       }, 3000)
    }
 }

 getProduct() 
*/ 
  
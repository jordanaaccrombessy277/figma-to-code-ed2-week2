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
        console.error('Fetch error product:', error);
        throw error;
      } 
  };

 export const fetchProduct = async (id) =>{

    try {
      const request = await fetch(`https://mock.shop/api?query={product(id:%20%22${id}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`)
      if (!request.ok){
          throw new Error('La requête de récupération du produit a échoué');
      }
      const data = await request.json();
      return data.data.product;  
 
    }catch (error) {
      console.error('Fetch error product:', error);
      throw error;
    }
}




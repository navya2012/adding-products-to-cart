import axios  from 'axios';
export const getAllProducts = () => 
{
    return async dispatch => 
    {
        const url = "https://fakestoreapi.com/products";
        await axios.get(url).then(res => dispatch({type:"GET_ALL_PRODUCTS",payload:res.data}));
    }
}


export const addToCart = (productId) => 
{
    alert("Product added to cart");
    return {
       type:"ADD_TO_CART",
       payload:productId
    }
}

export const removeFromCart = (productInd) => 
{
    return {
       type:"REMOVE_FROM_CART",
       payload:productInd
    }
}

export const addNewProduct = (product) =>
{
    return async dispatch =>
    {
        const url = "https://fakestoreapi.com/products/i";
        await axios.post(url,product).
        then(res =>{return alert("new product inserted",res.data),console.log("new prod",res), dispatch({type:"ADD_NEW_PRODUCT",payload:res.data})});
    }
}

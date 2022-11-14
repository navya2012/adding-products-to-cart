import React, { useEffect } from 'react'
import { addToCart, getAllProducts } from '../Redux/Actions'
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const products = state.products;
  console.log(state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])


  return (
    <div class="container">

      <div className='row'>
        <div className='col'>
          {/* <button onClick={()=>dispatch(getAllProducts())}>Get All Products</button> */}
          <table className='table'>
            <thead>
              <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Image</td>
              </tr>

            </thead>
            <tbody>
              {
                products && products.map(product => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td><img src={product.image} alt="product image" height="40px" width="40px" /></td>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { removeFromCart } from '../Redux/Actions'
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log("state", state);
  const products = state.products;
  console.log("Products", products)
  const cart = state.cart;

  return (
    <div class="container">

      <div className='row'>
        <div className='col'>
          <h3>Cart</h3>
          <table className='table'>
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Price</td>
                <td>Product Id</td>
              </tr>
            </thead>
            <tbody>
              {
                cart && cart.map((id, i) =>
                  <tr key={id}>
                    <td>{i}</td>
                    <td>{products[id - 1].title}</td>
                    <td>{products[id - 1].price}</td>
                    <td>{products[id - 1].id}</td>
                    <td><button className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromCart(i))}>Remove</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

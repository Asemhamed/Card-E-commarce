import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteFromCart } from '../rtk/slice/CartSlice';


const Cart = () => {
    const cart = useSelector((state)=> state.Cart)
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc,product)=>{
        return acc = acc+ product.price*product.quantity;
    },0)
    return (
      <Container className="py-5">
        <h2 className="py-5">Welcome To Cart</h2>
        <p>Total Price:{totalPrice} $</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>
                  <img src={c.image} style={{ height: "50px" }} />
                </td>
                <td>{c.price} $</td>
                <td>{c.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteFromCart(c));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(clearCart(cart));
          }}
        >
          Clear
        </Button>
      </Container>
    );
}

export default Cart
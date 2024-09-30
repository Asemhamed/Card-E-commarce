import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slice/ProductSlice';
import { addToCart } from '../rtk/slice/CartSlice';



const Product = () => {
    const products = useSelector((state)=>state.Products);
    const dispatch = useDispatch();



    useEffect(() =>{
      dispatch(fetchProducts())
    },[])
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price} $</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Card
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product
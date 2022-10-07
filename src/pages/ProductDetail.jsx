import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const newProduct = useSelector((state) => state.producstSlice);
  const newdetail = newProduct.find((product) => product.id === +id);
  const releatedProduct = newProduct.filter(
    (product) => product.category.id === newdetail.category.id
  );
  const [rate,setRate]=useState(0)

  
  return (
    <Row>
      
      <Col className="detailProduct">
      <Col>
        <Button type="button" onClick={()=>setRate(rate-1)}>-</Button>
       {""} {rate} {""}
        <Button type="button" onClick={()=>setRate(rate+1)}>+</Button>
        {" "}
        <Button>add</Button>
      </Col>
        <h1>{newdetail?.title}</h1>
        <div className="containerimg">
          <img src={newdetail?.productImgs[0]} alt="" />

          {newdetail?.description}
        </div>
      </Col>
      <Col lg={3}>
        <ListGroup>
          <ul>
            {releatedProduct.map((product) => (
              <ListGroup.Item key={product.title}>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                <img
                  src={product?.productImgs[1]}
                  alt="img"
                  className="img-fluid"
                />
              </ListGroup.Item>
            ))}
          </ul>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;

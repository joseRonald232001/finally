import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Row, Col, ListGroup, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [newFiltered, setNewFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const listProduct = useSelector((state) => state.producstSlice);

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    setNewFiltered(listProduct);
  }, [listProduct]);

  const filterForCategory = (categoryid) => {
    const filtered = listProduct.filter(
      (product) => product.category.id === categoryid
    );
    setNewFiltered(filtered);
  };

  const searchProduct = () => {
    const filtered = listProduct.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setNewFiltered(filtered);
  };

  return (
    <Row>
    
      <Col lg={3}>
        <ListGroup>
          {categories?.map((category) => (
            <ListGroup.Item
              key={category.id}
              onClick={() => filterForCategory(category.id)}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="search products"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Button variant="outline-secondary" onClick={searchProduct}>
            Button
          </Button>
        </InputGroup>

        <Row xs={1} md={2} xl={3} className="g-4">
        {newFiltered?.map((product) => (
        <Col key={product.id}>
          <Card  onClick={() => navigate(`/product/${product.id}`)} >
            <Card.Img variant="top" src={product?.productImgs[2]}  className="img"/>
            <Card.Body>
              <Card.Title>{product.title} </Card.Title>

         
              <Card.Text>
             
              </Card.Text>
           
            </Card.Body>
           
          </Card>
        </Col>
      ))}
    </Row>
        

      </Col>
    </Row>
  );
};

export default Home;

import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const navigate = useNavigate();
  const distpach = useDispatch();
  const purchases = useSelector((state) => state.purchasesSlice);
  useEffect(() => {
    distpach(getPurchasesThunk());
  }, []);

  return (
    <div>
      <ListGroup>
        {purchases.data?.purchases.map((product) => (
          <ListGroup.Item key={product.id}>
            {product.cart?.products.map((product) => (
              <b key={product.id}
              onClick={()=>navigate(`/product/${product.id}`)}>
                {
                   <ul>
                    <b>{product.title}</b> 
                    <p>  {product.price} $</p> 
                   </ul>
                }

              </b>
            ))}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Purchases;

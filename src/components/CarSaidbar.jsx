import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getCarThunk } from '../store/slices/cart.slice';

const CarSaidbar = ({show,handleClose}) => {

const dispatch =useDispatch();
useEffect(()=>{
    dispatch(getCarThunk())
},[])


    return (
        <Offcanvas show={show} onHide={handleClose}  placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>  <b>car shop</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default CarSaidbar;
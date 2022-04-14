import React, {useContext} from 'react'
import './Product.css'
import prodContext from '../../context/notes/prodContext' 
import {BiRupee} from "react-icons/bi"
function Product({title, rating, price, image}) {
    const context = useContext(prodContext);
    const {bucketProd} = context;

    const width = window.screen.width;
    if (width> 650){
        return (
            <div className="product">
              <div className="product_info">
                  <p>{title}</p>
                  <p className="product_price">
                      <BiRupee/>
                      <strong>{price}</strong>
                  </p>
                  <div className="product_rating">
                      {Array(rating).fill().map((_, i)=>{
                          return <p key={i}>⭐</p>
                      })}
                  </div>
              </div>
              <img src={image} alt="book"></img>
              <button onClick={()=>{bucketProd(title, image, price, rating )}}>Add to bucket</button>
            </div>
        )
    }
    else{
        return (
            <div className="mobile-product">
              <div className="mobile-product_info">
                  <p>{title}</p>
                  <p className="mobile-product_price">
                      <BiRupee/>
                      <strong>{price}</strong>
                  </p>
                  <div className="mobile-product_rating">
                      {Array(rating).fill().map((_, i)=>{
                          return <p key={i}>⭐</p>
                      })}
                  </div>
                  <button onClick={()=>{bucketProd(title, image, price, rating )}}>Add to bucket</button>
              </div>
              <img src={image} alt="book"></img>
            </div>
        )
    }
    
}

export default Product

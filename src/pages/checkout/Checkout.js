import React, {useContext} from 'react';
import amazonBanner from "../../assets/amazonBanner.jpg"
import Subtotal from "../../components/subtotal/Subtotal.js"
import './Checkout.css';
import prodContext from '../../context/notes/prodContext';
import UserProd from '../../components/products/UserProd';
function Checkout() {
    const context = useContext(prodContext);
    const {bucket, totalPrice} = context;
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img 
                className='checkout_ad'
                src={amazonBanner}
                alt="amazonbanner"
                >
                </img>
                <div className="checkout_title">
                <h2>Your Shopping  Basket</h2>
                </div>
                <div className='checkout_item'>
                    {bucket.map((item, index)=>{
                       return <UserProd key={index} item={item} />
                    })}
                </div>
            </div>
            <div className="checkout_right">
            <Subtotal price={totalPrice} totalItems={bucket.length}/>
            </div>
        </div>
    )
}

export default Checkout;

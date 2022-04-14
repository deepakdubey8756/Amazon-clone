import React, {useContext} from 'react'
import './UserProd.css'
import prodContext from '../../context/notes/prodContext';
function UserProd(props) {
    const context = useContext(prodContext);
    const {removeProd} = context;
    const {title, image, price, rating, category} = props.item
    return (
        <div className="userProd">
           <img src={image} alt={title}/>
           <div className="userProd_details">
               <div className="userProd_title_category">
               <strong className="userProd_title">{title.slice(0, 40)}...</strong>
               </div>
               <div className="userProd_middle">
                  {Array(rating).fill().map((_, i)=>{
                      return <p key={i}>⭐</p>
                  })}
                  <p className='prod_category'>{category.slice(0, 18)}..</p>
              </div>
              <div className="userProd_bottom">
                    <p className="prod_price">$ {price}/-</p>
                    <button className="removeButton" onClick={()=>{removeProd(title, price)}}> Remove </button>
              </div>
           </div>
        </div>
    )
}

export default UserProd;

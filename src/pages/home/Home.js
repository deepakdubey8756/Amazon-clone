import React, {useState, useContext, useEffect} from "react";
import './Home.css'
// import OfferProduct from '../products/OfferProduct';
import prime from "../../assets/amazonPrime.jpg";
import Product from "../../components/products/Product";
import allItem from "../../components/items/allItem";
import prodContext from "../../context/notes/prodContext";
import mobiles from "../../components/items/mobile";
import bestSeller from "../../components/items/bestSellers";
import books from "../../components/items/books"
import Electronics from "../../components/items/electronics";
import Fashion from "../../components/items/fashion";
import homeKitchen from "../../components/items/homeKitchen";

function Home() {
  const [item, setitem] = useState(allItem)
  let context = useContext(prodContext);
  const {cat} = context;


  useEffect(() => {
    if(cat === "All"){
      setitem(allItem);
    }
    else if (cat === "Mobiles"){
      setitem(mobiles);
    }
    else if (cat === "Electronics"){
      setitem(Electronics);
    }
    else if (cat === "Fashion"){
      setitem(Fashion);
    }
    else if (cat === "New Release"){
      setitem(bestSeller);
    }
    else if (cat === "Home & Kitchen"){
      setitem(homeKitchen);
    }
    else if (cat === "Books"){
      setitem(books);
    }
    else if (cat === "Today's Deal"){
      setitem(bestSeller);
    }
    else if (cat === "Best Sellers"){
      setitem(bestSeller);
    }
  }, [cat])
  const width = window.screen.width;
  return (
    <div className="home">
      <div className="home_container">
          <img className="home_image" src={prime} alt="primeVideo"></img>
      </div>
      <div className="home_row">
      <Product title={item[0].title} image={item[0].image} price={item[0].price} rating={item[0].rating}/>
      <Product title={item[1].title} image={item[1].image} price={item[1].price} rating={item[1].rating}/>
      </div>
     {
       width > 650 &&  <div className="home_row">
       <Product title={item[2].title} image={item[2].image} price={item[2].price} rating={item[2].rating}/>
       <Product title={item[3].title} image={item[3].image} price={item[3].price} rating={item[3].rating}/>
       <Product title={item[4].title} image={item[4].image} price={item[4].price} rating={item[4].rating}/>
      </div>
     }
     {
       width > 650 ?
       item.slice(4).map((items, index) => {
         return <div className="single-item" key={index}>
           <Product title={items.title} image={items.image} price={items.price} rating={items.rating}/>
          </div>
       }):
       item.slice(1).map((items, index) => {
        return <div className="single-item" key={index}>
          <Product title={items.title} image={items.image} price={items.price} rating={items.rating}/>
         </div>
      })
     }
  </div>
  )
}

export default Home;

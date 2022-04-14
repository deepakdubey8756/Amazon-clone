// creating context api
import { useState } from "react";
import prodContext from "./prodContext";
const ProdState = (props) => {

  // creating bucket state to store user bucket products
  const [bucket, setBucket] = useState([]);
  const [isGift, setIsGift] = useState(0);
  const [totalPrice, setTotalPrice]=useState(0)

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cat, setcat] = useState("All");

  // function to remove product from cart
  const bucketProd = (title, image, price, rating) => {
      const prod = {
          id: "12222",
          title: title,
          image: image,
          price: price,
          rating: rating,
          category: "all",
        }
      
        // adding price when product will add to the bucket
      setTotalPrice(parseInt(totalPrice) + parseInt(price));
        // adding product to bucket lists
        setBucket(bucket.concat(prod));
      };

  
    // function to remove items from cart
  const removeProd = (title, price) => {
    console.log("Removing items");
    // removing price when product will remove from bucket
    setTotalPrice(parseInt(totalPrice)- parseInt(price))
    const newBucket = bucket.filter((product) => {
      return product.title !== title;
    });
    setBucket(newBucket);
      };


  return (
    <prodContext.Provider
      value={{bucketProd, cat, setcat, bucket, removeProd, isGift, totalPrice, isSignedIn, setIsSignedIn}}
    >
      {props.children}
    </prodContext.Provider>
  );
};

export default ProdState;

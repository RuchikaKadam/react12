import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([
    {
      img: "https://www.placehold.co/150x200",
      title: "Samsung Galaxy S8",
      price: 399,
      quantity: 1,
    },
    {
      img: "https://www.placehold.co/150x200",
      title: "Google Pixel",
      price: 459,
      quantity: 1,
    },
    {
      img: "https://www.placehold.co/150x200",
      title: "Xiomi Redmi Note 2",
      price: 800,
      quantity: 1,
    },
    {
      img: "https://www.placehold.co/150x200",
      title: "Samsung Galaxy S7",
      price: 690,
      quantity: 1,
    },
  ]);
  const [total, setTotal] = useState(0);

  function increaseQuantity(index) {
    let temp = [...products];
    temp[index].quantity += 1;
    setProducts(temp);
  }

  function decreaseQuantity(index) {
    let temp = [...products];
    if(temp[index].quantity > 1){
      temp[index].quantity -= 1;
      setProducts(temp);
    } else {
        removeProduct(index);
    }
    
  }

  function removeProduct(index) {
    let temp = [...products];
    temp.splice(index,1);
    setProducts(temp);


    //with filter
    /* 
    let temp = products.filter((item, i) => {
      if(i != index) return item;
)}
    */
  }
  useEffect(() => {
    let sum = 0;
    products.forEach((item, index) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [products]);

  return (
    <>
      <Navbar />

{ products.length > 0 ? 
    <div className="prod-cont">
{products.map((item, index) => {
        return (
          <ProductCard
          key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            inc={increaseQuantity}
            dec={decreaseQuantity}
            index={index}
            removeProduct={removeProduct}
          />
        );
      })}
<div className="total">
<p >Total Price: {total}</p>
<button onClick={() => setProducts([])}>Clear cart</button>
</div>
      
    </div> 
    :
    <p className="note">Your Cart is Currently Empty!</p>
}
      
    </>
  );
}

export default App;

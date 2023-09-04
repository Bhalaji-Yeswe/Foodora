import { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  let [showCart,setShowCart] = useState(false);
  function showCartHandler(){
    setShowCart(true);
  }
  function hideCartHandler(){
    setShowCart(false);
  }
  return (
    <CartProvider>
      <Header onHandleCart={showCartHandler}></Header>
      {showCart && <Cart onHandleCart={hideCartHandler}/>}
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;

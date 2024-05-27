import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

interface RootState {
  cart: CartItem[];
}

interface CartItem {
  id: string;
  price: number;
}

const Cart: React.FC = () => {

  const {cart} = useSelector( (state: RootState) => state);
  console.log("Printing Cart: ", cart)

  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect( () => {
    // if (cart) {
    //   const total = cart.reduce((acc: number, curr: CartItem) => acc + curr.price, 0);
    //   setTotalAmount(total);
    // }
    setTotalAmount(cart.reduce( (acc: number, curr: CartItem) => acc + curr.price, 0))
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? 
        (
          <div>

            <div>
              {
                cart.map( (item: CartItem, index: number) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>

            <div>
              <div>
                <div>Your Cart</div>
                <div>Summery</div>
                <p>
                  Total Items: {cart.length}
                </p>
              </div>

              <div>
                <p>
                  Total Amount: ${totalAmount}
                </p>
                <button>
                  CkeckOut Now
                </button>
              </div>
            </div>

          </div>
        ) 
        : 
          (<div>
            <h1>Cart is Empty!</h1>
            <Link to={'/'}>
              <button>
                Shop Now
              </button>
            </Link>
          </div>)
      }

    </div>
  );
};

export default Cart;

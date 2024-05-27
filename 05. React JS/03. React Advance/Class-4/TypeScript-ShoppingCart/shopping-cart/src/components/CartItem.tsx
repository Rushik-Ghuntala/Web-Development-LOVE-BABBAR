import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

interface CartItemProps {
  item: {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
  };
  itemIndex: number;
}

const CartItem = ({item, itemIndex}:CartItemProps) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id) );
    toast.success("Item Removed")
  }



  return (
    <div>
      <div>

        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div
            onClick={removeFromCart}
          >
            <FcDeleteDatabase/>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CartItem;

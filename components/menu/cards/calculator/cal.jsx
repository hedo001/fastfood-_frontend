import stl from "./cal.module.scss";
import { Plus } from "../../../icons/plus";
import { Minus } from "../../../icons/minus";
import { useDispatch } from "react-redux";
import { updateCart } from "@/components/store/slices/products";

export const Calculator = ({ num, setNum, productid }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(
      updateCart({
        action: "+",
        productId: productid,
      })
    );
  };
  const decrement = () => {
    dispatch(
      updateCart({
        action: "-",
        productId: productid,
      })
    );
  };
  return (
    <div className={stl.calculator}>
      <button className={stl.addbutton} onClick={decrement}>
        <Minus />
      </button>
      <span>{num}</span>
      <button className={stl.addbutton} onClick={increment}>
        <Plus />
      </button>
    </div>
  );
};

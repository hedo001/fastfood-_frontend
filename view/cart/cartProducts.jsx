import { Calculator } from "@/components/menu/cards/calculator/cal";
import Image from "next/image";
import stl from "./cart.module.scss";

export const CartProducts = ({ products }) => {
  return (
    <>
      {products?.map((el, i) => (
        <li className={stl.product} key={i}>
          <div className={stl.img}>
            <Image src={el.data?.img} alt={el.data?.food_name} />
          </div>
          <div className={stl.content}>
            <div>
              <h2>{el.data?.name}</h2>
              {el.properties.map((item) => (
                <p> {item.name}</p>
              ))}
            </div>
            <div className={stl.price}>
              <Calculator productid={el.productId} num={el.quantity} />
              <span>{el.data?.price.toLocaleString("cs-CZ")} sum</span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

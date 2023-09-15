"use client";
import { useSelector } from "react-redux";
import stl from "./cart.module.scss";
import { useEffect, useState } from "react";
import { CartProducts } from "./cartProducts";

const Mycart = () => {
  const [num, setNum] = useState(0);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    let totalSum = products?.reduce(
      (total, number) => total + number.price * number.quantity,
      0
    );
    setNum(totalSum);
    !products?.length && setNum(0);
  }, [products]);
  let total = (+num + 3000).toLocaleString("cs-CZ");
  let delivery = "3000";
  return (
    <section className={stl.cart}>
      <div className={stl.header}>
        <h1>The Cart</h1>
        <div className={stl.productCont}>
          <ul className={stl.productList}>
            <CartProducts products={products} />
          </ul>
          <div className={stl.total}>
            <h2>Total</h2>
            <p>
              Products <span> + {num.toLocaleString("cs-CZ")} sum</span>
            </p>
            <p>
              Delivery <span> + {delivery.toLocaleString("cs-CZ")} sum</span>
            </p>
            <hr />
            <p className={stl.pay}>
              To pay <span> + {`${total}`} sum</span>
            </p>

            <button className={stl.button}>Go checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mycart;

"use client";
import { useSelector } from "react-redux";
import stl from "./cart.module.scss";
import { useEffect, useState } from "react";
import { CartProducts } from "./cartProducts";

const Mycart = () => {
  const [num, setNum] = useState(0);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    products?.map((el) => setNum((prev) => prev + el.price));
  }, []);
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
            <hr />
            <p className={stl.pay}>
              To pay <span> + {num.toLocaleString("cs-CZ")} sum</span>
            </p>
            <button className={stl.button}>Go checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mycart;

"use client";
import Link from "next/link";
import { Logo } from "../icons/logo";
import { Location } from "../icons/location";
import stl from "./headerstyle.module.scss";
import Selector from "./selector/selector";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { ProfileImg } from "../icons/profile";
const Header = () => {
  const totalPurchase = useSelector((store) => store.cart.products);

  return (
    <header className={stl.header}>
      <div className={stl.cont}>
        <nav className={stl.navbar}>
          <Link href="/" className={stl.logo}>
            <Logo />
          </Link>
          <ul className={stl.list}>
            <li className={stl.listItem}>
              <Link href="/">Меню</Link>
            </li>
            <li className={stl.listItem}>
              <Link href="/">Филиалы</Link>
            </li>
            <li className={stl.listItem}>
              <Link href="/">О нас</Link>
            </li>
            <li className={stl.listItem}>
              <Link href="/">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className={stl.headerLeft}>
          <div className={stl.location}>
            <Link href="/" className={stl.locationIcon}>
              <Location />
            </Link>
            <p className={stl.links}>
              Достафка или Заказ с собой <br />
              <Link href="/">Выберите способ получения</Link>
            </p>
          </div>
          <div className={stl.headerLeftButtons}>
            <Link href="/cart" className={stl.cartIcon}>
              {totalPurchase?.length ? (
                <span className={stl.cartTotal}>{totalPurchase.length}</span>
              ) : null}
              <CartIcon />
            </Link>

            <Selector />
            <button className={stl.enterBtn}>
              <Link href="/profile">
                <ProfileImg />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { Logo } from "../icons/logo";
import { Location } from "../icons/location";
import stl from "./headerstyle.module.scss";
import Selector from "./selector/selector";
import { CartIcon } from "../icons";

const Header = () => {
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
              <Link href="/branches">Филиалы</Link>
            </li>
            <li className={stl.listItem}>
              <Link href="/about">О нас</Link>
            </li>
            <li className={stl.listItem}>
              <Link href="/contacts">Контакты</Link>
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
              <CartIcon />
            </Link>

            <Selector />
            <button className={stl.enterBtn}>
              <Link href="/">Войти</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

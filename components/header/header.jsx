import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../view/images/svg/LOGO.svg";
import location from "./icons/location.svg";
import cart from "./icons/cart.svg";
import stl from "./headerstyle.module.scss";
import Selector from "./selector/selector";
const Header = () => {
  return (
    <header className={stl.header}>
      <div className={stl.cont}>
        <nav className={stl.navbar}>
          <Link href="/" className={stl.logo}>
            <Image src={logo} height={20} width={65} alt="logo" />
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
              <Image src={location} alt="location" height={18} width={18} />
            </Link>
            <p className={stl.links}>
              Достафка или Заказ с собой <br />
              <Link href="/">Выберите способ получения</Link>
            </p>
          </div>
          <div className={stl.headerLeftButtons}>
            <Link href="/" className={stl.cartIcon}>
              <Image src={cart} alt="shop cart" height={18} width={18} />
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

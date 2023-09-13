import Link from "next/link";
import { Logo } from "../icons/logo";
import { Inst } from "../icons/inst";
import { Facebook } from "../icons/facebook";
import { Teleg } from "../icons/teleg";
import "./footerstyle.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cont">
        <div className="footer__header">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="footer__list">
            <li>
              <Link href="/branches">Филиалы</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__content">
            <p>©Udevs 2020 - 2022 All rights reserved</p>
            <ul className="footer__bottom__list">
              <li>
                <a href="#">
                  <Inst />
                </a>
              </li>
              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <Teleg />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

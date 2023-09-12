import logo from "../../view/images/svg/LOGO.svg";
import Image from "next/image";
import instagram from "./icons/instagram.svg";
import telegram from "./icons/telegram.svg";
import facebook from "./icons/facebook.svg";
import Link from "next/link";
import "./footerstyle.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cont">
        <div className="footer__header">
          <Link href="/">
            <Image src={logo} alt="logo" />
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
                  <Image
                    width={24}
                    height={24}
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image width={24} height={24} src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image width={24} height={24} src={telegram} alt="telegram" />
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

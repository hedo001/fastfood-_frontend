import stl from "./menustyle.module.scss";
import Cards from "./cards/cards";
import Link from "next/link";
import Others from "./othersModal/others";
import { useState } from "react";
import AlertModal from "../alert/alertModal";
const Menu = () => {
  let linksList = [
    {
      title: "Пицца",
      href: "/",
    },
    {
      title: "Паста",
      href: "/",
    },
    {
      title: "Закуски",
      href: "/",
    },
    {
      title: "Синнамон-роллы",
      href: "/",
    },
    {
      title: "Напитки",
      href: "/",
    },
    {
      title: "Гарниры",
      href: "/",
    },
    {
      title: "Соус",
      href: "/",
    },
    {
      title: "Салаты",
      href: "/",
    },
  ];
  const [alert, setAlert] = useState(false);
  return (
    <section className={stl.menu}>
      <div className={stl.cont}>
        <div className={stl.menu__navbar}>
          <ul className={stl.menu__list}>
            {linksList.map((el) => (
              <li key={el.title}>
                <Link href={el.href}>{el.title}</Link>
              </li>
            ))}
            <li>
              <Others />
            </li>
          </ul>
        </div>
        {alert && <AlertModal status={"add"} setAlert={setAlert} />}
        <Cards setAlert={setAlert} />
      </div>
    </section>
  );
};

export default Menu;

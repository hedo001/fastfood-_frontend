import { data } from "./data";
import stl from "../menustyle.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import { MyModal } from "./cardmodal/modal";

const Cards = ({ setAlert }) => {
  const [modal, setModal] = useState(false);
  const [mydata, setMyData] = useState(false);

  const ref = useRef();
  return (
    <>
      {data.map((el, i) => (
        <div className={stl.menu__food}>
          <h2 id={stl.lavash}>{el.title}</h2>
          <ul className={stl.menu__food__list}>
            {el.products.map((info, i) => (
              <li
                ref={ref}
                onClick={() => {
                  if (info.available) {
                    setModal(true);
                    setMyData(info);
                  }
                }}
                key={i}
                className={
                  info.available
                    ? stl.menu__food__list_item
                    : `${stl.menu__food__list_item} ${stl.none}`
                }
              >
                {info.discount && (
                  <span className={stl.discount}> -{info.discount} %</span>
                )}
                <Image src={info.img} alt={info.food_type} />
                <div className={stl.menu__food__list_content}>
                  <h3>{info.title}</h3>
                  <p>{info.description}</p>
                  <div className={stl.menu__food__list__price}>
                    <p>
                      {info.price.toLocaleString("cs-CZ")} <span>сум</span>
                    </p>

                    <button className={stl.cardButton}>
                      {info.available ? "Добавить" : "Недоступно"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {modal && (
        <MyModal
          setModal={setModal}
          data={mydata}
          open={modal}
          setAlert={setAlert}
        />
      )}
    </>
  );
};

export default Cards;

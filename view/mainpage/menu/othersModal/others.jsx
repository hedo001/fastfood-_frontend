import { useEffect, useRef, useState } from "react";
import stl from "./others.module.scss";
import Image from "next/image";
import selectedimg from "../../../images/svg/selected.svg";

const Others = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  let ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    });
  });

  return (
    <div ref={ref} className={stl.others}>
      <div onClick={() => setOpen(!open)} className={stl.header}>
        <p>Еще</p>
        {/* <Image
          className={stl.selectorArrow}
          height={20}
          width={20}
          src={arrow}
          alt="arrow"
        /> */}
      </div>

      {open && (
        <div className={stl.othersOpt}>
          <div
            onClick={() => setSelected("uz")}
            className={
              selected == "uz" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Лаваш
            {selected === "uz" && (
              <Image
                className={stl.selectedarr}
                width={32}
                height={32}
                alt="selected"
                src={selectedimg}
              />
            )}
          </div>
          <div
            onClick={() => setSelected("rus")}
            className={
              selected == "rus" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Бургеры
            {selected === "rus" && (
              <Image
                className={stl.selectedarr}
                width={32}
                height={32}
                alt="selected"
                src={selectedimg}
              />
            )}
          </div>
          <div
            onClick={() => setSelected("eng")}
            className={
              selected == "eng" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Клаб-Сэндвич
            {selected === "eng" && (
              <Image
                className={stl.selectedarr}
                width={32}
                height={32}
                alt="selected"
                src={selectedimg}
              />
            )}
          </div>
          <div
            onClick={() => setSelected("shour")}
            className={
              selected == "shour" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Шаурма
            {selected === "shour" && (
              <Image
                className={stl.selectedarr}
                width={32}
                height={32}
                alt="selected"
                src={selectedimg}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Others;

import { useEffect, useRef, useState } from "react";
import stl from "./others.module.scss";
import Image from "next/image";
import { Selectarrow } from "../../icons/selectarrow";
import { Selected } from "../../icons/selected";

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
            {selected === "uz" && <Selected />}
          </div>
          <div
            onClick={() => setSelected("rus")}
            className={
              selected == "rus" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Бургеры
            {selected === "rus" && <Selected />}
          </div>
          <div
            onClick={() => setSelected("eng")}
            className={
              selected == "eng" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Клаб-Сэндвич
            {selected === "eng" && <Selected />}
          </div>
          <div
            onClick={() => setSelected("shour")}
            className={
              selected == "shour" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Шаурма
            {selected === "shour" && <Selected />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Others;

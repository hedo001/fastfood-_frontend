"use client";
import stl from "./selector.module.scss";
import { Selectarrow } from "../../icons/selectarrow";
import { Selected } from "../../icons/selected";
import { Rus } from "../../icons/rus";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Selector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  let ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    });
  });

  return (
    <div ref={ref} className={stl.selector}>
      <div onClick={() => setOpen(!open)} className={stl.header}>
        <Rus />
        <Selectarrow />
      </div>

      {open && (
        <div className={stl.selectorOpt}>
          <div
            onClick={() => setSelected("uz")}
            className={
              selected == "uz" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            O'zbekcha
            {selected === "uz" && <Selected />}
          </div>
          <div
            onClick={() => setSelected("rus")}
            className={
              selected == "rus" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            Русский
            {selected === "rus" && <Selected />}
          </div>
          <div
            onClick={() => setSelected("eng")}
            className={
              selected == "eng" ? `${stl.selected} ${stl.option}` : stl.option
            }
          >
            English
            {selected === "eng" && <Selected />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;

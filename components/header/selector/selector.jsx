"use client";
import stl from "./selector.module.scss";
import rus from "../icons/rus.svg";
import arrow from "../icons/selectarrow.svg";
import selectedimg from "../icons/selected.svg";
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
        <Image className={stl.russianIcon} src={rus} alt="flag" />
        <Image
          className={stl.selectorArrow}
          height={20}
          width={20}
          src={arrow}
          alt="arrow"
        />
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
            Русский
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
            English
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
        </div>
      )}
    </div>
  );
};

export default Selector;

"use client";
import React from "react";
import stl from "./main.module.scss";
import Menu from "../../components/menu/menu";

import { MySlider } from "../../components/menu/slider/slider";

const Main = () => {
  return (
    <main className={stl.main}>
      <div className={stl.cont}>
        <MySlider />
      </div>
      <Menu />
    </main>
  );
};

export default Main;

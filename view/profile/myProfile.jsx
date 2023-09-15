"use client";
import { useState } from "react";
import stl from "./myProfile.module.scss";
import { ProfileInfo } from "../../components/profileInfo/profileInfo";
import { ProfileEdit } from "../../components/profileInfo/edit/profileEdit";
import { ToastContainer } from "react-toastify";
const MyProfile = () => {
  const [edit, setEdit] = useState(false);

  return (
    <section className={stl.profile}>
      <h2 className={stl.headline}>Профиль</h2>
      {!edit ? (
        <ProfileInfo setEdit={setEdit} />
      ) : (
        <ProfileEdit close={setEdit} />
      )}

      <button className={stl.exitBtn}>Выйти из аккаунта</button>
      <ToastContainer />
    </section>
  );
};

export default MyProfile;

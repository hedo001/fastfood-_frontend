"use client";
import { useState } from "react";
import stl from "./myProfile.module.scss";
import { ProfileInfo } from "../../components/profileInfo/profileInfo";
import { ProfileEdit } from "../../components/profileInfo/edit/profileEdit";
import EditModal from "../../components/alert/alertModal";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  return (
    <section className={stl.profile}>
      <h2 className={stl.headline}>Профиль</h2>
      {!edit ? (
        <ProfileInfo setEdit={setEdit} />
      ) : (
        <ProfileEdit close={setEdit} setAlert={setAlert} />
      )}
      {alert && <EditModal setAlert={setAlert} status={"edit"} />}
      <button className={stl.exitBtn}>Выйти из аккаунта</button>
    </section>
  );
};

export default MyProfile;

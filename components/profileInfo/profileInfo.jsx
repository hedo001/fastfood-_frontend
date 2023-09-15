// "use client";
import { useSelector } from "react-redux";
import stl from "./profileInfo.module.scss";

export const ProfileInfo = ({ setEdit }) => {
  const information = useSelector((store) => store.profile);

  const openEdit = () => {
    setEdit(true);
  };
  return (
    <div className={stl.infoCard}>
      <h2>Личные данные</h2>
      <p className={stl.name}>
        {`${information?.name} ${information?.surname}`}
      </p>
      <div className={stl.infoContent}>
        <p>
          <span>Дата рождения</span> <br />
          {information?.brithday}
        </p>
        <p>
          <span>Номер телефона</span> <br />
          {information?.tel}
        </p>
      </div>

      <div className={stl.btn}>
        <button className={stl.editbtn} onClick={openEdit}>
          Изменить данные
        </button>
      </div>
    </div>
  );
};

import { useForm } from "react-hook-form";
import stl from "./profileEdit.module.scss";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../store/slices/profile";
import { useEffect } from "react";
import { Inter } from "next/font/google";

export const ProfileEdit = ({ close, setAlert }) => {
  const { register, handleSubmit, reset } = useForm();
  const defaultInfo = useSelector((store) => store.profile);
  console.log(defaultInfo);

  const dispatch = useDispatch();
  useEffect(() => reset(defaultInfo), []);

  const submit = (data) => {
    dispatch(editProfile({ ...data }));
    setAlert(true);
    close(false);
  };
  return (
    <div className={stl.edit}>
      <h2>Личные данные</h2>
      <form className={stl.form}>
        <input
          className={stl.input}
          type="text"
          placeholder="Имя"
          {...register("name")}
        />
        <input
          className={stl.input}
          type="text"
          placeholder="Фамилия"
          {...register("surname")}
        />
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
          className={stl.input}
          {...register("brithday")}
          fontFamily={"Inter"}
        />
        <input
          className={stl.input}
          type="text"
          placeholder="+998 (91) 214-03-38"
          {...register("tel")}
        />

        <div className={stl.btn}>
          <button className={stl.btnClose} onClick={() => close(false)}>
            Oтмена
          </button>
          <button onClick={handleSubmit(submit)} className={stl.btnSubmit}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

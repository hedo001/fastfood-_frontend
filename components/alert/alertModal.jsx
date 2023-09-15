import { useEffect } from "react";
import stl from "./alert.module.scss";
import { Exit } from "../icons/exit";

const AlertModal = ({ status, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  const exit = () => setAlert(false);
  return (
    <div className={stl.alert}>
      <div className={stl.header}>
        <h2>Alert</h2>
        <button onClick={exit} className={stl.exitBtn}>
          <Exit />
        </button>
      </div>
      {status === "edit" ? (
        <p>Profile sucesufully updated</p>
      ) : (
        <p>Products editted to cart</p>
      )}
    </div>
  );
};

export default AlertModal;

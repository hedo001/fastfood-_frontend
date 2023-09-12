import stl from "./cal.module.scss";
import plus from "../../../../images/svg/add.svg";
import minus from "../../../../images/svg/minus.svg";
import Image from "next/image";
const Calculator = ({ num, setNum }) => {
  const increment = () => {
    return setNum(num + 1);
  };
  const decrement = () => {
    if (num - 1 < 1) {
      setNum(1);
    } else {
      setNum(num - 1);
    }
  };
  return (
    <div className={stl.calculator}>
      <button className={stl.addbutton} onClick={decrement}>
        <Image alt="minus" width={24} height={24} src={minus} />{" "}
      </button>
      <span>{num}</span>
      <button className={stl.addbutton} onClick={increment}>
        <Image alt="plus" width={24} height={24} src={plus} />
      </button>
    </div>
  );
};

export default Calculator;

import Image from "next/image";
import arrov from "../../../images/svg/arrow.svg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    >
      <Image width={24} height={24} src={arrov} alt="arrow" />
    </div>
  );
}
export default SampleNextArrow;

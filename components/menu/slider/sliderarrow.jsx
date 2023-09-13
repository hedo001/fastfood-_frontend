import { Arrov } from "../../icons/arrov";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    >
      <Arrov />
    </div>
  );
}
export default SampleNextArrow;

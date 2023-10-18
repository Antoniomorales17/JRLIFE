import "./Header.css";
import img from "../../img/junior2.png"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleLg">La vida de un desarrollador</span> */}
      </div>
      <img
        className="headerImg"
        src={img}
        alt=""
      />
    </div>
  );
}

import "./ListePlat.css";
import Plat from "../Plat";

export default function ListePlat({ listePlat }) {
  return (
    <div className="list-plat">
      {listePlat && listePlat.map((plat) => <Plat key={plat.id} plat={plat} />)}
    </div>
  );
}

import { Link } from "react-router-dom";
import exhibitionsData from "../data/exhibitionsData.json";

const Slider = () => {
    return (
        <div className="slide-wrap">
            <ul>
                {exhibitionsData.map((item) => (
                    <li key={item.id}>
                        <Link to={`../detail/${item.id}`}>
                            <img src={item.imageSrc} alt="" />
                            <p className="name">{item.name}</p>
                            <p className="date">{item.date}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Slider;
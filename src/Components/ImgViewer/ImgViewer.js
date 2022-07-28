import { useState } from "react";
import "./ImgViewer.css";
import { Image } from "../Image/Image";

export const ImgViewer = ({ displayedData }) => {
  const [isClicked, setIsClicked] = useState({});

  const handleClick = (id) => () => {
    setIsClicked((state) => ({
      ...state,
      [id]: !state[id],
    }));
  };

  return (
    <ul className="list">
      {displayedData.map((el, id) => {
        return (
          <li
            key={el.id}
            onClick={handleClick(id)}
            className={isClicked[id] ? "list__item-clicked" : "list__item"}
          >
            {el.name}
            {isClicked[id] ? <Image src={el.image} alt={el.name} /> : ""}
          </li>
        );
      })}
    </ul>
  );
};

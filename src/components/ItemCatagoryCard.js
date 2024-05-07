import { useState } from "react";
import { FoodCard } from "./FoodCard.js";

const ItemCatagoryCard = ({ data }) => {
  const { title, itemCards } = data;
  const [visible, setVisible] = useState(false);
  const ClickHandler = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <div>
      <div
        className="flex flex-row justify-between items-center"
        onClick={ClickHandler}
      >
        <h3 className="text-xl font-bold"> {title} </h3>
        <img
          src={
            visible
              ? "https://cdn-icons-png.flaticon.com/128/10946/10946194.png"
              : "https://cdn-icons-png.flaticon.com/128/10946/10946192.png"
          }
          className="h-10 w-auto shadow-md shadow-slate-900 rounded-full"
        />
      </div>
      <hr className="my-2" />
      {visible && <FoodCard itemCards={itemCards} />}
    </div>
  );
};

export default ItemCatagoryCard;

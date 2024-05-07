import { useState } from "react";
import { FoodCard } from "./FoodCard.js";

const NestedItemCategoryCard = ({ data }) => {
  const { title } = data;
  const { itemCards } = data.categories[0];
  const [visible, setVisible] = useState(false);
  const ClickHandeler = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <div>
      <div
        className="flex flex-row justify-between items-center"
        onClick={ClickHandeler}
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

export default NestedItemCategoryCard;

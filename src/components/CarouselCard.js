import { useState } from "react";
import { TopPickFoodCard } from "./FoodCard.js";

const CarouselCard = ({ data }) => {
  const { title, carousel } = data;
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
      {/* <ul>
        {carousel.map((item, index) => (
          <TopPickFoodCard data={item} />
        ))}
      </ul> */}
      {visible && <TopPickFoodCard data={carousel} />}
    </div>
  );
};
export default CarouselCard;

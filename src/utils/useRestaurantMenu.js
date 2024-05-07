import { useEffect, useState } from "react";
import { RESTAURNT_MEAL_URL } from "./constant";
import { RESTAURNT_MEAL_END_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([null]);
  const [resInfo, setResInfo] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURNT_MEAL_URL + resId + RESTAURNT_MEAL_END_URL
    );
    const json = await data.json();
    // console.log(json);
    setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  return {
    resMenu: resMenu,
    resInfo: resInfo,
  };
};

export default useRestaurantMenu;

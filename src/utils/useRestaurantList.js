import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useRestaurantList = () => {
  const [whatInMindData, setWhatInMindData] = useState([]);
  const [restaurantChainData, setRestrauntChainData] = useState([]);
  const [onlineRestrauntData, setOnlineRestrauntData] = useState([]);
  useEffect(() => {
    fetchData();
    // fetchUpdate();
  }, []);

  const fetchData = async () => {
    try {
      let result = await fetch(SWIGGY_API);
      let data = await result.json();
      // console.log(data);
      setWhatInMindData(data?.data?.cards[0]);
      setRestrauntChainData(data?.data?.cards[1]);
      setOnlineRestrauntData(data?.data?.cards[4]);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchUpdate = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update"
  //     );
  //     const json = await res.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return {
    whatInMindData: whatInMindData,
    restaurantChainData: restaurantChainData,
    onlineRestrauntData: onlineRestrauntData,
  };
};

export default useRestaurantList;

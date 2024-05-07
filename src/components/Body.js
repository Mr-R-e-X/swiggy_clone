import React from "react";
import { ReactDOM } from "react-dom/client";
import { WhatIsInMind } from "./WhatInMind";
import { RestaurantChain } from "./RestaurantChain";
import { OnlineRestraunts } from "./OnlineRestraunts";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { whatInMindData, restaurantChainData, onlineRestrauntData } =
    useRestaurantList();
  const status = useOnlineStatus();
  if (status === false)
    return <h1> Abey Saley 😡😡!!! Internet toh check karle! </h1>;
  return (
    <>
      <WhatIsInMind data={whatInMindData} />
      <RestaurantChain data={restaurantChainData} />
      <OnlineRestraunts data={onlineRestrauntData} />
    </>
  );
};

export default Body;

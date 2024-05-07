import { RESTAURNT_BASE_URL } from "../utils/constant";
import { useState } from "react";
import { ShimmerUi_Restraunt_Card } from "./ShimmerUI";
import { Link } from "react-router-dom";

const RestaurantChain = (props) => {
  if (props.data.length === 0) {
    return <ShimmerUi_Restraunt_Card />;
  }
  const { gridElements, header } = props?.data?.card?.card;
  const { restaurants } = gridElements?.infoWithStyle;
  const [listOfRestaurant, setListOfRestrunt] = useState([...restaurants]);
  const [filterRestaurant, setFilterRestrunt] = useState([...restaurants]);
  const [searchedName, setSearchedName] = useState("");
  const [click, setClick] = useState(1);
  // console.log(listOfRestaurant);
  return (
    <>
      <h1 className="text-2xl font-bold text-black px-40 py-2">
        {" "}
        {header.title}{" "}
      </h1>
      <div className="flex flex-row justify-between items-center px-40 py-2">
        <div className="cursor-pointer h-10 bg-slate-600 px-3 rounded-md">
          <button
            className="h-full text-white"
            onClick={() => {
              if (click === 1) {
                setClick(0);
                let topRatedRestaurant = listOfRestaurant.filter((res) => {
                  return res.info.avgRating >= 4.5;
                });
                setFilterRestrunt(topRatedRestaurant);
              } else {
                setClick(1);
                setFilterRestrunt([...restaurants]);
              }
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="h-10 flex flex-row items-center">
          <input
            className="border border-black h-full px-2 mx-2 rounded-md"
            type="text"
            value={searchedName}
            required
            onChange={(e) => {
              setSearchedName(e.target.value);
            }}
          />
          <button
            className="cursor-pointer h-full bg-slate-600 px-2 text-white rounded-md"
            type="submit"
            onClick={() => {
              let filteredRestrauntName = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchedName.toLowerCase())
              );
              setFilterRestrunt(filteredRestrauntName);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-row bg-white overflow-x-scroll mx-[9.8rem]">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantChainCard data={restaurant?.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

const RestaurantChainCard = (props) => {
  const {
    name,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    sla,
    locality,
    totalRatingsString,
  } = props?.data;

  return (
    <div className="mx-4 flex flex-col w-64 mt-4">
      <div className="h-48 w-64">
        <img
          className="h-48 w-64 object-cover rounded-2xl shadow-lg shadow-slate-900"
          src={RESTAURNT_BASE_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2 tracking-wider">
        <h3 className="font-bold">{name}</h3>
        <div className="flex flex-row items-center justify-start font-medium">
          <img
            className="h-[30px] pr-1"
            src="https://cdn-icons-png.flaticon.com/128/2224/2224638.png"
          />
          <span> {avgRating}</span>
          <span>
            <img
              className="h-[30px]"
              src="https://cdn-icons-png.flaticon.com/128/7500/7500224.png"
            />
          </span>
          <span>
            {sla.deliveryTime - 5}-{sla.deliveryTime + 5} mins
          </span>
        </div>
        <p className="truncate">{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export { RestaurantChain, RestaurantChainCard };

import { useEffect, useState } from "react";
import { RESTAURNT_BASE_URL } from "../utils/constant";
import { ShimmerUi_Restraunt_Card } from "./ShimmerUI";
import { Link } from "react-router-dom";
export const OnlineRestraunts = (props) => {
  if (props.data.length === 0) {
    return <ShimmerUi_Restraunt_Card />;
  }
  let restraunt =
    props?.data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [restaurantList, setRestrauntList] = useState([...restraunt]);
  const [filterRestaurant, setFilterRestrunt] = useState([...restraunt]);
  const [searchedName, setSearchedName] = useState("");
  const [click, setClick] = useState(1);
  return (
    <>
      <h1 className="text-2xl font-bold text-black px-40 py-2">
        Restaurants with online food delivery
      </h1>
      <div className="flex flex-row justify-between items-center px-40 py-2">
        <div className="cursor-pointer h-10 bg-slate-600 px-3 rounded-md">
          <button
            className="h-full text-white"
            onClick={() => {
              if (click === 1) {
                setClick(0);
                let topRatedRestaurant = restaurantList.filter((res) => {
                  return res.info.avgRating >= 4.3;
                });
                setFilterRestrunt(topRatedRestaurant);
              } else {
                setClick(1);
                setFilterRestrunt([...restraunt]);
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
              let filteredRestrauntName = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchedName.toLowerCase())
              );
              setFilterRestrunt(filteredRestrauntName);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-start bg-white flex-wrap mx-[10rem]">
        {filterRestaurant.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            <OnlineRestrauntsCard data={res?.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

const OnlineRestrauntsCard = (props) => {
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
    <div className="flex flex-col w-64 mt-4">
      <div className="h-40 w-52">
        <img
          className="h-40 w-52 object-cover rounded-2xl shadow-lg shadow-slate-900"
          src={RESTAURNT_BASE_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2 tracking-wider h-40 w-52">
        <h3 className="font-bold">{name}</h3>
        <div className="flex flex-row items-center justify-start font-medium">
          <img
            className="h-[30px] pr-1"
            src="https://cdn-icons-png.flaticon.com/128/2224/2224638.png"
          />
          <span>{avgRating}</span>
          <span>
            <img
              className="h-[30px]"
              src="https://cdn-icons-png.flaticon.com/128/7500/7500224.png"
            />
          </span>
          <span>
            {sla.deliveryTime - 5}-{sla.deliveryTime + 5}mins
          </span>
        </div>
        <p className="font-medium text-green-600">{costForTwo}</p>
        <p className="truncate">{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

import { ShimmerUi_Mind_Card } from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import CarouselCard from "./CarouselCard";
import NestedItemCategoryCard from "./NestedItemCategoryCard";
import ItemCatagoryCard from "./ItemCatagoryCard";
import { useEffect, useState } from "react";

export const RestaurantMenu = () => {
  let menuId = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(menuId.resId);
  if (
    resMenu === null ||
    resInfo === null ||
    resInfo === undefined ||
    resMenu === undefined
  ) {
    return <ShimmerUi_Mind_Card />;
  }

  const [visibility, setVisibility] = useState(false);

  const {
    name,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    costForTwoMessage,
    cuisines,
    sla,
    locality,
    totalRatingsString,
    feeDetails,
  } = resInfo;

  const carouselCardData = resMenu.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
  );
  const nestedItemCardData = resMenu.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  const itemCardData = resMenu.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div key={name} className="px-40 py-4">
      <hr className="my-2" />
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p> {cuisines !== undefined ? cuisines.join(", ") : " "} </p>
          <p>
            <span>{areaName}, </span>
            <span>{sla !== undefined ? sla.lastMileTravel : " "} km</span>
          </p>
        </div>
        <div className="shadow-md shadow-slate-900">
          <div className="flex flex-row items-center justify-center font-medium border border-gray-600 p-1">
            <img
              className="h-[20px] pr-1"
              src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
            />
            <span className="text-green-500">{resInfo.avgRating}</span>
          </div>
          <div className="border border-gray-600 p-1 border-t-0">
            <span>{resInfo.totalRatingsString}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center my-2">
        <img
          className="h-[20px] mx-1"
          src="https://cdn-icons-png.flaticon.com/128/9561/9561688.png"
        />
        <span>{feeDetails !== undefined ? feeDetails.message : " "}</span>
      </div>
      <hr className="h-1 my-2" />
      <div className="flex flex-row justify-start items-center tracking-wider">
        <div className="flex flex-row items-center mr-4">
          <img
            className="h-[25px] mr-1"
            src="https://cdn-icons-png.flaticon.com/128/3203/3203214.png"
          />
          <span className="font-bold"> {sla?.slaString} </span>
        </div>
        <div className="flex flex-row items-center">
          <img
            className="h-[20px] mr-1"
            src="https://cdn-icons-png.flaticon.com/128/14756/14756708.png"
          />
          <span className="font-bold"> {costForTwoMessage} </span>
        </div>
      </div>
      <hr className="h-1 my-2" />
      {carouselCardData[0]?.card?.card !== undefined || null ? (
        <CarouselCard data={carouselCardData[0]?.card?.card} />
      ) : (
        ""
      )}
      {nestedItemCardData !== undefined || null
        ? nestedItemCardData.map((item, index) => (
            <NestedItemCategoryCard data={item?.card?.card} />
          ))
        : ""}
      {itemCardData !== undefined || null
        ? itemCardData.map((item, index) => (
            <ItemCatagoryCard data={item?.card?.card} />
          ))
        : ""}
    </div>
  );
};

// const TopPickCard = (props) => {
//   const { title, carousel } = props.data;
//   const [showItem, setShowItem] = useState(false);

//   return (
//     <div>
//       <h3 className="text-xl font-bold">{title}</h3>
//       <hr className="my-2" />
//       <ul>
//         {carousel.map((item) => (
//           <TopPickFoodCard data={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const NestedItem = (props) => {
//   // console.log(props.data);
//   const { title } = props.data;
//   const { categories } = props.data;
//   console.log(categories);

//   return (
//     <div>
//       {categories.map((item) => (
//         <>
//           {console.log(item)}
//           <h3 className="text-xl font-bold"> {item.title} </h3>
//           <hr className="my-2" />
//           <ul>
//             {item.itemCards.map((menuItem) =>(
//               {menuItem.map((item)=>{
//                 <FoodCard data={item} />
//               })}
//             ))}
//           </ul>
//         </>
//       ))}
//     </div>
//   );
// };

// const ItemCard = (props) => {
//   const { title, itemCards } = props.data;
//   // console.log(props.data);
//   return (
//     <div>
//       <h3 className="text-xl font-bold"> {title} </h3>
//       <hr className="my-2" />
//       <ul>
//         {itemCards.map((item) => (
//           <FoodCard data={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

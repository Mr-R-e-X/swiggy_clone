import { RESTAURNT_MEAL_IMG_URL } from "../utils/constant";
import { useRef, useState } from "react";
export const TopPickFoodCard = (props) => {
  const { data } = props;
  const addBtn = useRef([]);
  const [itemCount, setItemCount] = useState(0);
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item?.dish?.info?.id}>
          <div className="flex flex-row justify-between items-center py-4 tracking-wider text-justify">
            <div className="w-[70%]">
              <div className="flex flex-row items-center">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img
                    className="h-[15px] mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
                  />
                ) : (
                  <img
                    className="h-[17px] mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
                  />
                )}
                <p className="text-lg font-semibold">
                  {item?.dish?.info?.name}
                </p>
              </div>
              <p className="text-lg font-medium text-green-600">
                Rs.{" "}
                {item?.dish?.info?.finalPrice !== undefined
                  ? (item?.dish?.info?.finalPrice / 100).toFixed(2)
                  : item?.dish?.info?.price !== undefined
                  ? (item?.dish?.info?.price / 100).toFixed(2)
                  : (item?.dish?.info?.defaultPrice / 100).toFixed(2)}
                {"/-"}
              </p>
              <p>{item?.dish?.info?.description}</p>
            </div>
            <div className="w-1/5 flex flex-col items-center justify-center">
              {item?.dish?.info?.imageId !== undefined ? (
                <img
                  className="w-44 h-36 object-cover rounded-md shadow-lg shadow-slate-900"
                  src={RESTAURNT_MEAL_IMG_URL + item?.dish?.info?.imageId}
                />
              ) : (
                " "
              )}
              <div className="flex flex-row justify-between items-center bg-green-200 rounded-md px-3 py-1 text-slate-600 font-bold mt-[-10px] shadow-lg shadow-slate-900">
                <button
                  className="text-red-500 text-xl font-bold"
                  onClick={() => {
                    if (itemCount >= 1) {
                      setItemCount((prevCount) => {
                        const updatedCount = prevCount - 1;
                        if (updatedCount >= 1) {
                          addBtn.current[index].innerHTML =
                            updatedCount.toString();
                        } else if (updatedCount === 0) {
                          addBtn.current[index].innerHTML = "ADD";
                        }
                        return updatedCount;
                      });
                    }
                  }}
                >
                  &minus;&nbsp;
                </button>
                <p ref={(ref) => (addBtn.current[index] = ref)}>ADD</p>
                <button
                  className="text-green-700 text-xl font-bold"
                  onClick={() => {
                    setItemCount((prevCount) => {
                      const updatedCount = prevCount + 1;
                      addBtn.current[index].innerHTML = updatedCount.toString();
                      return updatedCount;
                    });
                    // addBtn.current[index].innerHTML = itemCount;
                  }}
                >
                  &nbsp;&#43;
                </button>
              </div>
            </div>
          </div>
          <hr className="my-2" />
        </li>
      ))}
    </ul>
  );
};

export const FoodCard = (props) => {
  const { itemCards } = props;
  const addBtn = useRef([]);
  const [itemCount, setItemCount] = useState(0);
  return (
    <ul>
      {itemCards.map((item, index) => (
        <li key={item?.card?.info?.id}>
          <div className="flex flex-row justify-between items-center py-4 tracking-wider text-justify">
            <div className="w-[70%]">
              <div className="flex flex-row items-center">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img
                    className="h-[15px] mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
                  />
                ) : (
                  <img
                    className="h-[17px] mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
                  />
                )}
                <p className="text-lg font-semibold">
                  {item?.card?.info?.name}
                </p>
              </div>
              <p className="text-lg font-medium text-green-600">
                Rs.{" "}
                {item?.card?.info?.finalPrice !== undefined
                  ? (item?.card?.info?.finalPrice / 100).toFixed(2)
                  : item?.card?.info?.price !== undefined
                  ? (item?.card?.info?.price / 100).toFixed(2)
                  : (item?.card?.info?.defaultPrice / 100).toFixed(2)}
                {"/-"}
              </p>
              <p> {item?.card?.info?.description} </p>
            </div>
            <div className="w-1/5 flex flex-col items-center justify-center">
              {item?.card?.info?.imageId !== undefined ? (
                <img
                  className="w-44 h-36 object-cover rounded-md shadow-lg shadow-slate-900"
                  src={RESTAURNT_MEAL_IMG_URL + item?.card?.info?.imageId}
                />
              ) : (
                " "
              )}
              <div className="flex flex-row justify-between items-center bg-green-200 rounded-md px-3 py-1 text-slate-600 font-bold mt-[-10px] shadow-lg shadow-slate-900">
                <button
                  className="text-red-500 text-xl font-bold"
                  onClick={() => {
                    if (itemCount >= 1) {
                      setItemCount((prevCount) => {
                        const updatedCount = prevCount - 1;
                        if (updatedCount >= 1) {
                          addBtn.current[index].innerHTML =
                            updatedCount.toString();
                        } else if (updatedCount === 0) {
                          addBtn.current[index].innerHTML = "ADD";
                        }
                        return updatedCount;
                      });
                    }
                  }}
                >
                  &minus;&nbsp;
                </button>
                <p ref={(ref) => (addBtn.current[index] = ref)}>ADD</p>
                <button
                  className="text-green-700 text-xl font-bold"
                  onClick={() => {
                    setItemCount((prevCount) => {
                      const updatedCount = prevCount + 1;
                      addBtn.current[index].innerHTML = updatedCount.toString();
                      return updatedCount;
                    });
                    // addBtn.current[index].innerHTML = itemCount;
                  }}
                >
                  &nbsp;&#43;
                </button>
              </div>
            </div>
          </div>
          <hr className="my-2" />
        </li>
      ))}
    </ul>
  );
};

import { useState } from "react";
import { WHAT_IN_MIND_IMG_BASE_URL } from "../utils/constant";
import { ShimmerUi_Mind_Card } from "./ShimmerUI.js";

const WhatIsInMind = (props) => {
  if (props?.data?.length === 0) {
    return <ShimmerUi_Mind_Card />;
  }

  // console.log(props?.data?.card?.card);

  const { imageGridCards, header } = props?.data?.card?.card;
  const { info } = imageGridCards;
  const [disInfo, setDisInfo] = useState(info.slice(0, 6));
  const [length, setLength] = useState(disInfo.length);
  // console.log(info);
  return (
    <div className="w-full px-40 py-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-black py-3"> {header.title} </h1>
        <div>
          <button
            onClick={() => {
              if (length > 6) {
                console.log(info.length);
                if (length > 0) {
                  let start = length - 9;
                  let end = length - 3;
                  if (start < 0) {
                    start = start + 1;
                    end = end + 1;
                  }
                  const filterDish = info.slice(start, end);
                  setDisInfo(filterDish);
                  setLength(end);
                }
              }
            }}
          >
            {" "}
            <img
              className="h-[30px] px-2"
              src="https://cdn-icons-png.flaticon.com/128/1634/1634157.png"
            />{" "}
          </button>
          <button
            onClick={() => {
              if (length < info.length) {
                let start = length - 3;
                let end = length + 3;
                if (end > info.length) {
                  start = start - 1;
                  end = end - 1;
                }
                const filterDish = info.slice(start, end);
                setDisInfo(filterDish);
                setLength(end);
              }
            }}
          >
            {" "}
            <img
              className="h-[30px] px-2"
              src="https://cdn-icons-png.flaticon.com/128/1634/1634158.png"
            />{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-row bg-white overflow-hidden">
        {disInfo.map((data) => (
          <WhatIsInMindCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

const WhatIsInMindCard = (props) => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="px-4 m-3">
      <img
        className="min-w-28 min-h-max"
        src={WHAT_IN_MIND_IMG_BASE_URL + data.imageId}
      />
    </div>
  );
};
export { WhatIsInMind, WhatIsInMindCard };

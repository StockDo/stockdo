import { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";

export default function Maps({ setMap, setMaps }) {
  const arr = Array(5).fill("");
  const [cardMaps, setCardMaps] = useState(arr);
  return (
    <div className="min-h-screen">
      <div
        className={`grid grid-cols-4 gap-12 items-center max-2xl:!grid-cols-3 max-xl:!grid-cols-2 max-lg:!grid-cols-1 pb-24 ml-[25rem] mt-44`}>
        {cardMaps.map(() => (
          <div
            onClick={() => {
              setMap(true);
              setMaps(false);
            }}
            className="relative flex flex-col items-center bg-neutral-50 border-2 border-neutral-300 px-20 pb-14 pt-20 rounded-3xl cursor-pointer hover:!border-orange-400 group">
            <h1 className="relative -mt-9 bottom-7 font-bold text-xl font-main">
              Mapa 1
            </h1>
            <BsGrid1X2Fill size={85} className="fill-orange-400" />
            <div className="absolute flex gap-36 top-[11rem]">
              <FaRegTrashCan
                size={22}
                className="hidden fill-red-700 hover:scale-110 group-hover:!block"
              />
              <FaRegEdit
                size={25}
                className="hidden fill-orange-400 hover:scale-110 group-hover:!block"
              />
            </div>
          </div>
        ))}
        <button
          onClick={() => setCardMaps([...cardMaps, ""])}
          className="w-fit m-auto">
          <FiPlusSquare
            size={80}
            className="cursor-pointer text-orange-400 hover:scale-105"
          />
        </button>
      </div>
    </div>
  );
}

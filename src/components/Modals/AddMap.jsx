import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { SketchPicker, PhotoshopPicker } from "react-color";
import { FaEyeDropper } from "react-icons/fa6";

export default function AddMap({ setAddMap, setUserLayout, userLayout, id }) {
  const [color, setColor] = useState("bg-red-500");
  const [categories, setCategories] = useState([]);
  const [colorPicker, setColorPicker] = useState({ background: "#FFF" });
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [acceptColor, setAcceptColor] = useState(false);
  const handleChangeComplete = (color) => {
    setColorPicker({ background: color.hex });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/get-categories`)
      .then((e) => {
        console.log(e.data);
        setCategories(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="fixed z-50 flex items-center justify-center w-screen min-h-full bg-black bg-opacity-50">
      <div className="relative flex flex-col gap-8 bg-white text-xl w-[50rem] rounded-xl animate-zoomIn">
        <img src={StockDoLogo} width={130} className="absolute left-0 p-4" />
        <span className="p-2 ml-auto">
          <MdOutlineClose
            size={40}
            className="text-orange-500 cursor-pointer"
            onClick={() => {
              setAddMap(false);
              document.body.style.overflow = "visible";
            }}
          />
        </span>
        <div className="flex flex-col gap-8 pb-12 items-center m-auto -mt-12 w-[20rem]">
          <div className="w-full p-6 border border-orange-400 rounded-lg">
            <h1>Escolha a categoria:</h1>
            <select
              className="w-64 p-1 mt-4 border border-orange-400 rounded-md outline-none cursor-pointer"
              name=""
              id="">
              {categories.map((e, i) => (
                <option key={i}>{e.NM_CATEGORIA}</option>
              ))}
            </select>
          </div>
          <div className="w-full p-6 border border-orange-400 rounded-lg">
            <h1>Escolha uma cor:</h1>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setColor("bg-red-500");
                  setOpenColorPicker(false);
                  setAcceptColor(false);
                }}
                className={`${
                  color === "bg-red-500" && "border-2 border-black"
                } rounded-full self-center bg-red-500 p-4`}></button>
              <button
                onClick={() => {
                  setColor("bg-green-500");
                  setOpenColorPicker(false);
                  setAcceptColor(false);
                }}
                className={`${
                  color === "bg-green-500" && "border-2 border-black"
                } rounded-full self-center bg-green-500 p-4`}></button>
              <button
                onClick={() => {
                  setColor("bg-blue-500");
                  setOpenColorPicker(false);
                  setAcceptColor(false);
                }}
                className={`${
                  color === "bg-blue-500" && "border-2 border-black"
                } rounded-full self-center bg-blue-500 p-4`}></button>
              <button
                onClick={() => {
                  setColor("bg-neutral-500");
                  setOpenColorPicker(false);
                  setAcceptColor(false);
                }}
                className={`${
                  color === "bg-neutral-500" && "border-2 border-black"
                } rounded-full self-center bg-neutral-500 p-4`}></button>
              <button
                onClick={() => {
                  setColor("bg-yellow-500");
                  setOpenColorPicker(false);
                  setAcceptColor(false);
                }}
                className={`${
                  color === "bg-yellow-500" && "border-2 border-black"
                } rounded-full self-center bg-yellow-500 p-4`}></button>
              {(openColorPicker || acceptColor) && (
                <button
                  style={{ backgroundColor: colorPicker.background }}
                  className={`rounded-full self-center p-4 border-2 border-black`}></button>
              )}
              <button
                onClick={() => {
                  setColor(colorPicker.background);
                  setOpenColorPicker(!openColorPicker);
                  setColor("");
                }}>
                <FaEyeDropper />
              </button>
            </div>
            {openColorPicker && (
              <PhotoshopPicker
                color={colorPicker.background}
                onChange={handleChangeComplete}
                onCancel={() => setOpenColorPicker(false)}
                onAccept={() => {
                  setColor(colorPicker.background);
                  setOpenColorPicker(false);
                  setAcceptColor(true);
                }}
                className="absolute"
              />
            )}
          </div>
          <button
            onClick={() => {
              setUserLayout([
                ...userLayout,
                {
                  w: 0,
                  h: 0,
                  x: 0,
                  y: 0,
                  i: id,
                  color: color,
                  moved: false,
                  static: false,
                },
              ]);
              setAddMap(false);
            }}
            className="px-12 py-2 bg-orange-400 rounded-xl">
            Adicionar
          </button>
        </div>
      </div>
    </main>
  );
}

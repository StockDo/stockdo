import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function AddMap({ setAddMap, setUserLayout, userLayout }) {
  const [color, setColor] = useState("bg-red-500");
  const [categories, setCategories] = useState([]);
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
    <main className="fixed z-50 w-screen min-h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-8 bg-white text-xl w-[50rem] rounded-xl animate-zoomIn">
        <span className="">
          <MdOutlineClose
            size={40}
            className="ml-auto text-orange-500 cursor-pointer m-5"
            onClick={() => {
              setAddMap(false);
              document.body.style.overflow = "visible";
            }}
          />
        </span>
        <div className="flex flex-col gap-8 pb-12 items-center m-auto -mt-12 w-[20rem]">
          <div className="border border-orange-400 p-6 rounded-lg w-full">
            <h1>Escolha a categoria:</h1>
            <select
              className="outline-none border border-orange-400 rounded-md w-64 p-1 mt-4 cursor-pointer"
              name=""
              id="">
              {categories.map((e) => (
                <option value="sasa">{e.NM_CATEGORIA}</option>
              ))}
            </select>
          </div>
          <div className="border border-orange-400 p-6 rounded-lg w-full">
            <h1>Escolha uma cor:</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setColor("bg-red-500")}
                className={`${
                  color === "bg-red-500" && "border-2 border-black"
                } rounded-full self-center bg-red-500 p-4`}></button>
              <button
                onClick={() => setColor("bg-green-500")}
                className={`${
                  color === "bg-green-500" && "border-2 border-black"
                } rounded-full self-center bg-green-500 p-4`}></button>
              <button
                onClick={() => setColor("bg-blue-500")}
                className={`${
                  color === "bg-blue-500" && "border-2 border-black"
                } rounded-full self-center bg-blue-500 p-4`}></button>
              <button
                onClick={() => setColor("bg-neutral-500")}
                className={`${
                  color === "bg-neutral-500" && "border-2 border-black"
                } rounded-full self-center bg-neutral-500 p-4`}></button>
              <button
                onClick={() => setColor("bg-yellow-500")}
                className={`${
                  color === "bg-yellow-500" && "border-2 border-black"
                } rounded-full self-center bg-yellow-500 p-4`}></button>
            </div>
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
                  i: 1,
                  color: color,
                },
              ]);
              setAddMap(false);
            }}
            className="px-12 py-2 rounded-xl bg-orange-400">
            Adicionar
          </button>
        </div>
      </div>
    </main>
  );
}

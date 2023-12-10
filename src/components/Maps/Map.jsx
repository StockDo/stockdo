import { useState, useEffect } from "react";
import axios from "axios";
import { TbLayoutGridAdd } from "react-icons/tb";
import RGL, { WidthProvider } from "react-grid-layout";
import { FaRegEdit } from "react-icons/fa";
import "../../../node_modules/react-grid-layout/css/styles.css";
import AddMap from "../Modals/AddMap";
// import "../../node_modules/react-resizable/css/styles.css";
const ReactGridLayout = WidthProvider(RGL);
export default function Map() {
  const [edit, setEdit] = useState(false);
  const [newLayout, setNewLayout] = useState([]);
  const [removeHover, setRemoveHover] = useState(false);
  const [addMap, setAddMap] = useState(false);
  const [id, setId] = useState(0);

  const [userLayout, setUserLayout] = useState(
    JSON.parse(localStorage.getItem("layout"))
  );

  const [layout, setLayout] = useState(
    JSON.parse(localStorage.getItem("layout")) ||
      localStorage.setItem("layout", JSON.stringify([]))
  );

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(userLayout));
    setNewLayout(newLayout);
  };

  return (
    <>
      {addMap && (
        <AddMap
          setAddMap={setAddMap}
          setUserLayout={setUserLayout}
          userLayout={userLayout}
          id={id}
        />
      )}
      <div className="flex items-center">
        <div
          className={`flex flex-col justify-center pb-16 w-[50rem] shadow-xl bg-white ml-[30rem] mt-44 border border-orange-400 rounded-3xl relative`}>
          <div className="flex flex-col gap-5 self-center w-[40%]">
            {userLayout.length > 0 && (
              <button
                onClick={() => setEdit(!edit)}
                className="absolute left-10 top-2 flex items-center gap-2 border border-orange-500 text-orange-500 px-2 py-1 rounded-lg hover:!text-white hover:!bg-orange-400 transition-all">
                <FaRegEdit size={20} /> Editar
              </button>
            )}
            <div className="py-2 text-2xl font-bold text-center text-white bg-orange-400 rounded-b-xl">
              Mapa 1
            </div>
          </div>
          {userLayout.length > 0 ? (
            <ReactGridLayout
              className="w-[50%] m-auto mt-6"
              layout={layout}
              cols={8}
              preventCollision={false}
              autoSize={true}
              maxRows={10}
              isDraggable={edit ? true : false}
              isResizable={edit ? true : false}
              onLayoutChange={handleLayoutChange}
              // maxRows={2}
              onDrag={() => {
                document.body.style.overflow = "hidden";
              }}
              onDragStop={() => {
                document.body.style.overflow = "visible";
                // removeHover && setLayout(userLayout.filter((e) => e.id != 8));
              }}
              onResize={() => {
                document.body.style.overflow = "hidden";
              }}
              onResizeStop={() => {
                document.body.style.overflow = "visible";
              }}
              rowHeight={40}>
              {userLayout.map((e, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: e.color }}
                  className={`${e.color} select-none rounded-md ${
                    edit && "hover:cursor-grab active:cursor-grabbing"
                  } ${removeHover && "bg-red-200"}`}></div>
              ))}
            </ReactGridLayout>
          ) : (
            <div className="flex flex-col items-center gap-6 pt-10">
              <h1 className="text-2xl font-bold select-none opacity-20">
                Nenhum mapa adicionado.
              </h1>
              <TbLayoutGridAdd size={200} className="text-neutral-200" />
              <button
                onClick={() => {
                  setAddMap(true);
                }}
                className="px-16 py-2 font-semibold text-white bg-orange-400 rounded-xl">
                Adicionar mapa
              </button>
            </div>
          )}

          {edit && (
            <div className="flex self-center gap-6">
              <button
                onClick={() => {
                  setId(id + 1);
                  setAddMap(true);
                }}
                className="py-1 text-2xl border rounded-md px-7 border-slate-500 text-slate-500">
                Adicionar
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("layout", JSON.stringify(userLayout));
                  setEdit(false);
                }}
                className="p-3 text-xl text-white rounded-lg bg-slate-400">
                Salvar
              </button>
              {/* <button
                onClick={() => {
                  setEdit(false);
                }}
                className="p-3 text-xl text-white rounded-lg bg-slate-300">
                Cancelar
              </button> */}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6 ml-24">
          <div className="flex justify-center gap-2">
            <div className="self-center p-3 bg-red-400 rounded-full"></div>
            <h1 className="font-bold">Corredor 1</h1>
          </div>
          <div className="flex justify-center gap-2 p-2 ">
            <div className="self-center p-3 bg-green-400 rounded-full"></div>
            <h1 className="font-bold">Corredor 2</h1>
          </div>
          <div className="flex justify-center gap-2">
            <div className="self-center p-3 bg-blue-400 rounded-full"></div>
            <h1 className="font-bold">Corredor 3</h1>
          </div>
        </div>
      </div>
    </>
  );
}

// LS sample data:

/* [{"w":1,"h":1,"x":0,"y":0,"i":"0","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":1,"i":"1","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":0,"i":"2","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":1,"i":"3","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":1,"i":"4","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":0,"i":"5","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":0,"i":"6","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":0,"i":"7","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":0,"i":"8","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":1,"i":"9","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":1,"i":"10","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":1,"i":"11","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":2,"i":"12","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":3,"i":"13","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":3,"i":"14","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":2,"i":"15","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":2,"i":"16","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":2,"i":"17","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":2,"i":"18","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":2,"i":"19","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":4,"i":"20","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":5,"i":"21","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":6,"i":"22","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":4,"i":"23","moved":false,"static":false},{"w":1,"h":4,"x":2,"y":3,"i":"24","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":5,"i":"25","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":6,"i":"26","moved":false,"static":false},{"w":1,"h":2,"x":6,"y":1,"i":"27","moved":false,"static":false},{"w":1,"h":3,"x":10,"y":0,"i":"28","moved":false,"static":false},{"w":3,"h":3,"x":7,"y":0,"i":"29","moved":false,"static":false},{"w":1,"h":1,"x":6,"y":0,"i":"30","moved":false,"static":false},{"w":4,"h":2,"x":3,"y":3,"i":"31","moved":false,"static":false},{"w":3,"h":1,"x":4,"y":5,"i":"32","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":5,"i":"33","moved":false,"static":false},{"w":1,"h":1,"x":8,"y":3,"i":"34","moved":false,"static":false},{"w":1,"h":1,"x":7,"y":5,"i":"35","moved":false,"static":false},{"w":1,"h":1,"x":7,"y":3,"i":"36","moved":false,"static":false},{"w":1,"h":1,"x":7,"y":4,"i":"37","moved":false,"static":false},{"w":1,"h":1,"x":9,"y":5,"i":"38","moved":false,"static":false},{"w":1,"h":1,"x":9,"y":4,"i":"39","moved":false,"static":false},{"w":1,"h":1,"x":9,"y":3,"i":"40","moved":false,"static":false},{"w":1,"h":1,"x":8,"y":4,"i":"41","moved":false,"static":false},{"w":1,"h":1,"x":8,"y":5,"i":"42","moved":false,"static":false},{"w":8,"h":1,"x":3,"y":6,"i":"43","moved":false,"static":false},{"w":1,"h":3,"x":10,"y":3,"i":"44","moved":false,"static":false}]

*/

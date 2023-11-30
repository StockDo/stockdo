import { useState, useEffect } from "react";
import axios from "axios";
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

  const [userLayout, setUserLayout] = useState(
    JSON.parse(localStorage.getItem("layout")) ||
      localStorage.setItem(
        "layout",
        JSON.stringify([
          { w: 1, h: 1, x: 0, y: 0, i: "0", color: "bg-blue-400" },
          { w: 1, h: 1, x: 1, y: 1, i: "1", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 2, y: 0, i: "2", color: "bg-red-400" },
          { w: 1, h: 1, x: 3, y: 1, i: "3", color: "bg-red-400" },
          { w: 1, h: 1, x: 4, y: 1, i: "4", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 5, y: 0, i: "5", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 6, y: 1, i: "6", color: "bg-blue-400" },
          { w: 1, h: 1, x: 7, y: 1, i: "7", color: "bg-blue-400" },
          { w: 1, h: 1, x: 0, y: 1, i: "8", color: "bg-blue-400" },
          { w: 1, h: 1, x: 1, y: 0, i: "9", color: "bg-red-400" },
          { w: 1, h: 1, x: 2, y: 0, i: "10", color: "bg-red-400" },
          { w: 1, h: 1, x: 3, y: 0, i: "11", color: "bg-green-400" },
          { w: 1, h: 1, x: 4, y: 1, i: "12", color: "bg-green-400" },
          { w: 1, h: 1, x: 5, y: 1, i: "13", color: "bg-red-400" },
          { w: 1, h: 1, x: 6, y: 1, i: "14", color: "bg-red-400" },
          { w: 1, h: 1, x: 7, y: 1, i: "15", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 0, y: 0, i: "16", color: "bg-blue-400" },
          { w: 1, h: 1, x: 1, y: 1, i: "17", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 2, y: 0, i: "18", color: "bg-red-400" },
          { w: 1, h: 1, x: 3, y: 1, i: "19", color: "bg-red-400" },
          { w: 1, h: 1, x: 4, y: 1, i: "20", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 5, y: 0, i: "21", color: "bg-yellow-400" },
          { w: 1, h: 1, x: 6, y: 1, i: "22", color: "bg-blue-400" },
          { w: 1, h: 1, x: 7, y: 1, i: "23", color: "bg-blue-400" },
          { w: 1, h: 1, x: 0, y: 1, i: "24", color: "bg-blue-400" },
          { w: 1, h: 1, x: 1, y: 0, i: "25", color: "bg-red-400" },
          { w: 1, h: 1, x: 2, y: 0, i: "26", color: "bg-red-400" },
          { w: 1, h: 1, x: 3, y: 0, i: "27", color: "bg-green-400" },
          { w: 1, h: 1, x: 4, y: 1, i: "28", color: "bg-green-400" },
          { w: 1, h: 1, x: 5, y: 1, i: "29", color: "bg-red-400" },
          { w: 1, h: 1, x: 6, y: 1, i: "30", color: "bg-red-400" },
          { w: 1, h: 1, x: 7, y: 1, i: "31", color: "bg-yellow-400" },
        ])
      )
  );

  // const [layout, setLayout] = useState(
  //   JSON.parse(localStorage.getItem("layout"))
  // );

  const handleLayoutChange = (newLayout) => {
    // setLayout(newLayout);
    // localStorage.setItem("layout", JSON.stringify(newLayout));
    setNewLayout(newLayout);
  };

  useEffect(() => {
    console.log(userLayout);
  }, [userLayout]);

  return (
    <>
      {addMap && (
        <AddMap
          setAddMap={setAddMap}
          setUserLayout={setUserLayout}
          userLayout={userLayout}
        />
      )}
      <div className="flex items-center">
        <div
          className={`flex flex-col justify-center pb-16 w-[50rem] shadow-xl bg-white ml-[30rem] mt-44 border border-orange-400 rounded-3xl relative`}>
          <div className="flex flex-col gap-5 self-center w-[40%]">
            <button
              onClick={() => setEdit(!edit)}
              className="absolute left-10 top-2 flex items-center gap-2 border border-orange-500 text-orange-500 px-2 py-1 rounded-lg hover:!text-white hover:!bg-orange-400 transition-all">
              <FaRegEdit size={20} /> Editar
            </button>
            <div className="text-center font-bold py-2 bg-orange-400 text-white text-2xl rounded-b-xl">
              Mapa 1
            </div>
          </div>
          <ReactGridLayout
            className="w-[50%] m-auto mt-6"
            layout={userLayout}
            cols={8}
            preventCollision={false}
            autoSize={true}
            maxRows={10}
            isDraggable={edit ? true : false}
            isResizable={edit ? true : false}
            // onLayoutChange={handleLayoutChange}
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
                className={`${e.color} select-none rounded-md ${
                  edit && "hover:cursor-grab active:cursor-grabbing"
                } ${removeHover && "bg-red-200"}`}></div>
            ))}
          </ReactGridLayout>
          {edit && (
            <div className="flex gap-6 self-center">
              <button
                onClick={() => {
                  setAddMap(true);
                }}
                className="py-1 px-7 border border-slate-500 text-slate-500 text-2xl rounded-md">
                Adicionar
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("layout", JSON.stringify(newLayout));
                  setEdit(false);
                }}
                className="bg-slate-400 p-3 text-white text-xl rounded-lg">
                Salvar
              </button>
              <button
                onClick={() => {
                  setEdit(false);
                }}
                className="bg-slate-300 p-3 text-white text-xl rounded-lg">
                Cancelar
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6 ml-24">
          <div className="flex gap-2 justify-center">
            <div className="p-3 rounded-full bg-red-400 self-center"></div>
            <h1 className="font-bold">Corredor 1</h1>
          </div>
          <div className="justify-center p-2 flex gap-2 ">
            <div className="p-3 rounded-full bg-green-400 self-center"></div>
            <h1 className="font-bold">Corredor 2</h1>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="p-3 rounded-full bg-blue-400 self-center"></div>
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

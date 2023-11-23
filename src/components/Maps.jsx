import { useState, useEffect } from "react";
import axios from "axios";
import RGL, { WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
// import "../../node_modules/react-resizable/css/styles.css";
const ReactGridLayout = WidthProvider(RGL);
export default function Maps() {
  const [edit, setEdit] = useState(false);
  const [newLayout, setNewLayout] = useState([]);

  const [userLayout, setUserLayout] = useState(
    JSON.parse(localStorage.getItem("layout")) ||
      localStorage.setItem(
        "layout",
        JSON.stringify([
          { w: 1, h: 1, x: 0, y: 0, i: "0", moved: false, static: false },
          { w: 1, h: 1, x: 0, y: 1, i: "1", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 0, i: "2", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 1, i: "3", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 1, i: "4", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 0, i: "5", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 0, i: "6", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 0, i: "7", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 0, i: "8", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 1, i: "9", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 1, i: "10", moved: false, static: false },
          { w: 1, h: 1, x: 0, y: 2, i: "11", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 1, i: "12", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 0, i: "13", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 2, i: "14", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 2, i: "15", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 1, i: "16", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 2, i: "17", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 2, i: "18", moved: false, static: false },
          { w: 1, h: 1, x: 0, y: 3, i: "19", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 3, i: "20", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 2, i: "21", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 2, i: "22", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 3, i: "23", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 3, i: "24", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 3, i: "25", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 3, i: "26", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 3, i: "27", moved: false, static: false },
          { w: 1, h: 1, x: 0, y: 4, i: "28", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 4, i: "29", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 4, i: "30", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 4, i: "31", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 4, i: "32", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 4, i: "33", moved: false, static: false },
          { w: 1, h: 1, x: 0, y: 5, i: "34", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 5, i: "35", moved: false, static: false },
          { w: 1, h: 1, x: 2, y: 5, i: "36", moved: false, static: false },
          { w: 1, h: 1, x: 4, y: 5, i: "37", moved: false, static: false },
          { w: 1, h: 1, x: 3, y: 5, i: "38", moved: false, static: false },
          { w: 1, h: 1, x: 5, y: 5, i: "39", moved: false, static: false },
          { w: 1, h: 1, x: 6, y: 5, i: "40", moved: false, static: false },
          { w: 1, h: 1, x: 1, y: 4, i: "41", moved: false, static: false },
        ])
      )
  );

  const handleLayoutChange = (newLayout) => {
    // setLayout(newLayout);
    // localStorage.setItem("layout", JSON.stringify(newLayout));
    setNewLayout(newLayout);
    console.log(newLayout);
  };

  const [layout, setLayout] = useState(
    JSON.parse(localStorage.getItem("layout"))
  );

  // useEffect(() => {
  //   setLayout();
  // }, []);

  return (
    <div className="min-h-screen">
      <div className={`bg-white pr-12 pb-24 ml-96 mt-44 w-full`}>
        <div className="flex items-center gap-5 mb-3 ml-3 w-[15rem]">
          <button
            onClick={() => setEdit(!edit)}
            className="py-1 px-7 border border-orange-400 text-orange-400 text-2xl rounded-md">
            Editar
          </button>
          {edit && (
            <button
              onClick={() => {
                setUserLayout([
                  ...userLayout,
                  {
                    w: 8,
                    h: 8,
                    x: 0,
                    y: 0,
                    i: 1,
                    moved: false,
                    static: false,
                  },
                ]);
              }}
              className="py-1 px-7 border border-slate-500 text-slate-500 text-2xl rounded-md">
              Adicionar
            </button>
          )}
        </div>
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={12}
          preventCollision={false}
          // maxRows={2}
          isDraggable={edit ? true : false}
          isResizable={edit ? true : false}
          onLayoutChange={handleLayoutChange}
          onDrag={() => {
            document.body.style.overflow = "hidden";
          }}
          onDragStop={() => {
            document.body.style.overflow = "visible";
          }}
          // compactType={null}
          rowHeight={40}
          width={1200}>
          {/* <div
            key="a"
            data-grid={{ w: 2, h: 3, x: 0, y: 0 }}
            className={`text-3xl bg-yellow-600 text-center m-auto select-none ${
              edit && "hover:cursor-grab active:cursor-grabbing"
            }`}>
            A
          </div> */}
          {userLayout.map((e, i) => (
            <div
              key={i}
              className={`text-3xl bg-neutral-300 select-none ${
                edit && "hover:cursor-grab active:cursor-grabbing"
              }`}></div>
          ))}
        </ReactGridLayout>
        {edit && (
          <div className="flex gap-6">
            <button
              onClick={() => {
                localStorage.setItem("layout", JSON.stringify(newLayout));
                console.log(newLayout);
                setEdit(false);
              }}
              className="bg-slate-400 p-3 text-white text-xl rounded-lg">
              Salvar
            </button>
            <button
              onClick={() => {
                console.log(layout);
                setEdit(false);
              }}
              className="bg-slate-300 p-3 text-white text-xl rounded-lg">
              Cancelar
            </button>
            <button
              onClick={() => {
                console.log(newLayout);
                console.log(layout);
                console.log(userLayout);
              }}
              className="bg-red-400 p-3 text-white text-xl rounded-lg">
              teste
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// LS sample data:

// [{"w":1,"h":1,"x":0,"y":0,"i":"0","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":1,"i":"1","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":0,"i":"2","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":1,"i":"3","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":1,"i":"4","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":0,"i":"5","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":0,"i":"6","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":0,"i":"7","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":0,"i":"8","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":1,"i":"9","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":1,"i":"10","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":1,"i":"11","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":2,"i":"12","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":3,"i":"13","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":3,"i":"14","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":2,"i":"15","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":2,"i":"16","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":2,"i":"17","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":2,"i":"18","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":2,"i":"19","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":4,"i":"20","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":5,"i":"21","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":6,"i":"22","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":4,"i":"23","moved":false,"static":false},{"w":1,"h":4,"x":2,"y":3,"i":"24","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":5,"i":"25","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":6,"i":"26","moved":false,"static":false},{"w":1,"h":1,"x":9,"y":2,"i":"27","moved":false,"static":false},{"w":1,"h":1,"x":11,"y":0,"i":"28","moved":false,"static":false},{"w":1,"h":1,"x":10,"y":2,"i":"29","moved":false,"static":false},{"w":1,"h":1,"x":8,"y":2,"i":"30","moved":false,"static":false},{"w":8,"h":3,"x":3,"y":3,"i":"31","moved":false,"static":false},{"w":5,"h":2,"x":6,"y":0,"i":"32","moved":false,"static":false},{"w":1,"h":1,"x":6,"y":6,"i":"33","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":6,"i":"34","moved":false,"static":false},{"w":1,"h":1,"x":7,"y":2,"i":"35","moved":false,"static":false},{"w":1,"h":1,"x":6,"y":2,"i":"36","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":6,"i":"37","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":6,"i":"38","moved":false,"static":false},{"w":1,"h":1,"x":8,"y":6,"i":"39","moved":false,"static":false},{"w":1,"h":1,"x":7,"y":6,"i":"40","moved":false,"static":false},{"w":1,"h":1,"x":11,"y":6,"i":"41","moved":false,"static":false},{"w":1,"h":1,"x":10,"y":6,"i":"42","moved":false,"static":false},{"w":1,"h":1,"x":9,"y":6,"i":"43","moved":false,"static":false},{"w":1,"h":5,"x":11,"y":1,"i":"44","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":7,"i":"45","moved":false,"static":false},{"w":1,"h":1,"x":11,"y":7,"i":"46","moved":false,"static":false},{"w":10,"h":1,"x":1,"y":7,"i":"47","moved":false,"static":false}]

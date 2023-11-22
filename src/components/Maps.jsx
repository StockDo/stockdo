import { useState, useEffect } from "react";
import axios from "axios";
import RGL, { WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
// import "../../node_modules/react-resizable/css/styles.css";
const ReactGridLayout = WidthProvider(RGL);
export default function Maps() {
  const [edit, setEdit] = useState(true);

  const [userLayout, setUserLayout] = useState(
    JSON.parse(localStorage.getItem("layout")) || [
      {
        w: 10,
        h: 10,
        x: 10,
        y: 10,
        i: 0,
        moved: false,
        static: false,
      },
    ]
  );

  const handleLayoutChange = (newLayout) => {
    // setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));
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
      <div className={`bg-white pr-12 pb-24 ml-96 mt-44`}>
        <div className="flex items-center gap-5 mb-12">
          <button
            onClick={() => setEdit(!edit)}
            className="py-1 px-7 border border-orange-400 text-orange-400 text-2xl rounded-md">
            Editar
          </button>
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
        </div>
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={6}
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
      </div>
    </div>
  );
}

// LS sample data:

// [{"w":1,"h":1,"x":0,"y":0,"i":"0","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":1,"i":"1","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":0,"i":"2","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":1,"i":"3","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":1,"i":"4","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":0,"i":"5","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":0,"i":"6","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":0,"i":"7","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":0,"i":"8","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":1,"i":"9","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":1,"i":"10","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":1,"i":"11","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":2,"i":"12","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":3,"i":"13","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":3,"i":"14","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":2,"i":"15","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":2,"i":"16","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":2,"i":"17","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":2,"i":"18","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":2,"i":"19","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":4,"i":"20","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":5,"i":"21","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":6,"i":"22","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":4,"i":"23","moved":false,"static":false},{"w":1,"h":4,"x":2,"y":3,"i":"24","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":5,"i":"25","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":6,"i":"26","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":3,"i":"27","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":6,"i":"28","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":5,"i":"29","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":4,"i":"30","moved":false,"static":false},{"w":2,"h":4,"x":3,"y":3,"i":"31","moved":false,"static":false},{"w":6,"h":1,"x":0,"y":7,"i":"32","moved":false,"static":false},{"w":1,"h":1,"x":0,"y":8,"i":"33","moved":false,"static":false},{"w":1,"h":1,"x":3,"y":8,"i":"34","moved":false,"static":false},{"w":1,"h":1,"x":4,"y":8,"i":"35","moved":false,"static":false},{"w":1,"h":1,"x":5,"y":8,"i":"36","moved":false,"static":false},{"w":1,"h":1,"x":1,"y":8,"i":"37","moved":false,"static":false},{"w":1,"h":1,"x":2,"y":8,"i":"38","moved":false,"static":false}]

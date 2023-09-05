import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="">
      <div className="">
        <Navbar />
      </div>
    </main>
  );
}

export default App;

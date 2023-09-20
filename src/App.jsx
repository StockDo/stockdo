import { HashRouter } from "react-router-dom";
import Router from "./Router";
import ScrollRestoration from "./utils/scroll_restoration";

function App() {
  return (
    <HashRouter>
      <ScrollRestoration />
      <Router />
    </HashRouter>
  );
}

export default App;

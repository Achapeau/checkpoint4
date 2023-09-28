import { BrowserRouter } from "react-router-dom";

import "./Index.css";
import AppRoutes from "./routes/AppRoutes";
import NavBarTop from "./components/NavBarTop";
import NavBarBottom from "./components/NavBarBottom";

function App() {
  return (
    <BrowserRouter>
      <NavBarTop />
      <AppRoutes />
      <NavBarBottom />
    </BrowserRouter>
  );
}

export default App;

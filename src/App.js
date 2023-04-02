import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import "@fontsource/roboto";
import { Order } from "./pages/order/order";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;

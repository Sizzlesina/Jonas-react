/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

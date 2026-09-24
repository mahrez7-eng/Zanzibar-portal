import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Browse from "./pages/Browse";
import Unguja from "./pages/Unguja";
import Pemba from "./pages/Pemba";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/unguja" element={<Unguja />} />
        <Route path="/pemba" element={<Pemba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
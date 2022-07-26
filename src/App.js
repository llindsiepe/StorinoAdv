import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/about";
import Areas from "./pages/areas";
import Colaborators from "./pages/colaborators";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="areas" element={<Areas />} />
        <Route path="colaborators" element={<Colaborators />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

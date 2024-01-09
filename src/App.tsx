import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About_us";
import Shop from "./pages/Shop";
import Conctact from "./pages/Contact";
import NotPages from "./pages/NoPages";
import Registr from "./pages/Registr";
import Card from "./pages/Card";

export default function App(){
  return(
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Shop" element={<Shop/>} />
            <Route path="/Card" element={<Card/>} />
            <Route path="/About_us" element={<About/>} />
            <Route path="/Contact" element={<Conctact/>} />
            <Route path="/Registr" element={<Registr/>}/>
            <Route path="*" element={<NotPages/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
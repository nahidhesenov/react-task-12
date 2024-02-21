import { Route, Routes } from "react-router";
import Home from "../Companent/HomeComp";
import Women from "../Companent/WomenComp";
import Mens from "../Companent/MenComp";
import Kids from "../Companent/KidsComp";
import TheCompanent from "../Companent/TheComp";



export default function RouresCompanent(){

 return(
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Mens/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/the/:id" element={<TheCompanent/>} />
    </Routes>
    </>
 )

} 
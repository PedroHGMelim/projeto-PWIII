import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./components/LoginScreen";
import Register from "./components/RegisterScreen";

function AppRoutes() {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Register />} path="/Register" />
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;
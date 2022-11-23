import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage";
import ProdutoId from "../pages/Produto";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/produto/:id" element={<ProdutoId/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router
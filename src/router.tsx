import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import InquryRegistration from "./pages/Inqury";

export const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/inqury/regstration" element={<InquryRegistration />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
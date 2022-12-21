import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
};

export default AppRouter;

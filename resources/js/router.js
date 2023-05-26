import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Layout from "./components/Layout";
import Homepage from "./components/client/Homepage";

export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route exact path="/" element={<Layout><Homepage /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

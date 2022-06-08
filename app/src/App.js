import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import Home from "./pages/home/Home";
import Expense from "./pages/expense/Expense";
import Account from "./pages/account/Account";
import "./App.css";
import { useState } from "react";
import { SidebarContext } from "./contexts/Context.js";


function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="expense-tracker">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="home"
            element={
              <SidebarContext.Provider value={{ sidebar, setSidebar }}>
                <Home />
              </SidebarContext.Provider>
            }
          />
          <Route
            path="expense"
            element={
              <SidebarContext.Provider value={{ sidebar, setSidebar }}>
                <Expense />
              </SidebarContext.Provider>
            }
          />
          <Route
            path="account"
            element={
              <SidebarContext.Provider value={{ sidebar, setSidebar }}>
                <Account />
              </SidebarContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

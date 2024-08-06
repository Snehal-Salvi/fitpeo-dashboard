import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Sidebar />
      <main className="mainContent">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;

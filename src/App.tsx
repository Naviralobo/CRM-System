import { Route, Routes } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Leads from "./Pages/Leads";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/leads" element={<Leads />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

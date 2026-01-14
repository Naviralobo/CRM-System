import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Leads from "./Pages/Leads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/Leads" element={<Leads />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

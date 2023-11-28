import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ContextProivider } from "./Context/userContext";
import PageHome from "./components/PageHome/PageHome";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Dashboard from "./Admin/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <ContextProivider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageHome />} />
          {/* Admin */}
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </ContextProivider>
    </div>
  );
}

export default App;

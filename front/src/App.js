import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewClient from "./pages/admin/NewClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="Mcontainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<NewClient />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

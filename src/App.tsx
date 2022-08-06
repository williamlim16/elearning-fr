import { Routes, Route } from "react-router-dom";
import Todos from "./pages/Todo";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

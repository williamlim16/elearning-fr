import { Routes, Route } from "react-router-dom";
import Todos from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import TestSocket from "./pages/TestSocket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/test" element={<TestSocket />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import {
  Archives,
  Error,
  Home,
  Login,
  Notes,
  Profile,
  Tags,
  Trash,
} from "pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
        <Route path="/archives" element={<Archives />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

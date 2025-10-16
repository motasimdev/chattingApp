import "./App.css";
import { Routes, Route } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/logIn" element={<LogIn/>} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

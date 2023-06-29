import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to='welcome'/>} />
        <Route path="/welcome/*" element={<p>WELCOME TO MY PAGE</p>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </main>
  );
}

export default App;

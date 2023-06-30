import { Navigate, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import PhonesPage from "./pages/PhonesPage";
import NavBar from "./components/header/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="welcome" />} />
          <Route path="/welcome/*" element={<p>WELCOME TO MY PAGE</p>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/phones" element={<PhonesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

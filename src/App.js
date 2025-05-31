import { Route, Routes } from "react-router-dom";
import LoginPage from "./modules/Login/LoginPage";
import SignUp from "./modules/SignUp/SignUp";
import Home from "./modules/Home/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Onboarding from "./modules/Onboarding/Onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;

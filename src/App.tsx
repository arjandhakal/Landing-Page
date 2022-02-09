import "./assets/styles/main.scss";
import { Home as HomePage } from "./Pages/Home/Home";
import { Privacy as PrivacyPage } from "./Pages/Privacy/Privacy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/login-form";
import { RegisterForm } from "./pages/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

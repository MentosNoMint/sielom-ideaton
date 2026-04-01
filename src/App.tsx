import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ViewPage from "./pages/ViewPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

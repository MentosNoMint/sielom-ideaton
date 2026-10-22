import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ViewPage from "./pages/ViewPage.tsx";
import Vibe from "./pages/Vibe.tsx";
import VibeView from "./pages/VibeView.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vibe />} />
        <Route path="/view" element={<VibeView />} />
        {/* старый идеатон */}
        <Route path="/ideaton" element={<Home />} />
        <Route path="/ideaton/view" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

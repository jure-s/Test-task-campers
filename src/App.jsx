import { BrowserRouter as Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Catalog from "./pages/catalog/catalog";
import Favorites from "./pages/favorites/favorites";
import ErrorPage from "./pages/error-page/error-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

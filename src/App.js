import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Catalog from "./pages/catalog/catalog";
import Favorites from "./pages/favorites/favorites";
import Navigation from "./components/navigation/navigation";
import ErrorPage from "./pages/error-page/error-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

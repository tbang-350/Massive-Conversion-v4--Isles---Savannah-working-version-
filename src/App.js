import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import Day3 from "./pages/Day3";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import SafariBlue from "./pages/SafariBlue";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/packagespage":
        title = "";
        metaDescription = "";
        break;
      case "/3day":
        title = "";
        metaDescription = "";
        break;
      case "/2day":
        title = "";
        metaDescription = "";
        break;
      case "/4day":
        title = "";
        metaDescription = "";
        break;
      case "/6day":
        title = "";
        metaDescription = "";
        break;
      case "/7day":
        title = "";
        metaDescription = "";
        break;
      case "/safariblue":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/packagespage" element={<PackagesPage />} />
      <Route path="/3day" element={<Day3 />} />
      <Route path="/2day" element={<Day1 />} />
      <Route path="/4day" element={<Day2 />} />
      <Route path="/6day" element={<Day6 />} />
      <Route path="/7day" element={<Day7 />} />
      <Route path="/safariblue" element={<SafariBlue />} />
    </Routes>
  );
}
export default App;

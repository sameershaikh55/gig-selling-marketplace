import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Landing from "./screens/Landing";
import SearchResults from "./screens/SearchResults";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PostView from "./screens/PostView";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search-results" element={<SearchResults />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/post-view" element={<PostView />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

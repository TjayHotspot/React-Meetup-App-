import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import PageNotFound from "./pages/PageNotFound";

function App() {
  {/* Layout component passes the Routes automatically as a children prop to the Layout component 
      (children props are automatically created when enclosed in open and closed tags of a component) */}
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetups />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/NewMeetup" element={<NewMeetup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

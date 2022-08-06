import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Main from "./routes/main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/main"} element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechnologyPage from "./pages/TechnologyPage";
import QnAPage from "./pages/QnAPage";
import Main from "./pages/Main";

const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/qna" element={<QnAPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
      

    </div>
  );
};



export default App;

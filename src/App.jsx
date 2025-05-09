import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechnologyPage from "./pages/TechnologyPage";
import QnAPage from "./pages/QnAPage";
import Main from "./pages/Main";
import SupabaseTest from "./components/SupabseTest.jsx";
import GuideInfo from "./pages/GuideInfo.jsx";

const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/qna" element={<QnAPage />} />
        <Route path="/guide" element={<GuideInfo/>} />
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<SupabaseTest />} />

          {/*  */}
      </Routes>
      <Footer />
    </Router>
      

    </div>
  );
};



export default App;

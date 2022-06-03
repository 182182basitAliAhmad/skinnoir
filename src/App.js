import './App.css';
import Nav from './Components/Nav/Nav';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Footer from './Components/Navbar/Footer/Footer';
import Carousal from './Components/Carousal/Carousal';
import CategoryHeader from './Components/CategoryHeader/CategoryHeader';
import BrowsingMain from './Components/BrowsingMain/BrowsingMain';
import FAQs from './Components/FAQs/FAQs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <Router>
        <Navbar currentPage={currentPage} currentPageSetter={setCurrentPage} />
        <Routes>
          <Route path="/" element={<>
            <Carousal />
            <CategoryHeader/>
          </>
          } />


          <Route path="/browse" element={<div>
            <Nav />
            <div className="container-xxl my-md-4 bd-layout">
              <Sidebar />
              <BrowsingMain/>
            </div>
          </div>} />

          <Route path="/community" element={<h1>Community</h1>} />

          <Route path="/faqs" element={<FAQs/>} />

          <Route path="/about" element={<h1>about</h1>} />

          <Route path="/signin" element={<SignIn isLoggedIn={isLoggedIn} isLoggedInSetter={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>


      </Router>
      <Footer />

    </>
  );
}

export default App;

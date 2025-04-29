import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import PostDetail from "./PostDetail";
import NewPost from "./New Post";
import About from "./About";
import './App.css';



const App = () => {
  return (
    <div>
      
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="new" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
};

export default App;

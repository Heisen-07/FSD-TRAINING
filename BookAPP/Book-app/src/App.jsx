import React from "react";
import Book from "./component/Book";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default App;

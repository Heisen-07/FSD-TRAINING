// import { useState } from 'react'
// import './App.css'

// function Card({ title, price, image }) {
//   return (
//     <div id='card' style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", margin: "10px", textAlign: "center", width: "200px", height:"250px"}}>
//       <img src={image} alt={title} height={150} width={150} style={{ borderRadius: "8px" }} />
//       <h4>Title: {title}</h4>
//       <h4>Price: ₹{price}</h4>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)

//   const products = [
//     { id: 1, title: "Stylish Jacket", price: 1999, image: "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg" },
//     { id: 2, title: "Trendy Shoes", price: 2999, image: "https://images.pexels.com/photos/9932193/pexels-photo-9932193.jpeg" },
//     { id: 3, title: "Casual Hat", price: 499, image: "https://images.pexels.com/photos/34667580/pexels-photo-34667580.jpeg" }
//   ]

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>FASHION SHOW</h1>
//       <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//         {products.map((item) => (
//           <Card key={item.id} title={item.title} price={item.price} image={item.image} />
//         ))}
//       </div>
//       <button onClick={() => setCount(count + 1)}>Likes ❤️ {count}</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import Fashion from './Fashion';
import './App.css'; // optional if you want general styling

function App() {
  const [fa1, setFa1] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setFa1(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app-container">
      <h1>🖤 FASHION SHOW 🖤</h1>
      <div className="card-container">
        {fa1.map((f, i) => (
          <Fashion key={i} title={f.title} price={f.price} image={f.image} />
        ))}
      </div>
    </div>
  );
}

export default App;


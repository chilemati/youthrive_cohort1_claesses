import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Car from "./components/car/Car";
import Cat from "./components/cat/Cat";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  // document.write('<p> This is paragraph one </p>')
  let Name = "Amadi Chile";
  function showPrice() {
    alert("My price is $200 only");
  }

  return (
    <div id="App">
      <Nav />
      {/* <p>Lorem ipsum dolor sit amet.</p>
      <h3>heading 3</h3>
      <p>My Name is {Name} </p>
      <Car brand="Ford" tyre={4} showPrice={showPrice} />
      <Car />
      <Car />
      <Cat /> */}
      {/* router step 2 */}
      <Routes>
        <Route path="/" element={<Car />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;

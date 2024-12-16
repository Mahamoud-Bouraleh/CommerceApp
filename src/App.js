import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./composant/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import "./App.css"; // Ajout des styles

const App = () => {
    const [cart, setCart] = useState(5);

    return (
        <div className="container">
            <Header cart={cart} setCart={setCart} />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Cart" element={<Cart setCart={setCart} />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;

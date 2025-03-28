import './App.css';
import MemoryBild from './memory/MemoryBild.jsx';
import MemoryNavBar from "./memory/MemoryNavBar.jsx";
import { useState } from "react";

function App() {
    const [random, setRandom] = useState(1);

    function randomisePicture() {
        setRandom(Math.floor(Math.random() * 6) + 1);
    }

    return (
        <div>
            <h1 className="filler">filler</h1>
            <div className="flex-container">
                {Array(12).fill().map((_, index) => (
                    <MemoryBild key={index} bildState={random} />
                ))}
                <MemoryNavBar callback={randomisePicture} />
            </div>
        </div>
    );
}

export default App;

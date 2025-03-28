import './App.css';
import MemoryBild from './memory/MemoryBild.jsx';
import MemoryNavBar from "./memory/MemoryNavBar.jsx";
import {useState} from "react";

function App() {
    const [random, setRandom] = useState(0);

    function randomisePicture() {
        setRandom(Math.floor(Math.random() * 3));
    }

    return (
        <div>
            <h1 className="filler">filler</h1>
            <div className="flex-container">
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryBild bildState={random} />
                <MemoryNavBar callback={randomisePicture} />
            </div>
        </div>
    );
}

export default App;

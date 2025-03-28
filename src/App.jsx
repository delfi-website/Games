import './App.css';
import MemoryBild from './memory/MemoryBild.jsx';
import MemoryNavBar from "./memory/MemoryNavBar.jsx";
import { useState, useEffect } from "react";

function App() {
    const [pictures, setPictures] = useState([]);
    const [resetState, setResetState] = useState(false);
    const [lock, setLock] = useState(false);

    useEffect(() => {
        const images = [1, 2, 3, 4, 5, 6];
        const doubleImages = [...images, ...images];
        const shuffledImages = shuffleArray(doubleImages);
        setPictures(shuffledImages);
    }, []);

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    function resetAll()  {
        randomisePictures()
        hideAllPictures()
        setLock(false)

    }
    function randomisePictures() {
        const images = [1, 2, 3, 4, 5, 6];
        const doubleImages = [...images, ...images];
        const shuffledImages = shuffleArray(doubleImages);
        setPictures(shuffledImages);
    }

    function hideAllPictures() {
        setResetState(true);
        setTimeout(() => setResetState(false), 500);
    }

    return (
        <div>
            <h1 className="filler">Filler</h1>
            <h1 className="filler">Filler</h1>
            <h1 className="filler">Filler</h1>
            <h1 className="filler">Filler</h1>
            <div className="flex-container">
                {pictures.map((random, index) => (
                    <MemoryBild
                        key={index}
                        bildState={random}
                        resetState={resetState}
                        lock={lock}
                    />
                ))}
                <MemoryNavBar
                    callback={randomisePictures}
                    callback2={hideAllPictures}
                    callback3={resetAll}
                />
            </div>
        </div>
    );
}

export default App;

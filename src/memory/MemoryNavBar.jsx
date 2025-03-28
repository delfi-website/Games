import "./Memory.css";
import { useState } from "react";

export default function MemoryNavBar({ callback, callback2, callback3 }) {
    const [pointsA, setPointsA] = useState(0);
    const [pointsB, setPointsB] = useState(0);

    function reset() {
        callback2();
        setPointsA(0);
        setPointsB(0);
        callback3();
    }

    if (pointsA === 4) {
        alert("Player A has won!");
        reset();
    } else if (pointsB === 4) {
        alert("Player B has won!");
        reset();
    } else if (pointsA + pointsB === 6) {
        alert("It's a tie!");
        reset();
    }

    return (
        <div className="navbar">
            <h2>Memory</h2>
            <h3>Player A has {pointsA} points. | Player B has {pointsB} points.</h3>
            <input type="button" value="Add Points to A" onClick={() => setPointsA(pointsA + 1)} />
            <input type="button" value="Reset" onClick={reset} />
            <input type="button" value="Add Points to B" onClick={() => setPointsB(pointsB + 1)} />
            <h1 className="filler">Filler</h1>
        </div>
    );
}

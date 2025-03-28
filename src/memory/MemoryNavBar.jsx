import "./Memory.css";
import { useState } from "react";

export default function MemoryNavBar({ callback, callback2, callback3 }) {
    const [pointsA, setPointsA] = useState(0);
    const [pointsB, setPointsB] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const maxPoints = 4

    function reset() {
        callback2();
        setPointsA(0);
        setPointsB(0);
        callback3();
        alert("Game has reset");
    }

    if (pointsA === maxPoints) {
        alert("Player A has won!");
        reset();
    } else if (pointsB === maxPoints) {
        alert("Player B has won!");
        reset();
    } else if (pointsA + pointsB === (maxPoints*2-2)) {
        alert("It's a tie!");
        reset();
    }

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <h2>Memory</h2>
            <h3>Player A has {pointsA} points. | Player B has {pointsB} points.</h3>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <input type="button" value="Add Points to A" onClick={() => setPointsA(pointsA + 1)} />
                <input type="button" value="Reset" onClick={reset} />
                <input type="button" value="Add Points to B" onClick={() => setPointsB(pointsB + 1)} />
                <input type="button" value="How to play?" onClick={openModal} />
            </div>

            {isModalOpen && (
                <dialog open className="modal">
                    <button onClick={closeModal} className="modal-close-btn">Close</button>
                    <ul>
                        <li>Devices requiered: 1</li>
                        <li>Players requiered: 2</li>
                    </ul>
                    <h2>How to play:</h2>
                    <p>Player 1 shows two cards. If they match, he locks them and gives himself a point.</p>
                    <p>If not, he hides both of them and its Player B's turn. He also shows two cards and if they match, he gives himself a point.</p>
                    <p>Afther that, its Player A's turn again and he repeats the actions of the previos turn...</p>
                    <p>The Game ends if one player reaches {maxPoints} Points or both Players reach {maxPoints-1} Points. If this happens, the Game will automaticly reset itself.</p>
                </dialog>
            )}

            <h1 className="filler">Filler</h1>
        </div>
    );
}

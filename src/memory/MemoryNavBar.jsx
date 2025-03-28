import "../App.css";

export default function MemoryNavBar({callback}) {
    return (
        <div className="navbar">
            <p>Memory</p>
            <input type="button" value="Randomise Pictures" onClick={callback} />
        </div>
    );
}

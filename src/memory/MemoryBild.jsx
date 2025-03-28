import { useState } from "react";
import questionmark from "../assets/questionmark.png";
import stadler_kiss from "../assets/kiss.png";
import stadler_flirt from "../assets/flirt.png";
import stadler_smile from "../assets/giruno.png";
import "../App.css";

export default function MemoryBild({bildState}) {
    const [publicBildState, setPublicBildState] = useState(0);

    function showPicture() {
        setPublicBildState(bildState);
    }

    function unshowPicture() {
        setPublicBildState(0);
    }

    const renderImage = () => {
        if (publicBildState === 0) {
            return <img src={questionmark} height="200" width="200" alt="questionmark" />;
        } else if (publicBildState === 1) {
            return <img src={stadler_kiss} height="200" width="200" alt="kiss" />;
        } else if (publicBildState === 2) {
            return <img src={stadler_flirt} height="200" width="200" alt="flirt" />;
        } else if (publicBildState === 3) {
            return <img src={stadler_smile} height="200" width="200" alt="smile" />;
        }
    };

    return (
        <div className="component">
            <p>{renderImage()}</p>
            <input type="button" value="Show Picture" onClick={showPicture} />
            <input type="button" value="Hide Picture" onClick={unshowPicture} />
        </div>
    );
}

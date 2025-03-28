import { useState, useEffect } from "react";
import questionmark from "../assets/questionmark.png";
import stadler_kiss from "../assets/kiss.png";
import stadler_flirt from "../assets/flirt.png";
import stadler_smile from "../assets/giruno.png";
import lok2000 from "../assets/lok2000.png";
import icn from "../assets/icn.png";
import re420 from "../assets/re420.png";
import "../App.css";

export default function MemoryBild({ bildState, resetState }) {
    const [publicBildState, setPublicBildState] = useState(0);
    const [lockedBildState, setLockedBildState] = useState(0);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        if (resetState) {
            setPublicBildState(0);
            setIsLocked(false);
        }
    }, [resetState]);

    function showPicture() {
        if (!isLocked) {
            setPublicBildState(bildState);
        }
    }

    function unshowPicture() {
        if (!isLocked) {
            setPublicBildState(0);
        }
    }

    function lockPicture() {
        setIsLocked(true);
        setLockedBildState(bildState);
    }

    const renderImage = () => {
        if (isLocked) {
            switch (lockedBildState) {
                case 0:
                    return <img src={questionmark} height="200" width="200" alt="questionmark"/>;
                case 1:
                    return <img src={stadler_kiss} height="200" width="200" alt="kiss"/>;
                case 2:
                    return <img src={stadler_flirt} height="200" width="200" alt="flirt"/>;
                case 3:
                    return <img src={stadler_smile} height="200" width="200" alt="smile"/>;
                case 4:
                    return <img src={icn} height="200" width="200" alt="icn"/>;
                case 5:
                    return <img src={lok2000} height="200" width="200" alt="lok2000"/>;
                case 6:
                    return <img src={re420} height="200" width="200" alt="re420"/>;
                default:
                    return null;
            }
        } else {
            switch (publicBildState) {
                case 0:
                    return <img src={questionmark} height="200" width="200" alt="questionmark"/>;
                case 1:
                    return <img src={stadler_kiss} height="200" width="200" alt="kiss"/>;
                case 2:
                    return <img src={stadler_flirt} height="200" width="200" alt="flirt"/>;
                case 3:
                    return <img src={stadler_smile} height="200" width="200" alt="smile"/>;
                case 4:
                    return <img src={icn} height="200" width="200" alt="icn"/>;
                case 5:
                    return <img src={lok2000} height="200" width="200" alt="lok2000"/>;
                case 6:
                    return <img src={re420} height="200" width="200" alt="re420"/>;
                default:
                    return null;
            }
        }
    };

    return (
        <div className="component">
            <p>{renderImage()}</p>
            <input type="button" value="Show Picture" onClick={showPicture} />
            <input type="button" value="Hide Picture" onClick={unshowPicture} />
            <input type="button" value="Lock picture" onClick={lockPicture}/>
        </div>
    );
}

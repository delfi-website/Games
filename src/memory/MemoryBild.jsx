import {useState} from "react";
import questionmark from "../assets/questionmark.png"
import stadler_kiss from "../assets/kiss.png"
import stadler_flirt from "../assets/flirt.png"
import stadler_smile from "../assets/giruno.png"
export default function MemoryBild() {
    /*
    0 = verdeckt
    1 = kiss
    2 = flirt
    3 = smile
     */
    const [publicBildState, setPublicBildState] = useState(0)
    const [bildState, setBildState] = useState(0)

    function randomisePicture() {
        setBildState(Math.floor(Math.random()* 3))
        alert("Picture State is " + bildState)
    }

    return (
        <div>
            <div>
            <img src={questionmark} height="300" width="300"/>

        </div>
            <input type="button"
                   value="Randomise Picture"
                   onClick={ randomisePicture }
            />
        </div>
    )
}
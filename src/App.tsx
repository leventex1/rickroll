import { useEffect, useState } from "react"
import "./App.css"
import frames from "./modules/ascii-rickroll-js/script"


const frameRate = 7

function App() {
    const [frameIndex, setFrameIndex] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setFrameIndex(prev => (prev + 1) % frames.length)
            console.log("next frame")
        }, 1000 / frameRate)
    }, [])
    
    return (
        <div className="screen-container">
            <h1>You Just Got Rickrolled</h1>
            <pre>
                {frames[frameIndex]}
            </pre>
        </div>
    )
}

export default App

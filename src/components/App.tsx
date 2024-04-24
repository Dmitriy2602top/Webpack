import { useState } from "react";
import './App.scss';

const App = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <button className="button-counter" onClick={() => setCounter(counter + 1)}> <span className="uppercase">Click</span> </button>
            hello world!!! {counter}
        </div>
    )
}

export default App

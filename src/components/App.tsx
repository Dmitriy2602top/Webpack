import { useState } from "react";
// import { Button } from "../shared/Button";
import styles from './global.module.scss'

const App = () => {

    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <button
                className={styles.button}
                onClick={() => setCounter(counter + 1)}
            >
                <span className="uppercase">Click</span>
            </button>
            hello world!!! {counter}
        </div>
    );
};

export default App;

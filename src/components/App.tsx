import { useState } from "react";

import styles from './global.module.scss'
import { Button } from "~/shared/Button";
import { Link, Outlet } from "react-router-dom";

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
            <div className={styles.links}>
                <Link to={'/one'}>Page 1</Link>
                <Link to={'/two'}>Page 2</Link>
                <Link to={'/'}>Main</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default App;

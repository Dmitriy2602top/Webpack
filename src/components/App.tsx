import { useState } from "react";
import styles from './global.module.scss'
import { Link, Outlet } from "react-router-dom";
import { ButtonPrimary } from "~/shared/ui";

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
                <Link to={'/'}>Main page</Link>
            </div>
            <ButtonPrimary>Custom Button</ButtonPrimary>
            <Outlet />
        </div>
    );
};

export default App;

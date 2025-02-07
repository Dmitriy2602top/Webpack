import { Link, Outlet } from "react-router-dom";
import Button from "~/shared/ui/button";
import styles from "./page1.module.scss";

const PageOne = () => {
  return (
    <div>
      <div>
        <Link to={"/two"}>Page 2</Link>
        <Link to={"/"}>Main page</Link>
      </div>
      <Button className={styles.button}> click me !!!</Button>
      <Outlet />
    </div>
  );
};

export default PageOne;

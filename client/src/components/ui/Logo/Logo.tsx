import styles from "./Logo.module.scss";
import {NavLink} from "react-router";

const Logo = () => {
    return (
        <NavLink to={"/"}>
            <img src={"/Logo.svg"} alt={"Logo"} className={styles.Logo} />
        </NavLink>
    );
}

export default Logo;
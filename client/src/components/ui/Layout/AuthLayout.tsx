import styles from "./Layout.module.scss";
import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
        <section className={styles.Auth}>

            <main>
                <Outlet />
            </main>

        </section>
    )
}

export default AuthLayout;
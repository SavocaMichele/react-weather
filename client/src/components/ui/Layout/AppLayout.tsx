import styles from "./Layout.module.scss";
import { Outlet } from "react-router";
import Sidebar from "@ui/Layout/inc/Sidebar.tsx";


const AppLayout = () => {
    return (
        <section className={styles.Layout}>
            <Sidebar />

            <main className={styles.Main}>
                <Outlet />
            </main>
        </section>
    )
}

export default AppLayout;
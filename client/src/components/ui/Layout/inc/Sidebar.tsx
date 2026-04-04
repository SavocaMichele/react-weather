import styles from './../Layout.module.scss';
import Stack from "@ui/Stack/Stack.tsx";
import {NavLink} from "react-router";
import {useTranslation} from "react-i18next";
import type {IconName} from "@ui/Icon/iconNames.ts";
import Tooltip from "@ui/Tooltip/Tooltip.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import Logo from "@ui/Logo/Logo.tsx";


const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <aside className={styles.Sidebar}>

            <Stack flexDirection={"column"} alignItems={"center"} className={styles.LogoWrapper}>
                <Logo />
            </Stack>

            <Stack flexDirection={"column"} alignItems={"center"} gap={"2xl"} className={styles.Navigation}>
                <NavItem path={"/"} icon={"Dashboard"} title={t("DASHBOARD")} />
                <NavItem path={"/locations"} icon={"Compass"} title={t("LOCATIONS")} />
                <NavItem path={"/favorites"} icon={"Heart"} title={t("FAVORITES")} />
                <NavItem path={"/settings"} icon={"Settings"} title={t("LOCATIONS")} />
            </Stack>

        </aside>
    )
}


const NavItem = (props: {path: string, icon: IconName, title: string}) => {
    return (
        <Tooltip content={props.title} side={"right"}>
            <NavLink to={props.path} className={styles.NavItem}>
                <Icon icon={props.icon} />
            </NavLink>
        </Tooltip>
    )
}

export default Sidebar;
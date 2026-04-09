import styles from './../Layout.module.scss';
import Stack from "@ui/Stack/Stack.tsx";
import {NavLink} from "react-router";
import {useTranslation} from "react-i18next";
import type {IconName} from "@ui/Icon/iconNames.ts";
import Tooltip from "@ui/Tooltip/Tooltip.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import Logo from "@ui/Logo/Logo.tsx";
import {useUserContext} from "@/context/user-context.tsx";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import clsx from "clsx";


const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <aside className={styles.Sidebar}>

            <Stack flexDirection={"column"} alignItems={"center"} className={styles.LogoWrapper}>
                <Logo />
            </Stack>

            <Stack flexDirection={"column"} gap={"4xl"} height={"grow"}>
                <Stack flexDirection={"column"} alignItems={"center"} gap={"2xl"} height={"grow"} className={styles.Navigation}>
                    <NavItem path={"/"} icon={"Dashboard"} title={t("DASHBOARD")} />
                    {/*<NavItem path={"/locations"} icon={"Compass"} title={t("LOCATIONS")} />*/}
                    <NavItem path={"/favorites"} icon={"Heart"} title={t("FAVORITES")} />
                    <NavItem path={"/settings"} icon={"Settings"} title={t("LOCATIONS")} />
                </Stack>

                <User />
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


const User = () => {
    const { user, isLoading } = useUserContext();
    const { t } = useTranslation();

    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map(n => n[0]).join("");
        return initials.toUpperCase();
    }

    return isLoading
        ? (
            <Skeleton height={"48px"} width={"48px"} circle />
        )
        : (
            <>
                {user
                    ? (
                        <div className={clsx(styles.User, styles["--logged-in"])}>
                            <Typo
                                size={"lg"}
                                align={"center"}
                                weight={"bold"}
                            >
                                {getInitials(user.username)}
                            </Typo>
                        </div>
                    )
                    : (
                        <Tooltip content={t("SIGN_IN")} side={"right"}>
                            <NavLink to={"/auth"} className={styles.User}>
                                <Icon icon={"User"} color={"light"} />
                            </NavLink>
                        </Tooltip>
                    )
                }
            </>
        )
}

export default Sidebar;
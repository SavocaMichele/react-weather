import styles from "./Settings.module.scss";
import Typo from "@ui/Typo/Typo.tsx";
import {useTranslation} from "react-i18next";
import Box from "@ui/Box/Box.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import SettingsButton from "@/components/SettingsButton/SettingsButton.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import {type Appearance, useAppearance} from "@/hooks/useAppearance.tsx";
import {useUserContext} from "@/context/user-context.tsx";


const Settings = () => {
    const {t, i18n} = useTranslation();
    const { user, logout } = useUserContext();
    const { updateAppearance, resolvedAppearance } = useAppearance();

    const changeLanguage = (lng: string) => {
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    }

    return (
        <Stack flexDirection={"column"} gap={"5xl"} className={styles.Settings}>
            <Typo size={"5xl"} weight={"semibold"}>{t("SETTINGS")}</Typo>

            <div className={styles.Content}>
                <Stack flexDirection={"column"} gap={"5xl"}>
                    <Stack flexDirection={"column"} gap={"md"}>
                        <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("APP_SETTINGS")}</Typo>

                        <Box flexDirection={"column"} gap={"md"} inset={"lg"} width={"auto"}>
                            <SettingsButton
                                title={t("LIGHT_MODE")}
                                value={"light"}
                                icon={<Icon icon={"Sun"} />}
                                callback={(value) => updateAppearance(value as Appearance)}
                                active={resolvedAppearance === "light"}
                            />

                            <SettingsButton
                                title={t("DARK_MODE")}
                                value={"dark"}
                                icon={<Icon icon={"Moon"} />}
                                callback={(value) => updateAppearance(value as Appearance)}
                                active={resolvedAppearance === "dark"}
                            />
                        </Box>
                    </Stack>


                    <Stack flexDirection={"column"} gap={"md"}>
                        <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("LANG_SETTINGS")}</Typo>

                        <Box flexDirection={"column"} gap={"md"} inset={"lg"} width={"auto"}>
                            <SettingsButton
                                title={t("ENGLISH")}
                                value={"en"}
                                icon={<Typo weight={"bold"}>EN</Typo>}
                                callback={(value) => changeLanguage(value)}
                                active={i18n.language === "en"}
                                variant={"primary"}
                            />

                            <SettingsButton
                                title={t("GERMAN")}
                                value={"de"}
                                icon={<Typo weight={"bold"}>DE</Typo>}
                                callback={(value) => changeLanguage(value)}
                                active={i18n.language === "de"}
                                variant={"primary"}
                            />
                        </Box>
                    </Stack>


                    {user && (
                        <Stack flexDirection={"column"} gap={"md"}>
                            <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("SIGN_OUT")}</Typo>

                            <Box flexDirection={"column"} gap={"md"} inset={"lg"} width={"auto"}>
                                <SettingsButton
                                    title={t("SIGN_OUT")}
                                    value={"logout"}
                                    icon={<Icon icon={"User"} />}
                                    callback={() => logout()}
                                    variant={"error"}
                                />
                            </Box>
                        </Stack>
                    )}
                </Stack>
            </div>
        </Stack>
    );
}

export default Settings;
import styles from './Auth.module.scss';
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import Stack from "@ui/Stack/Stack.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import Input from "@ui/Form/Input.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import Button from "@ui/Button/Button.tsx";
import React from "react";
import {useUserContext} from "@/context/user-context.tsx";
import {useAppearance} from "@/hooks/useAppearance.tsx";



const Auth = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const { login, register, user, isLoading }  = useUserContext();
    const { resolvedAppearance }                = useAppearance();

    const [view, setView]                           = React.useState<"login" | "register">("login");
    const [password, setPassword]                   = React.useState("");
    const [confirmPassword, setConfirmPassword]     = React.useState("");
    const [passwordError, setPasswordError]         = React.useState<boolean>(false);

    /** Confirms the password fields match. */
    const validatePassword = () => {
        if (view === "register" && password !== confirmPassword) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    React.useEffect(() => {
        validatePassword();
    }, [password, confirmPassword])


    /** Redirect user if already authenticated. */
    React.useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate])


    /** Handles form submission for login and registration. */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData  = new FormData(e.currentTarget);
        const email     = formData.get("email") as string;
        const password  = formData.get("password") as string;
        const username  = formData.get("username") as string | null;

        if (view === "register") {
            await register(username!, email, password);
        }

        else {
            await login(email, password);
        }
    }


    return (
        <Stack width={"full"} height={"full"} justifyContent={"center"} alignItems={"center"} className={styles.Auth}>

            <div className={styles.Window}>

                <img src={`/auth_bg_${resolvedAppearance}.png`} alt="Auth" className={styles.Image}/>

                <Stack flexDirection={"column"} gap={"4xl"} className={styles.Content}>

                    <Stack flexDirection={"column"} gap={"4xl"} height={"grow"}>
                        <Typo size={"3xl"} weight={"semibold"}>{view === "register" ? t("WELCOME") : t("WELCOME_BACK")}</Typo>

                        <form onSubmit={handleSubmit}>
                            <Stack flexDirection={"column"} gap={"5xl"}>
                                <Stack flexDirection={"column"} gap={"lg"}>
                                    {view === "register" && (
                                        <Input
                                            type={"text"}
                                            name={"username"}
                                            placeholder={t("USERNAME_PLACEHOLDER")}
                                            label={t("USERNAME")}
                                            startItem={<Icon icon={"User"} size={"sm"} color={"light"} />}
                                            required
                                        />
                                    )}

                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeholder={t("EMAIL_PLACEHOLDER")}
                                        label={t("EMAIL")}
                                        startItem={<Icon icon={"Mail"} size={"sm"} color={"light"} />}
                                        required
                                    />

                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeholder={t("PASSWORD_PLACEHOLDER")}
                                        label={t("PASSWORD")}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        startItem={<Icon icon={"Lock"} size={"sm"} color={"light"} />}
                                        error={passwordError}
                                        required
                                    />

                                    {view === "register" && (
                                        <Input
                                            type={"password"}
                                            name={"password_confirmation"}
                                            placeholder={t("PASSWORD_CONFIRMATION_PLACEHOLDER")}
                                            label={t("PASSWORD_CONFIRMATION")}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            startItem={<Icon icon={"Mail"} size={"sm"} color={"light"} />}
                                            error={passwordError}
                                            required
                                        />
                                    )}
                                </Stack>

                                <Stack flexDirection={"column"} alignItems={"center"} gap={"sm"}>
                                    <Button
                                        type={"submit"}
                                        value={view === "register" ? t("SIGN_UP") : t("SIGN_IN")}
                                        width={"full"}
                                        endItem={<Icon icon={"ArrowShortRight"} size={"sm"} />}
                                        disabled={passwordError}
                                        loading={isLoading}
                                    />

                                    {view === "register"
                                        ? (<Typo color={"light"}>Already have an account? <Typo onClick={() => setView("login")} color={"primary"}>Sign in</Typo> instead.</Typo>)
                                        : (<Typo color={"light"}>Don't have an account? <Typo onClick={() => setView("register")} color={"primary"}>Sign up</Typo> for free.</Typo>)
                                    }
                                </Stack>
                            </Stack>
                        </form>
                    </Stack>

                    <Typo size={"xs"} color={"light"}>{t("FORGOT_PASSWORD")}</Typo>
                </Stack>

            </div>

        </Stack>
    )
}

export default Auth;
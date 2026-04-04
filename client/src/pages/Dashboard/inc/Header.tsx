import styles from "./../Dashboard.module.scss";
import Stack from "@ui/Stack/Stack.tsx";
import Input from "@ui/Form/Input.tsx";
import {useTranslation} from "react-i18next";
import {Icon} from "@ui/Icon/Icon.tsx";
import Button from "@ui/Button/Button.tsx";


type HeaderProps = {
    currentLocation: boolean;
    onCurrentLocationClick: () => void;
    isFetchingCurrentLocation: boolean;
};

const Header = ({ currentLocation, onCurrentLocationClick, isFetchingCurrentLocation }: HeaderProps) => {
    const { t } = useTranslation();

    return (
        <header className={styles.Header}>
            <Stack alignItems={"center"} width={"full"} justifyContent={"space-between"}>
                <Input
                    type={"search"}
                    name={"search_location"}
                    placeholder={t("SEARCH_LOCATION_PLACEHOLDER")}
                    startItem={<Icon icon={"Search"} size={"sm"} color={"light"} />}
                />

                <Button
                    value={t("CURRENT_LOCATION")}
                    variant={"secondary"}
                    startItem={<Icon icon={currentLocation ? "Navigation" : "NavigationOff"} size={"sm"} />}
                    onClick={onCurrentLocationClick}
                    loading={isFetchingCurrentLocation}
                />
            </Stack>
        </header>
    )
}

export default Header;
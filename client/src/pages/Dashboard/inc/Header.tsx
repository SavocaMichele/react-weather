import styles from "./../Dashboard.module.scss";
import Stack from "@ui/Stack/Stack.tsx";
import {useTranslation} from "react-i18next";
import {Icon} from "@ui/Icon/Icon.tsx";
import Button from "@ui/Button/Button.tsx";
import LocationSearch from "@/components/LocationSearch/LocationSearch.tsx";
import { useLocationContext } from "@/context/location-context";


type HeaderProps = {
    onCurrentLocationClick: () => void;
    isFetchingCurrentLocation: boolean;
};

const Header = ({onCurrentLocationClick, isFetchingCurrentLocation }: HeaderProps) => {
    const { t } = useTranslation();
    const { location } = useLocationContext();

    const isUsingCurrentLocation = location.source === "current";

    return (
        <header className={styles.Header}>
            <Stack alignItems={"center"} width={"full"} justifyContent={"space-between"}>
                <LocationSearch />

                <Button
                    value={t("CURRENT_LOCATION")}
                    variant={"secondary"}
                    startItem={<Icon icon={isUsingCurrentLocation ? "Navigation" : "NavigationOff"} size={"sm"} />}
                    onClick={onCurrentLocationClick}
                    loading={isFetchingCurrentLocation}
                />
            </Stack>
        </header>
    )
}

export default Header;
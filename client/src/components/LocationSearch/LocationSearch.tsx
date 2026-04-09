import styles from "./LocationSearch.module.scss";
import {useLocationByNameQuery} from "@/hooks/useLocationByNameQuery.ts";
import {Icon} from "@ui/Icon/Icon.tsx";
import Input from "@ui/Form/Input.tsx";
import {useTranslation} from "react-i18next";
import React from "react";
import { useDebounce } from "@/hooks/useDebounce";
import Popover from "@ui/Popover/Popover.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import {useLocationContext} from "@/context/location-context.tsx";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";

interface LocationSearchProps {
    callback?: (coords: {lat: number, lon: number}) => void;
}

const LocationSearch = ({callback}: LocationSearchProps) => {
    const { t } = useTranslation();
    const { setSearchLocation } = useLocationContext();

    const [searchTerm, setSearchTerm] = React.useState("");
    const debouncedSearchTerm = useDebounce(searchTerm);
    const { data, isLoading } = useLocationByNameQuery(debouncedSearchTerm);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);


    React.useEffect(() => {
        if (data && searchTerm.trim().length > 2) {
            setIsPopoverOpen(true);
        }
    }, [data])


    const onSelect = (coords: {lat: number, lon: number}) => {
        setIsPopoverOpen(false);
        setSearchTerm("");
        setSearchLocation(coords);

        if (callback) {
            callback(coords);
        }
    }
    
    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <Popover.Trigger asChild>
                <Input
                    type={"search"}
                    name={"search_location"}
                    placeholder={t("SEARCH_LOCATION_PLACEHOLDER")}
                    value={searchTerm}
                    onFocus={() => {if (searchTerm.trim().length > 2) setIsPopoverOpen(true)}}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    startItem={<Icon icon={"Search"} size={"sm"} color={"light"} />}
                />
            </Popover.Trigger>

            <Popover.Content align={"start"} autoFocus={false}>
                {isLoading
                    ? (
                        <Stack gap={"xs"} flexDirection={"column"}>
                            <Skeleton height={"16px"} width={"200px"} />
                            <Skeleton height={"16px"} width={"200px"} />
                            <Skeleton height={"16px"} width={"200px"} />
                        </Stack>
                    )
                    : (
                        <div>
                            {data && data.length > 0
                                ? data.map((location, index) => (
                                    <Stack
                                        alignItems={"center"}
                                        gap={"md"}
                                        key={index}
                                        className={styles.LocationOption}
                                        onClick={() => onSelect({lat: location.lat, lon: location.lon})}
                                    >
                                        <Icon icon={"Geo"} color={"light"} size={"sm"} />
                                        <Typo>{location.name}, {location.state && `${location.state},`} {location.country}</Typo>
                                    </Stack>
                                ))
                                : (
                                    <Typo color={"primary"} size={"sm"} className={styles.LocationNoResult}>{t("NO_RESULTS")}</Typo>
                                )
                            }
                        </div>
                    )
                }
            </Popover.Content>
        </Popover>
    )
}

export default LocationSearch;
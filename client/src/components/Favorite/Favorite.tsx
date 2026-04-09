import styles from "./Favorite.module.scss";
import type {FavoriteLocation} from "@/context/user-context.tsx";
import Box from "@ui/Box/Box.tsx";
import {useWeatherByCoordsQuery} from "@/hooks/useWeatherByCoordsQuery.ts";
import Stack from "@ui/Stack/Stack.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import {transformDate} from "@/utils/helpers.ts";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";
import {getWeatherIcon} from "@types";
import {useTranslation} from "react-i18next";
import Tooltip from "@ui/Tooltip/Tooltip.tsx";


const Favorite = ({data, onRemove}: { data: FavoriteLocation, onRemove: (id: number) => void }) => {
    const {t} = useTranslation();
    const {data: weatherData, isLoading} = useWeatherByCoordsQuery(data?.lat!, data?.lon!);

    return (
        <Box inset={"xl"} flexDirection={"column"} gap={"lg"}>
            <Stack flexDirection={"row"} justifyContent={"space-between"} width={"full"}>
                <>
                    {isLoading
                        ? (
                            <Stack flexDirection={"column"} gap={"sm"}>
                                <Stack gap={"sm"} alignItems={"center"}>
                                    <Icon icon={"Geo"} color={"primary"} size={"sm"} />
                                    <Skeleton height={"20px"} width={"130px"} />
                                </Stack>

                                <Skeleton height={"31px"} width={"200px"} />
                            </Stack>
                        )
                        : (
                            <Stack flexDirection={"column"} gap={"xs"}>
                                <Stack gap={"sm"} alignItems={"center"}>
                                    <Icon icon={"Geo"} color={"primary"} size={"sm"} />
                                    <Typo color={"light"} weight={"medium"}>
                                        {weatherData?.location?.local_names?.en || weatherData?.location?.name}, {weatherData?.location?.country}
                                    </Typo>
                                </Stack>

                                <Typo size={"2xl"} weight={"semibold"}>{transformDate(weatherData?.current.dt!)}</Typo>
                            </Stack>
                        )
                    }

                    <Tooltip content={t("REMOVE_FAVORITE")}>
                        <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                            className={styles.FavoriteButton}
                            onClick={() => onRemove(data.id)}
                        >
                            <Icon icon={"Heart"} />
                        </Stack>
                    </Tooltip>
                </>
            </Stack>


            <Stack justifyContent={"space-between"} alignItems={"center"}>
                {isLoading
                    ? (
                        <>
                            <Stack flexDirection={"column"} gap={"sm"}>
                                <Stack alignItems={"flex-start"}>
                                    <Skeleton height={"72px"} width={"120px"} />
                                </Stack>

                                <Skeleton height={"20px"} width={"100px"} />
                            </Stack>

                            <Skeleton height={"72px"} width={"72px"} circle />
                        </>
                    )
                    : (
                        <>
                            <Stack flexDirection={"column"}>
                                <Typo size={"7xl"} weight={"bold"}>{Math.floor(weatherData?.current.temp!)}°</Typo>
                                <Typo transform={"capitalize"} size={"md"} color={"light"}>{weatherData?.current.weather[0].description}</Typo>
                            </Stack>

                            <Icon color={"primary"} size={"7xl"} icon={getWeatherIcon(weatherData?.current.weather[0].icon!)} />
                        </>
                    )
                }
            </Stack>


            <div className={styles.FavoriteFooter}>
                <Stack alignItems={"center"} gap={"sm"}>
                    {isLoading
                        ? (
                            <>
                                <Skeleton height={"32px"} width={"32px"} circle />

                                <Stack flexDirection={"column"} gap={"xs"} >
                                    <Skeleton height={"18px"} width={"100px"} />
                                    <Skeleton height={"18px"} width={"65px"} />
                                </Stack>
                            </>
                        )
                        : (
                            <>
                                <Stack justifyContent={"center"} alignItems={"center"} className={styles.IconWrapper}>
                                    <Icon icon={"Droplets"} size={"sm"} color={"primary"} />
                                </Stack>

                                <Stack flexDirection={"column"} >
                                    <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("HUMIDITY")}</Typo>
                                    <Typo weight={"bold"}>{weatherData?.current.humidity}%</Typo>
                                </Stack>
                            </>
                        )
                    }
                </Stack>

                <div className={styles.Separator}></div>

                <Stack alignItems={"center"} gap={"sm"}>
                    {isLoading
                        ? (
                            <>
                                <Skeleton height={"32px"} width={"32px"} circle />

                                <Stack flexDirection={"column"} gap={"xs"} >
                                    <Skeleton height={"18px"} width={"100px"} />
                                    <Skeleton height={"18px"} width={"65px"} />
                                </Stack>
                            </>
                        )
                        : (
                            <>
                                <Stack justifyContent={"center"} alignItems={"center"} className={styles.IconWrapper}>
                                    <Icon icon={"Wind"} size={"sm"} color={"light"} />
                                </Stack>

                                <Stack flexDirection={"column"} >
                                    <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("WIND_STATUS")}</Typo>
                                    <Typo weight={"bold"}>{weatherData?.current.wind_speed} km/h</Typo>
                                </Stack>
                            </>
                        )
                    }
                </Stack>
            </div>
        </Box>
    )
}


const FavoriteSkeleton = () => {
    return (
        <Box inset={"xl"} flexDirection={"column"} gap={"lg"}>
            <Stack flexDirection={"row"} justifyContent={"space-between"} width={"full"}>
                <Stack flexDirection={"column"} gap={"sm"}>
                    <Stack gap={"sm"} alignItems={"center"}>
                        <Icon icon={"Geo"} color={"primary"} size={"sm"} />
                        <Skeleton height={"20px"} width={"130px"} />
                    </Stack>

                    <Skeleton height={"31px"} width={"200px"} />
                </Stack>
            </Stack>


            <Stack justifyContent={"space-between"} alignItems={"center"}>
                <Stack flexDirection={"column"} gap={"sm"}>
                    <Stack alignItems={"flex-start"}>
                        <Skeleton height={"72px"} width={"120px"} />
                    </Stack>

                    <Skeleton height={"20px"} width={"100px"} />
                </Stack>

                <Skeleton height={"72px"} width={"72px"} circle />
            </Stack>


            <div className={styles.FavoriteFooter}>
                <Stack alignItems={"center"} gap={"sm"}>
                    <Skeleton height={"32px"} width={"32px"} circle />

                    <Stack flexDirection={"column"} gap={"xs"} >
                        <Skeleton height={"18px"} width={"100px"} />
                        <Skeleton height={"18px"} width={"65px"} />
                    </Stack>
                </Stack>

                <div className={styles.Separator}></div>

                <Stack alignItems={"center"} gap={"sm"}>
                    <Skeleton height={"32px"} width={"32px"} circle />

                    <Stack flexDirection={"column"} gap={"xs"} >
                        <Skeleton height={"18px"} width={"100px"} />
                        <Skeleton height={"18px"} width={"65px"} />
                    </Stack>
                </Stack>
            </div>
        </Box>
    )
}


Favorite.Skeleton = FavoriteSkeleton;

export default Favorite;
import styles from './Dashboard.module.scss';
import Header from "@/pages/Dashboard/inc/Header.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import {Icon} from "@ui/Icon/Icon.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import {useCurrentLocationWeather} from "@/hooks/useCurrentLocationWeather.ts";
import {getWeatherIcon} from "@types";
import {transformDate, transformTime} from "@/utils/helpers.ts";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";
import Hourly from "@/components/Forecast/Hourly.tsx";
import {useTranslation} from "react-i18next";
import Box from "@ui/Box/Box.tsx";
import NewsPanel from "@/pages/Dashboard/inc/NewsPanel.tsx";
import Daily from "@/components/Forecast/Daily.tsx";
import {useLocationContext} from "@/context/location-context.tsx";
import {useWeatherByCoordsQuery} from "@/hooks/useWeatherByCoordsQuery.ts";


const Dashboard = () => {
    const { t } = useTranslation();
    const { location } = useLocationContext();

    const {
        weather: currentWeather,
        isWeatherLoading: isCurrentLoading,
        isLocating,
        refreshCurrentLocation
    } = useCurrentLocationWeather();


    const searchCoords = location.source === "search" ? location.coords : null;
    const {data: searchWeather, isLoading: isSearchLoading} = useWeatherByCoordsQuery(searchCoords?.lat!, searchCoords?.lon!);


    const data = searchCoords ? searchWeather : currentWeather;
    const isLoading = searchCoords ? isSearchLoading : isCurrentLoading;


    return (
        <section className={styles.Dashboard}>

            <Stack flexDirection={"column"} gap={"5xl"} className={styles.Content}>
                <Header
                    onCurrentLocationClick={refreshCurrentLocation}
                    isFetchingCurrentLocation={isLocating}
                />

                <Stack flexDirection={"column"} gap={"5xl"} height={"grow"}>
                    <Stack justifyContent={"space-between"} alignItems={"center"} gap={"xl"}>
                        {/* Details */}
                        <Stack flexDirection={"column"} gap={"md"}>
                            {isLoading
                                ? (
                                    <>
                                        <Stack gap={"sm"} alignItems={"center"}>
                                            <Icon icon={"Geo"} color={"primary"} size={"sm"} />
                                            <Skeleton height={"26px"} width={"130px"} />
                                        </Stack>

                                        <Stack flexDirection={"column"} gap={"md"}>
                                            <Skeleton height={"52px"} width={"300px"} />
                                            <Skeleton height={"20px"} width={"130px"} />
                                        </Stack>
                                    </>
                                )
                                : (
                                    <>
                                        <Stack gap={"sm"} alignItems={"center"}>
                                            <Icon icon={"Geo"} color={"primary"} size={"sm"} />
                                            <Typo color={"light"} size={"xl"} weight={"medium"}>{data?.location?.local_names?.en || data?.location?.name}, {data?.location?.country}</Typo>
                                        </Stack>

                                        <Stack flexDirection={"column"} gap={"md"}>
                                            <Typo size={"5xl"} weight={"semibold"}>{transformDate(data?.current.dt!)}</Typo>
                                            <Stack alignItems={"center"} gap={"2xl"}>
                                                <Typo transform={"capitalize"} color={"light"} size={"lg"} weight={"medium"}>{data?.current.weather[0].description}</Typo>

                                                {data?.alerts && data.alerts.map((alert, index) => (
                                                    <Stack alignItems={"center"} gap={"sm"} key={index}>
                                                        <Icon icon={"Alert"} color={"warning"} size={"sm"} />
                                                        <Typo color={"warning"} weight={"semibold"}>{alert.description}</Typo>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </>
                                )}
                        </Stack>

                        {/* Weather */}
                        <Stack alignItems={"center"} gap={"5xl"}>

                            {isLoading
                                ? (
                                    <>
                                        <Skeleton height={"96px"} width={"96px"} circle />

                                        <Stack flexDirection={"column"} gap={"md"}>
                                            <Stack alignItems={"flex-start"}>
                                                <Skeleton height={"78px"} width={"150px"} />
                                            </Stack>

                                            <Stack gap={"md"} justifyContent={"flex-end"}>
                                                <Skeleton height={"18px"} width={"40px"} />
                                                <Skeleton height={"18px"} width={"40px"} />
                                            </Stack>
                                        </Stack>
                                    </>
                                )
                                : (
                                    <>
                                        <Icon color={"primary"} size={"8xl"} icon={getWeatherIcon(data?.current.weather[0].icon!)} />

                                        <Stack flexDirection={"column"}>
                                            <Stack alignItems={"flex-start"}>
                                                <Typo size={"8xl"} weight={"bold"}>{Math.floor(data?.current.temp!)}</Typo>
                                                <Typo size={"5xl"} weight={"semibold"} color={"light"} className={styles.Unit}>°C</Typo>
                                            </Stack>

                                            <Stack gap={"md"} justifyContent={"flex-end"}>
                                                <div><Typo color={"light"}>H:</Typo> <Typo>{Math.floor(data?.daily[0].temp.max!)}°</Typo></div>
                                                <div><Typo color={"light"}>L:</Typo> <Typo>{Math.floor(data?.daily[0].temp.min!)}°</Typo></div>
                                            </Stack>
                                        </Stack>
                                    </>
                                )
                            }
                        </Stack>

                    </Stack>

                    {/* Forecast */}
                    <Stack flexDirection={"column"} gap={"2xl"} height={"grow"}>
                        <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("FORECAST_TODAY")}</Typo>

                        {isLoading
                            ? (
                                <Stack alignItems={"center"} gap={"lg"}>
                                    {[...Array(8).keys()].map((index) => (
                                        <Hourly.Skeleton key={index} />
                                    ))}
                                </Stack>
                            )
                            : (
                                <Stack alignItems={"center"} gap={"lg"}>
                                    {data?.hourly.map((hour, index) => {
                                        if (index < 8) {
                                            return <Hourly data={hour} key={index} />
                                        }
                                    })}
                                </Stack>
                            )
                        }
                    </Stack>

                    {/* Highlights / Daily */}
                    <div className={styles.BottomInformation}>
                        <Stack flexDirection={"column"} gap={"2xl"}>
                            <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("HIGHLIGHTS_TODAY")}</Typo>
                            <div className={styles.Highlights}>
                                {isLoading
                                    ? [...Array(8).keys()].map((index) => (
                                        <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"} key={index}>
                                            <Skeleton height={"16px"} width={"40%"} />
                                            <Skeleton height={"40px"} width={"50%"} />
                                        </Box>
                                    ))
                                    : (
                                        <>
                                            {/* Wind status */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"sm"}>
                                                    <Icon icon={"Wind"} size={"sm"} color={"light"} />
                                                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("WIND_STATUS")}</Typo>
                                                </Stack>

                                                <Stack alignItems={"flex-end"} gap={"sm"}>
                                                    <Typo size={"3xl"} weight={"bold"}>{data?.current.wind_speed}</Typo>
                                                    <Typo className={styles.BoxUnit} weight={"medium"} color={"light"}>km/h</Typo>
                                                </Stack>
                                            </Box>

                                            {/* Sun Rise/Dawn */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"lg"}>
                                                    <div className={styles.SunWrapper}>
                                                        <Icon icon={"Sunrise"} size={"sm"} />
                                                    </div>
                                                    <Typo size={"md"} weight={"bold"}>{transformTime(data?.current.sunrise!)}</Typo>
                                                </Stack>

                                                <Stack alignItems={"center"} gap={"lg"}>
                                                    <div className={styles.SunWrapper}>
                                                        <Icon icon={"Sunset"} size={"sm"} />
                                                    </div>
                                                    <Typo size={"md"} weight={"bold"}>{transformTime(data?.current.sunset!)}</Typo>
                                                </Stack>
                                            </Box>

                                            {/* Humidity */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"sm"}>
                                                    <Icon icon={"Droplets"} size={"sm"} color={"primary"} />
                                                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("HUMIDITY")}</Typo>
                                                </Stack>

                                                <Stack alignItems={"flex-end"} gap={"sm"}>
                                                    <Typo size={"3xl"} weight={"bold"}>{data?.current.humidity}</Typo>
                                                    <Typo className={styles.BoxUnit} weight={"medium"} color={"light"}>%</Typo>
                                                </Stack>
                                            </Box>

                                            {/* Visibility */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"sm"}>
                                                    <Icon icon={"Visibility"} size={"sm"} color={"light"} />
                                                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("VISIBILITY")}</Typo>
                                                </Stack>

                                                <Stack alignItems={"flex-end"} gap={"sm"}>
                                                    <Typo size={"3xl"} weight={"bold"}>{data?.current.visibility! / 1000}</Typo>
                                                    <Typo className={styles.BoxUnit} weight={"medium"} color={"light"}>km</Typo>
                                                </Stack>
                                            </Box>

                                            {/* Feels like */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"sm"}>
                                                    <Icon icon={"Temperature"} size={"sm"} color={"warning"} />
                                                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("FEELS_LIKE")}</Typo>
                                                </Stack>

                                                <Stack alignItems={"flex-end"} gap={"sm"}>
                                                    <Typo size={"3xl"} weight={"bold"}>{Math.floor(data?.current.feels_like!)}°</Typo>
                                                </Stack>
                                            </Box>

                                            {/* UV Index */}
                                            <Box inset={"xl"} flexDirection={"column"} gap={"lg"} height={"full"}>
                                                <Stack alignItems={"center"} gap={"sm"}>
                                                    <Icon icon={"Rainbow"} size={"sm"} color={"success"} />
                                                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("UV_INDEX")}</Typo>
                                                </Stack>

                                                <Stack alignItems={"flex-end"} gap={"sm"}>
                                                    <Typo size={"3xl"} weight={"bold"}>{data?.current.uvi!}</Typo>
                                                </Stack>
                                            </Box>
                                        </>
                                    )
                                }
                            </div>
                        </Stack>

                        <Stack flexDirection={"column"} gap={"2xl"}>
                            <Typo weight={"semibold"} transform={"uppercase"} color={"light"}>{t("FORECAST_7DAY")}</Typo>

                            {isLoading
                                ? (
                                    <Box flexDirection={"column"}>
                                        {[...Array(8).keys()].map((index) => (
                                            <Daily.Skeleton key={index} />
                                        ))}
                                    </Box>
                                )
                                : (
                                    <Box flexDirection={"column"}>
                                        {data?.daily.map((day, index) => (
                                            <Daily data={day} key={index} />
                                        ))}
                                    </Box>
                                )
                            }
                        </Stack>
                    </div>

                </Stack>
            </Stack>

            <NewsPanel location={data?.location?.local_names?.en || data?.location?.name} />

        </section>
    );
}

export default Dashboard;
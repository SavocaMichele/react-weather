import styles from "./Forecast.module.scss";
import {getWeatherIcon, type WeatherData} from "@types";
import Box from "@ui/Box/Box.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import {transformTime} from "@/utils/helpers.ts";
import {Icon} from "@ui/Icon/Icon.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";

interface HourlyProps {
    data: WeatherData["hourly"][0];
}

const Hourly = ({data}: HourlyProps) => {
    return (
        <Box className={styles.Hourly} inset={"xl"} gap={"lg"} alignItems={"center"} flexDirection={"column"}>
            <Typo color={"light"} weight={"medium"}>{transformTime(data.dt, true)}</Typo>

            <Icon color={transformTime(data.dt, true) === "Now" ? "primary" : "normal"} size={"4xl"} icon={getWeatherIcon(data.weather[0].icon)} />

            <Typo size={"xl"} weight={"bold"}>{Math.floor(data.temp)}°</Typo>

            <Stack alignItems={"center"} gap={"xs"}>
                <Icon size={"sm"} color={"primary"} icon={"Rain"} />
                <Typo size={"xs"} color={"primary"} weight={"semibold"}>{data.pop * 100}%</Typo>
            </Stack>
        </Box>
    );
}


const HourlySkeleton = () => {
    return (
        <Box className={styles.Hourly} inset={"xl"} gap={"lg"} alignItems={"center"} flexDirection={"column"}>
            <Skeleton height={"18px"} width={"100%"} />
            <Skeleton height={"40px"} width={"40px"} circle />
            <Skeleton height={"26px"} width={"60%"} />
            <Skeleton height={"16px"} width={"60%"} />
        </Box>
    )
}


Hourly.Skeleton = HourlySkeleton;

export default Hourly;
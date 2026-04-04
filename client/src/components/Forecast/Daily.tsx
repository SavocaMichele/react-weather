import styles from "./Forecast.module.scss";
import {getWeatherIcon, type WeatherData} from "@types";
import Typo from "@ui/Typo/Typo.tsx";
import {getShortDate} from "@/utils/helpers.ts";
import {Icon} from "@ui/Icon/Icon.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";

interface DailyProps {
    data: WeatherData["daily"][0];
}

const Daily = ({data}: DailyProps) => {
    return (
        <div className={styles.Daily}>
            <Typo color={"light"} weight={"medium"}>{getShortDate(data.dt, true)}</Typo>

            <Stack alignItems={"center"} gap={"md"}>
                <Icon color={"primary"} size={"lg"} icon={getWeatherIcon(data.weather[0].icon)} />
                <Typo weight={"medium"}>{data.weather[0].main}</Typo>
            </Stack>

            <div className={styles.Temperature}>
                <Typo weight={"semibold"}>{Math.floor(data.temp.day)}°</Typo>
                <Typo color={"light"}>{Math.floor(data.temp.night)}°</Typo>
            </div>
        </div>
    );
}


const DailySkeleton = () => {
    return (
        <div className={styles.Daily}>
            <Skeleton height={"18px"} width={"70px"} />

            <Stack alignItems={"center"} gap={"md"}>
                <Skeleton height={"24px"} width={"24px"} circle />
                <Skeleton height={"18px"} width={"50px"} />
            </Stack>

            <Skeleton height={"16px"} width={"50px"} />
        </div>
    )
}


Daily.Skeleton = DailySkeleton;

export default Daily;
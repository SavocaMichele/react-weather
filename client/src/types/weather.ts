import type {IconName} from "@ui/Icon/iconNames.ts";

type WeatherIcon = "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "09d" | "09n" | "10d" | "10n" | "11d" | "11n" | "13d" | "13n" | "50d" | "50n";

type WeatherType = {
    id: number;
    main: string;
    description: string;
    icon: WeatherIcon;
}

export interface WeatherData {
    lat: number;
    long: number
    timezone: string;
    timezone_offset: number;
    current: {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        clouds: number;
        uvi: number;
        visibility: number;
        wind_speed: number;
        wind_gust: number;
        wind_deg: number;
        rain?: {
            "1h": number;
        };
        snow?: {
            "1h": number;
        };
        weather: WeatherType[];
    };
    daily: {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        summary: string;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        feels_like: {
            day: number;
            night: number;
            eve: number;
            morn: number;
        };
        weather: WeatherType[];
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_gust: number;
        wind_deg: number;
        clouds: number;
        pop: number;
        rain?: number;
        uvi?: number;
    }[];
    hourly: {
        dt: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_gust: number;
        wind_deg: number;
        pop: number;
        rain?: {
            "1h": number;
        };
        snow?: {
            "1h": number;
        };
        weather: WeatherType[];
    }[];
    location?: {
        country: string;
        lat: number;
        lon: number;
        name: string;
        state?: string;
        local_names?: {
            [key: string]: string;
        }
    };
    alerts?: {
        sender_name: string;
        event: string;
        start: number;
        end: number;
        description: string;
        tags: string[];
    }[];
}


export const getWeatherIcon = (icon: WeatherIcon): IconName => {
    switch (icon) {
        case "01d":
            return "Sun";
        case "01n":
            return "Moon";
        case "02d":
            return "SunCloud";
        case "02n":
            return "MoonCloud";
        case "03d":
        case "03n":
            return "Cloud";
        case "04d":
        case "04n":
            return "Clouds";
        case "09d":
        case "09n":
            return "Rain";
        case "10d":
            return "SunRain";
        case "10n":
            return "MoonRain";
        case "11d":
        case "11n":
            return "Thunder";
        case "13d":
        case "13n":
            return "Snow";
        case "50d":
        case "50n":
            return "Fog";
        default:
            return "Sun";
    }
}
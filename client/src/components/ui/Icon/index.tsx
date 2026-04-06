import * as React from "react";
import Activity from "./Activity";
import Alert from "./Alert";
import ArrowShortDown from "./ArrowShortDown";
import ArrowShortLeft from "./ArrowShortLeft";
import ArrowShortRight from "./ArrowShortRight";
import ArrowShortUp from "./ArrowShortUp";
import CechvronLeft from "./CechvronLeft";
import ChevronDown from "./ChevronDown";
import ChevronRight from "./ChevronRight";
import ChevronUp from "./ChevronUp";
import Cloud from "./Cloud";
import Clouds from "./Clouds";
import Compass from "./Compass";
import Dashboard from "./Dashboard";
import Droplets from "./Droplets";
import Fog from "./Fog";
import Geo from "./Geo";
import Heart from "./Heart";
import Lock from "./Lock";
import Mail from "./Mail";
import Moon from "./Moon";
import MoonCloud from "./MoonCloud";
import MoonRain from "./MoonRain";
import Navigation from "./Navigation";
import NavigationOff from "./NavigationOff";
import Newspaper from "./Newspaper";
import Rain from "./Rain";
import Rainbow from "./Rainbow";
import Search from "./Search";
import Settings from "./Settings";
import Snow from "./Snow";
import Sun from "./Sun";
import SunCloud from "./SunCloud";
import SunRain from "./SunRain";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Temperature from "./Temperature";
import Thunder from "./Thunder";
import User from "./User";
import Visibility from "./Visibility";
import Wind from "./Wind";

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  "Activity": Activity,
  "Alert": Alert,
  "ArrowShortDown": ArrowShortDown,
  "ArrowShortLeft": ArrowShortLeft,
  "ArrowShortRight": ArrowShortRight,
  "ArrowShortUp": ArrowShortUp,
  "CechvronLeft": CechvronLeft,
  "ChevronDown": ChevronDown,
  "ChevronRight": ChevronRight,
  "ChevronUp": ChevronUp,
  "Cloud": Cloud,
  "Clouds": Clouds,
  "Compass": Compass,
  "Dashboard": Dashboard,
  "Droplets": Droplets,
  "Fog": Fog,
  "Geo": Geo,
  "Heart": Heart,
  "Lock": Lock,
  "Mail": Mail,
  "Moon": Moon,
  "MoonCloud": MoonCloud,
  "MoonRain": MoonRain,
  "Navigation": Navigation,
  "NavigationOff": NavigationOff,
  "Newspaper": Newspaper,
  "Rain": Rain,
  "Rainbow": Rainbow,
  "Search": Search,
  "Settings": Settings,
  "Snow": Snow,
  "Sun": Sun,
  "SunCloud": SunCloud,
  "SunRain": SunRain,
  "Sunrise": Sunrise,
  "Sunset": Sunset,
  "Temperature": Temperature,
  "Thunder": Thunder,
  "User": User,
  "Visibility": Visibility,
  "Wind": Wind,
};

export default iconMap;

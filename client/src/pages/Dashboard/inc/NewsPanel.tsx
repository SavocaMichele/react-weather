import styles from './../Dashboard.module.scss';
import {useNewsQuery} from "@/hooks/useNewsQuery.ts";
import {Icon} from "@ui/Icon/Icon.tsx";
import Typo from "@ui/Typo/Typo.tsx";
import Stack from "@ui/Stack/Stack.tsx";
import {useTranslation} from "react-i18next";
import Box from "@ui/Box/Box.tsx";
import {Link} from "react-router";
import {transformDate} from "@/utils/helpers.ts";
import Skeleton from "@ui/Skeleton/Skeleton.tsx";

const NewsPanel = ({location}: {location?: string}) => {
    const { t } = useTranslation();
    const { data, isLoading } = useNewsQuery(location);

    return (
        <div className={styles.RightPanel}>
            <Stack flexDirection={"column"} gap={"2xl"} width={"full"}>
                <Stack alignItems={"center"} gap={"sm"}>
                    <Icon icon={"Newspaper"} size={"sm"} color={"light"} />
                    <Typo weight={"semibold"} size={"xs"} transform={"uppercase"} color={"light"}>{t("LOCAL_UPDATES")}</Typo>
                </Stack>

                <Stack flexDirection={"column"} gap={"lg"}>
                    {isLoading
                        ? [1, 2, 3, 4, 5].map((index) => (
                            <Box
                                flexDirection={"column"}
                                inset={"lg"}
                                gap={"md"}
                                key={index}
                            >
                                <Skeleton width={"100%"} height={"130px"} />
                                <Skeleton width={"90%"} height={"18px"} />

                                <Stack justifyContent={"space-between"}>
                                    <Skeleton width={"25%"} height={"18px"} />
                                    <Skeleton width={"50%"} height={"18px"} />
                                </Stack>
                            </Box>
                        ))
                        : data?.data.map((news, index) => (
                            <Box
                                flexDirection={"column"}
                                inset={"lg"}
                                gap={"md"}
                                key={index}
                                className={styles.NewsItem}
                            >
                                {news.image_url && ( <img src={news.image_url} alt="News Img" /> )}
                                <Typo className={styles.Title} weight={"bold"}><Link to={news.url} target={"_blank"}>{news.title}</Link></Typo>

                                <Stack justifyContent={"space-between"} alignItems={"center"}>
                                    <Stack gap={"sm"}>
                                        {news.categories.map((category, index) => (
                                            <div className={styles.Tag} key={index}>{category}</div>
                                        ))}
                                    </Stack>

                                    <Typo size={"sm"} color={"light"}>{transformDate(news.published_at)}</Typo>
                                </Stack>
                            </Box>
                        ))
                    }
                </Stack>
            </Stack>
        </div>
    )
}

export default NewsPanel;
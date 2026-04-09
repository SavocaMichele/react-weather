import styles from "./Favorites.module.scss";
import Typo from "@ui/Typo/Typo.tsx";
import {useTranslation} from "react-i18next";
import Stack from "@ui/Stack/Stack.tsx";
import {useUserContext} from "@/context/user-context.tsx";
import LocationSearch from "@/components/LocationSearch/LocationSearch.tsx";
import Favorite from "@/components/Favorite/Favorite.tsx";


const Favorites = () => {
    const { t } = useTranslation();
    const { favorites, addFavorite, removeFavorite, isFavoritesLoading } = useUserContext();

    return (
        <Stack flexDirection={"column"} gap={"5xl"} className={styles.Favorites}>
            <Typo size={"5xl"} weight={"semibold"}>{t("FAVORITES")}</Typo>

            <LocationSearch callback={(coords) => addFavorite(coords.lat, coords.lon)}/>

            <div className={styles.Content}>
                {isFavoritesLoading
                    ? (
                        <>
                            <Favorite.Skeleton />
                            <Favorite.Skeleton />
                            <Favorite.Skeleton />
                        </>
                    )
                    : (
                        favorites.map((fav, index) => (
                            <Favorite
                                data={fav}
                                key={index}
                                onRemove={(id: number) => removeFavorite(id)}
                            />
                        ))
                    )
                }
            </div>
        </Stack>
    );
}

export default Favorites;
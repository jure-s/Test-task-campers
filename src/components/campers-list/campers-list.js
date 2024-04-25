import { useDispatch, useSelector } from "react-redux";
import CamperItem from "../campers-item/campers-item";
import { updateFavorites } from "../../features/favorites/favorites";
import styles from "../campers-item/camper-item.module.css";
import { Link } from "react-router-dom";
import LoadingIndicator from "../loading-indicator/loading-indicator";

const CampersList = ({
  data,
  setOpenModal,
  setCountElementsOnPage,
  countElementsOnPage,
  isLoading,
  isCatalogPage,
}) => {
  const favoriteObject = useSelector((state) => state.favorites.favorites);

  const dispatch = useDispatch();
  const addToFavorite = (newItem) => {
    const newFavoriteItems = { ...favoriteObject };
    if (favoriteObject[newItem]) {
      delete newFavoriteItems[newItem];
    } else {
      newFavoriteItems[newItem] = true;
    }
    dispatch(updateFavorites(newFavoriteItems));
    localStorage.setItem("favorites", JSON.stringify(newFavoriteItems));
  };

  const loadMore = () => {
    setCountElementsOnPage((prev) => prev + 3);
  };

  return (
    <div className={styles.container}>
      {data?.length ? (
        <div className={styles.camper_items_section}>
          {data?.map((el) => (
            <CamperItem
              key={el._id}
              setOpenModal={setOpenModal}
              el={el}
              addToFavorite={addToFavorite}
              isFavorite={favoriteObject[el?._id]}
            />
          ))}
        </div>
      ) : !isCatalogPage ? (
        <div className={styles.empty_section}>
          <h1 className={styles.title}>No Favorites Yet</h1>
          <p>Click to on Heart close to camper to add to favorite</p>
          <Link
            style={{
              textAlign: "center",
              color: "blue",
              textDecoration: "underline",
            }}
            className={styles.title}
            to="/catalog"
          >
            Go to catalog Page
          </Link>
        </div>
      ) : !isLoading ? (
        <div className={styles.empty_section}>
          <h1 className={styles.title}>No Campers found</h1>
          <p>Please change filter to view another campers</p>
        </div>
      ) : null}

      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingIndicator />
        </div>
      )}
      {countElementsOnPage < 13 ? (
        <button onClick={loadMore} className={styles.pagination_button}>
          Load More
        </button>
      ) : null}
    </div>
  );
};
export default CampersList;

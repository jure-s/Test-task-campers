import styles from "./camper-item.module.css";
import rateIcon from "../../assets/images/rate.svg";
import mapIcon from "../../assets/images/map-pin.svg";
import { Buttons } from "../common-components/buttons/buttons";
import acIcon from "../../assets/images/ac.svg";
import badIcon from "../../assets/images/bad.svg";
import eatIcon from "../../assets/images/eat.svg";
import fuelIcon from "../../assets/images/fuel.svg";
import transmitionIcon from "../../assets/images/transmition.svg";
import usersIcon from "../../assets/images/users.svg";

import { ReactComponent as LikeIcon } from "../../assets/images/heart.svg";

const CamperItem = ({ setOpenModal, el, addToFavorite, isFavorite }) => {
  const detailsArray = [
    { img: usersIcon, text: `${el?.adults} adults` },
    { img: transmitionIcon, text: el?.transmission },
    { img: fuelIcon, text: el?.engine },
    { img: eatIcon, text: `Kitchen` },
    { img: badIcon, text: `${el?.details?.beds} beds` },
    { img: acIcon, text: `AC` },
  ];

  return (
    <div className={styles.camper_item}>
      <div className={styles.img_side}>
        <img width="290px" height="310px" src={el?.gallery[0]} alt="" />
      </div>
      <div className={styles.about_side}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2 className={styles.title}>{el?.name}</h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <h2 className={styles.title}>&#8364;{`${el?.price}`}</h2>
            <LikeIcon
              className={isFavorite ? styles.favorite_icon : null}
              onClick={() => addToFavorite(el?._id)}
              style={{ cursor: "pointer", width: "24px", height: "24px" }}
            />
          </div>
        </div>
        <div className={styles.title_about}>
          <img width="16px" height="16px" src={rateIcon} alt="rateIcon" />
          <p
            className={styles.rating_text}
          >{`${el?.rating} (${el?.reviews?.length} Reviews)`}</p>
          <img width="16px" height="16px" src={mapIcon} alt="mapIcon" />
          <p style={{ textDecoration: "none" }} className={styles.rating_text}>
            {el?.location}
          </p>
        </div>

        <p className={styles.description_text}>{el?.description}</p>

        <div className={styles.details_section}>
          {detailsArray?.map((el, index) => (
            <div className={styles.details_item} key={index}>
              <img src={el?.img} alt="img" />
              <p className={styles.details_item_text}>{el?.text}</p>
            </div>
          ))}
        </div>
        <Buttons text="Show more" action={() => setOpenModal(el)} />
      </div>
    </div>
  );
};
export default CamperItem;

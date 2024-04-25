import { Rating } from "@mui/material";
import styles from "./reviews.module.css";

const Reviews = ({ data }) => {
  return (
    <div className={styles.review_section}>
      {data?.map((el, index) => (
        <div key={index} className={styles.review_item}>
          <div className={styles.main_section}>
            <div>
              <div className={styles.avatar}>{el?.reviewer_name[0]}</div>
            </div>
            <div>
              <p className={styles.name_text}>{el?.reviewer_name}</p>
              <Rating name="read-only" value={el?.reviewer_rating} readOnly />
            </div>
          </div>
          <p className={styles.comment_text}>{el.comment}</p>
        </div>
      ))}
    </div>
  );
};
export default Reviews;

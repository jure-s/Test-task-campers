import styles from "../campers-item/camper-item.module.css";
import rateIcon from "../../assets/images/rate.svg";
import mapIcon from "../../assets/images/map-pin.svg";
import closeIcon from "../../assets/images/close.svg";
import stylesModal from "./modal-about.module.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import BookCamperForm from "../book-camper-form/book-camper-form";
import Reviews from "../reviews/reviews";
import Features from "../features/features";

import { styled } from "@mui/material/styles";

const StyledTab = styled((props) => <Tab {...props} />)(
  ({ theme, isloading }) => ({
    fontWeight: 600,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#101828",
    "&.Mui-selected": {
      color: "#101828",
    },
  })
);

const ModalAbout = ({ data, onClose }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, value) => setValue(value);

  return (
    <div className={stylesModal.modal_container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h2 className={styles.title}>{data?.name}</h2>
        <img
          style={{ cursor: "pointer" }}
          src={closeIcon}
          alt="close"
          onClick={onClose}
        />
      </div>
      <div className={styles.title_about}>
        <img width="16px" height="16px" src={rateIcon} alt="rateIcon" />
        <p
          className={styles.rating_text}
        >{`${data?.rating} (${data?.reviews.length} Reviews)`}</p>
        <img width="16px" height="16px" src={mapIcon} alt="mapIcon" />
        <p style={{ textDecoration: "none" }} className={styles.rating_text}>
          {data?.location}
        </p>
      </div>
      <h2 className={styles.title}>&#8364;{`${data?.price.toFixed(2)}`}</h2>
      <div className={stylesModal.gallery_section}>
        {data?.gallery?.map((el, index) => (
          <div key={index}>
            <img
              className={stylesModal.img_modal}
              width="290px"
              height="310px"
              src={el}
              alt="icon-car"
            />
          </div>
        ))}
      </div>
      <p
        style={{ textWrap: "wrap", margin: "24px 0px", lineHeight: "23px" }}
        className={styles.description_text}
      >
        {data?.description}
      </p>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            TabIndicatorProps={{
              style: { background: "#E44848", height: "4px" },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <StyledTab label="Features" value="1" />
            <StyledTab label="Reviews" value="2" />
          </TabList>
        </Box>
        <div className={stylesModal.tab_section}>
          <TabPanel sx={{ width: "100%", padding: 0 }} value="1">
            <Features data={data} />
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="2">
            <Reviews data={data?.reviews} />
          </TabPanel>
          <BookCamperForm />
        </div>
      </TabContext>
    </div>
  );
};
export default ModalAbout;

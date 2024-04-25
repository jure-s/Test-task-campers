import styles from "./features.module.css";
import userIcon from "../../assets/images/users.svg";
import transmIcon from "../../assets/images/transmition.svg";
import fuelIcon from "../../assets/images/fuel.svg";
import eatIcon from "../../assets/images/eat.svg";
import badIcon from "../../assets/images/bad.svg";
import airIcon from "../../assets/images/air.svg";
import cdIcon from "../../assets/images/cd.svg";
import radioIcon from "../../assets/images/radio.svg";
import hobIcon from "../../assets/images/hob.svg";
import toiletIcon from "../../assets/images/toilet.svg";
import showerIcon from "../../assets/images/shower.svg";
import freezeIcon from "../../assets/images/freeze.svg";
import gasIcon from "../../assets/images/gas.svg";
import waterIcon from "../../assets/images/water.svg";
import waveIcon from "../../assets/images/wave.svg";

const Features = ({ data }) => {
  const infoSection = [
    { text: "Form", value: data?.form },
    { text: "Lenght", value: data?.length },
    { text: "Width", value: data?.width },
    { text: "Height", value: data?.height },
    { text: "Tank", value: data?.tank },
    { text: "Consumption", value: data?.consumption },
  ];

  const details = {
    CD: {
      img: cdIcon,
      text: `${data?.details?.CD} CD`,
    },
    microwave: {
      img: waveIcon,
      text: `${data?.details?.microwave} Microwave`,
    },
    airConditioner: {
      img: airIcon,
      text: `${data?.details?.airConditioner} Air conditioner`,
    },
    shower: { img: showerIcon, text: `${data?.details?.shower} Shower` },
    toilet: { img: toiletIcon, text: `${data?.details?.toilet} Toilet` },
    hob: { img: hobIcon, text: `${data?.details?.hob} hob` },
    beds: { img: badIcon, text: `${data?.details?.beds} beds` },
    freezer: { img: freezeIcon, text: `${data?.details?.freezer} Freezer` },
    gas: { img: gasIcon, text: `Gas` },
    water: { img: waterIcon, text: `Water` },
    kitchen: { img: eatIcon, text: `${data?.details?.kitchen} Kitchen` },
    radio: { img: radioIcon, text: `${data?.details?.radio} Radio` },
    adults: { img: userIcon, text: `${data?.adults} Adults` },
    transmission: { img: transmIcon, text: `${data?.transmission}` },
    engine: { img: fuelIcon, text: `${data?.engine}` },
  };

  const checkAllFeatures = () => {
    const arrayFeatures = [];

    for (let key in data) {
      // этот код будет вызван для каждого свойства объекта
      // ..и выведет имя свойства и его значение

      if (data && details?.hasOwnProperty(key))
        arrayFeatures.push(details[key]);
    }
    for (let key in data?.details) {
      // этот код будет вызван для каждого свойства объекта
      // ..и выведет имя свойства и его значение

      if (data?.details[key] && details?.hasOwnProperty(key))
        arrayFeatures.push(details[key]);
    }

    return arrayFeatures;
  };

  return (
    <div className={styles.features_section}>
      <div className={styles.features_list}>
        {checkAllFeatures()?.map((el, index) => (
          <div key={index} className={styles.features_list_item}>
            <img src={el?.img} alt="feauture-icon" />
            <span>{el?.text}</span>
          </div>
        ))}
      </div>
      <p className={styles.title}>Vehicle details</p>
      <hr />
      <ul>
        {infoSection.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Features;

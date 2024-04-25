import vanIcon from "../assets/images/van.svg";
import integratedIcon from "../assets/images/integrated.svg";
import alcoveIcon from "../assets/images/alcove.svg";

import acIcon from "../assets/images/ac.svg";
import transmIcon from "../assets/images/transmition.svg";
import eatIcon from "../assets/images/eat.svg";
import showerIcon from "../assets/images/shower.svg";
import tvIcon from "../assets/images/tv.svg";

export const objEquipment = {
  TV: "TV",
  "Shower/WC": "shower",
  Kitchen: "kitchen",
  AC: "ac",
  Automatic: "automatic",
};
export const vehicleType = [
  { img: vanIcon, text: "Van" },
  { img: integratedIcon, text: "Fully Integrated" },
  { img: alcoveIcon, text: "Alcove" },
];
export const vehicleEquipment = [
  { img: acIcon, text: "AC" },
  { img: transmIcon, text: "Automatic" },
  { img: eatIcon, text: "Kitchen" },
  { img: tvIcon, text: "TV" },
  { img: showerIcon, text: "Shower/WC" },
];
export const objVehicleTypes = {
  Van: "panelTruck",
  "Fully Integrated": "fullyIntegrated",
  Alcove: "alcove",
};

import classNames from "classnames";
import {
  objEquipment,
  objVehicleTypes,
  vehicleEquipment,
  vehicleType,
} from "../../constant/constant";
import styles from "./fillters.module.css";
import { useSelector } from "react-redux";

export const RenderVehicleType = ({
  setVehicleTypeState,
  vehicleTypeState,
}) => {
  const { vehicle_type_filter } = useSelector((state) => state.filters);

  return (
    <div className={styles.vehicle_type_section}>
      <ul>
        {vehicleType?.map((el, index) => (
          <li
            onClick={() => {
              setVehicleTypeState(
                objVehicleTypes[el?.text] === vehicleTypeState
                  ? ""
                  : objVehicleTypes[el?.text]
              );
            }}
            key={index}
          >
            <div
              className={classNames(
                styles.vehicle_type,
                objVehicleTypes[el?.text] === vehicle_type_filter &&
                  vehicleTypeState
                  ? styles.active
                  : objVehicleTypes[el?.text] === vehicleTypeState &&
                      vehicle_type_filter !== vehicleTypeState
                    ? styles.focused
                    : null
              )}
            >
              <img width="40px" height="28px" src={el?.img} alt={el?.text} />
              <p>{el?.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const RenderVehicleEquip = ({ toggleEquimpent, vehicleEquipState }) => {
  const { vehicle_equipment_filter } = useSelector((state) => state.filters);

  return (
    <div className={styles.vehicle_type_section}>
      <ul>
        {vehicleEquipment?.map((el, index) => (
          <li onClick={() => toggleEquimpent(el)} key={index}>
            <div
              className={classNames(
                styles.vehicle_type,
                vehicle_equipment_filter.includes(objEquipment[el?.text]) &&
                  vehicleEquipState.has(objEquipment[el?.text])
                  ? styles.active
                  : vehicleEquipState.has(objEquipment[el?.text])
                    ? styles.focused
                    : null
              )}
            >
              <img width="40px" height="28px" src={el?.img} alt={el?.text} />
              <p>{el?.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

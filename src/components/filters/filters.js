import styles from "./fillters.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Buttons } from "../common-components/buttons/buttons";
import { useState } from "react";
import {
  updateLocation,
  updateVehicleEquipment,
  updateVehicleType,
} from "../../features/filters/filters";
import { objEquipment } from "../../constant/constant";
import { RenderVehicleEquip, RenderVehicleType } from "./render-items-filter";

const Filters = () => {
  const { location, vehicle_type_filter, vehicle_equipment_filter } =
    useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [vehicleTypeState, setVehicleTypeState] = useState(vehicle_type_filter);
  const [vehicleEquipState, setVehicleEquipState] = useState(
    new Set([...vehicle_equipment_filter])
  );
  const [value, setValue] = useState("");

  const toggleEquimpent = (el) => {
    const newEquip = new Set([...vehicleEquipState]);
    const isExistEquip = vehicleEquipState.has(objEquipment[el?.text]);

    if (isExistEquip) newEquip.delete(objEquipment[el?.text]);
    else newEquip.add(objEquipment[el?.text]);
    setVehicleEquipState(newEquip);
  };

  const onSearch = () => {
    dispatch(updateVehicleEquipment([...vehicleEquipState]));
    dispatch(updateVehicleType(vehicleTypeState));
    dispatch(updateLocation(value));
  };

  return (
    <div className={styles.filters}>
      <p className={styles.filter_text}>Location</p>
      <input
        defaultValue={location}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <p className={styles.filter_text}>Filters</p>
      <h2 className={styles.title}>Vehicle equipment</h2>
      <hr />
      <RenderVehicleEquip
        vehicleEquipState={vehicleEquipState}
        toggleEquimpent={toggleEquimpent}
      />
      <h2 className={styles.title}>Vehicle type</h2>
      <hr />
      <RenderVehicleType
        setVehicleTypeState={setVehicleTypeState}
        vehicleTypeState={vehicleTypeState}
      />
      <div style={{ marginTop: "48px" }}>
        <Buttons text="Search" action={onSearch} />
      </div>
    </div>
  );
};
export default Filters;

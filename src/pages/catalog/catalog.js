import { useEffect, useState } from "react";
import { getAllCampers } from "../../api/api";
import CampersList from "../../components/campers-list/campers-list";
import Modal from "@mui/material/Modal";
import ModalAbout from "../../components/modal-about/modal-about";
import Filters from "../../components/filters/filters";
import { useSelector } from "react-redux";
import styles from "../../components/campers-item/camper-item.module.css";

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [openModal, setOpenModal] = useState({});
  const isOpen = !!Object.keys(openModal)?.length;
  const [countElementsOnPage, setCountElementsOnPage] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const { vehicle_type_filter, vehicle_equipment_filter, location } =
    useSelector((state) => state.filters);

  useEffect(() => {
    setIsLoading(true);
    getAllCampers("https://6629142f54afcabd073818dc.mockapi.io/api/v1/campers")
      .then((res) => setCampers(res.slice(0, countElementsOnPage)))
      .finally(() => setIsLoading(false));
  }, [countElementsOnPage]);

  useEffect(() => {
    if (vehicle_type_filter || vehicle_equipment_filter.length || location)
      setCountElementsOnPage(13);
    else setCountElementsOnPage(4);
  }, [vehicle_type_filter, vehicle_equipment_filter, location]);

  const filteredData = () => {
    let campList = [...campers];
    if (vehicle_type_filter) {
      campList = campList.filter((el) => el.form === vehicle_type_filter);
    }
    if (vehicle_equipment_filter.length) {
      campList = campList.filter((el) =>
        vehicle_equipment_filter.every((item) =>
          item === "automatic"
            ? el?.details?.transmission === item
            : el?.details[item]
        )
      );
    }
    if (location) {
      campList = campList.filter((el) =>
        el?.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    return campList;
  };

  return (
    <div className={styles.page_catalog}>
      <Filters />
      <CampersList
        isCatalogPage
        data={filteredData()}
        setOpenModal={setOpenModal}
        setCountElementsOnPage={setCountElementsOnPage}
        countElementsOnPage={countElementsOnPage}
        isLoading={isLoading}
      />
      {isOpen && (
        <Modal open={isOpen} onClose={() => setOpenModal({})}>
          <div className="modal_container">
            <ModalAbout onClose={() => setOpenModal({})} data={openModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Catalog;

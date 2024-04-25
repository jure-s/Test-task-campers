import { useEffect, useState } from "react";
import { getAllCampers } from "../../api/api";
import CampersList from "../../components/campers-list/campers-list";
import { Modal } from "@mui/material";
import ModalAbout from "../../components/modal-about/modal-about";
import { useSelector } from "react-redux";

const Favorites = () => {
  const [campers, setCampers] = useState([]);
  const [openModal, setOpenModal] = useState({});
  const isOpen = !!Object.keys(openModal)?.length;
  const [isLoading, setIsLoading] = useState(false);

  const favoriteObject = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    setIsLoading(true);
    getAllCampers("https://6629142f54afcabd073818dc.mockapi.io/api/v1/campers")
      .then((res) => setCampers(res))
      .finally(() => setIsLoading(false));
  }, []);

  const onlyFavorites = campers?.filter((el) => favoriteObject[el?._id]);

  return (
    <>
      <CampersList
        isLoading={isLoading}
        data={onlyFavorites}
        setOpenModal={setOpenModal}
      />
      {isOpen && (
        <Modal open={isOpen} onClose={() => setOpenModal({})}>
          <div className="modal_container">
            <ModalAbout onClose={() => setOpenModal({})} data={openModal} />
          </div>
        </Modal>
      )}
    </>
  );
};
export default Favorites;

import { Modal, useMantineTheme } from "@mantine/core";
import "./AddMedModal.css";
function AddMedModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      className="model"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={0.3}
      size="70%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="container">
        <form className=" ">
          <h3 className="textHeading">Your Med info</h3>

          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="medInput"
                name="nameMed"
                placeholder="Name... "
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="dosageMed"
                placeholder="Dosage..."
                className="medInput"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="locationMed"
                placeholder="Location..."
                className="medInput"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="medInput"
                name="quantityMed"
                placeholder="Quantity..."
              />
            </div>
          </div>

          <div className="row date">
            <div className="col-12 col-md-6">
              <span> Open Date : </span>
              <input
                type="date"
                id="start"
                className="medInput"
                name="trip-start"
                value="2022-07-22"
                min="2010-01-01"
                max="2023-12-31"
              ></input>
            </div>
            <div className="col-12 col-md-6 exp">
              <span>Expiry Date : </span>

              <input
                type="date"
                id="start"
                className="medInput"
                name="trip-start"
                value="2023-01-01"
                min="2023-01-01"
                max="2100-12-31"
              ></input>
            </div>
          </div>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <input type="file" name="profileImg" className="medInput" />
            </div>
          </div>
          <div className="row butt" style={{ marginTop: "10px" }}>
            <div className="row">
              <button className="button infoButton">Add</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddMedModal;

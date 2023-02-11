import { Modal, useMantineTheme } from "@mantine/core";
import "../Profile Model/ProfileModel.css";
 function MedecineModal({ modalOpened, setModalOpened }) {
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
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Med Info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="nameMed"
            placeholder="Name... "
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="dosageMed"
            placeholder="Dosage..."
          />
          <input
            type="text"
            className="infoInput"
            name="locationMed"
            placeholder="Location..."
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="quantityMed"
            placeholder="Quantity..."
          />
        </div>
        <div className="date">
          <span className="opExp"> Op. : </span>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-07-22"
            min="2023-01-01"
            max="2023-12-31"
          ></input>
          <span className="opExp">Exp.: </span>

          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-07-22"
            min="2023-01-01"
            max="2023-12-31"
          ></input>
        </div>
        <div className="browse">
          <span className="opExp" style={{ color: "#4A4EB7" }}>
            Image
          </span>
          <input type="file" name="profileImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default MedecineModal;

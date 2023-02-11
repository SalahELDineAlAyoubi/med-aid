import { Modal, useMantineTheme } from "@mantine/core";
 import "./ProfileModel.css";
function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
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
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="name"
            placeholder="Name... "
          />

          <input
            type="text"
            className="infoInput"
            name="number"
            placeholder="Number..."
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email..."
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password..."
          />

          <input
            type="password"
            className="infoInput"
            placeholder="Confirm Password..."
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="location"
            placeholder="Location..."
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

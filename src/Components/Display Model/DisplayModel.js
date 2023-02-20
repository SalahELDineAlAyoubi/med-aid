import { Modal, useMantineTheme } from "@mantine/core";
import "../Profile Model/ProfileModel.css";
import "./DisplayModel.css";
function DisplayModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      className="model"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.2}
      overlayBlur={0.5}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div>
        {/* //put your code here */}
        
        {/* //put your code here */}
      </div>
    </Modal>
  );
}

export default DisplayModel;

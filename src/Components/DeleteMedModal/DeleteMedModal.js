 
  import { Modal, useMantineTheme } from "@mantine/core";
import {   useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../Redux1/api/PostsRequests";
   
  function DeleteMedModal({ modalOpened, setModalOpened, data, handleDeleteConfirm }) {
    const theme = useMantineTheme();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [formData, setFormData] = useState(data);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();

      await deletePost(formData._id, user._id);
      handleDeleteConfirm();
      setModalOpened(false);
      //window.location.reload();
    };

    return (
      <Modal
        style={{ marginTop: "15%" }}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.1}
        overlayBlur={0.1}
        size="auto"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div
                  className="col-12"
                  style={{
                    marginBottom: "30px",
                    fontWeight: "600",
                    marginTop: "-20px",
                  }}
                >
                  Do you want to delete this Medecine ?{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
                <div className="col-12 col-sm-6">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalOpened(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  }

export default DeleteMedModal;

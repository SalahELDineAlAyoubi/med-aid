import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../../Redux1/actions/postAction";
import { uploadPost, uploadImage } from "../../Redux1/actions/uploadAction";
import { deletePost } from "../../Redux1/api/PostsRequests";

function FinalAcceptModal({
  modalOpened,
  setModalOpened,
  item,
  users,
}) {
  const theme = useMantineTheme();
    const dispatch = useDispatch();
let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    await deletePost(item._id, users._id);
     setModalOpened(false);
    window.location.reload()
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
                Make sure to save the information because the post will be
                deleted !!!
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6">
                <button type="submit" className="btn btn-danger">
                  Done
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

export default FinalAcceptModal;

import { Modal, useMantineTheme } from "@mantine/core";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { unbookMed } from "../../Redux1/api/PostsRequests";
import { format } from "timeago.js";

function UnBookModel({ modalOpened, setModalOpened, data, handleUnBook ,user,test}) {
  const theme = useMantineTheme();
    const [myMed, setMyMed] = useState(false);
  //  const dispatch = useDispatch();
let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

   await unbookMed(data._id, user._id);
    handleUnBook(true);
  // check if the state is updated correctly

    setModalOpened(false);
  };

  
  const handleSubmitRequests =   (e) => {
    e.preventDefault();
navigate("/notifications")
   
     
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
        {user &&
          user._id === data.userIdBook &&
          !(user._id === data.userId) && (
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
                    Do you want to UnBook this Medecine ?
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <button type="submit" className="btn btn-danger">
                      Accept
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
          )}

        {user &&
          !(user._id === data.userIdBook) &&
          !(user._id === data.userId) && (
            <form>
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
                    <p>
                      Sorry, this medicine has already been booked by another
                      person!
                    </p>
                    <span style={{ color: "rgb(2, 7, 92)" }}>
                      Available in :
                    </span>
                    {format(data.takenUntil)}
                  </div>
                </div>

                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12 col-sm-6    ">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setModalOpened(false)}
                      style={{ margin: "0 auto", display: "block" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        {user._id === data.userId && (
          <form onSubmit={handleSubmitRequests}>
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
                  Its Your Medecine, Confirm or reject !
                </div>
              </div>

              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-12 col-sm-6">
                  <button type="submit" className="btn btn-danger">
                    Requests
                  </button>
                </div>
                <div className="col-12 col-sm-6    ">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalOpened(false)}
                    style={{ margin: "0 auto", display: "block" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}

export default UnBookModel;

import { Modal, useMantineTheme } from "@mantine/core";
 import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createChat, findChat } from "../../Redux1/api/ChatRequest";
import { getUser } from "../../Redux1/api/UserRequest";
import Chat from "../Chat/Chat";
import "../Profile Model/ProfileModel.css";
import "./DisplayModel.css";
import { format } from "timeago.js";

function DisplayModel({
  modalOpened,
  setModalOpened,
  item,
  usero,
  available,
  toggleAvailability,
  setModalUnbookOpened,
  userBook 
}) {
  const [isMobile, setIsMobile] = useState(false);

  const theme = useMantineTheme();
  const { user } = useSelector((state) => state.authReducer.authData) || {};

  const [currentChat, setCurrentChat] = useState(null);
  const [myPost, setMyPost] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (user) {
      const testMyPost = async () => {
        try {
          if (item.userId == user._id) setMyPost(false);
          //console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      if (item !== null && user !== null) testMyPost();
    }
  }, []);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handlegotoChat = () => {
    if (user) {
      const findChatUser = async () => {
        try {
          const { data } = await findChat(item.userId, user._id);
          setCurrentChat(data);
          console.log(data);
          
          navigate("/chat", { state: data });
          /*  if (!data) {
          const datae = {
            senderId: item.userId,
            receiverId: user._id,
          };
          const { data } = await createChat(datae);
           navigate("/chat", { state: data });
        } */
        } catch (error) {
          console.log(error);
        }
      };
      if (item !== null) {
        findChatUser();
      }
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call handleResize function on component mount to initialize the isMobile variable

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      size={isMobile ? "auto" : "80%"} // Set size to "auto" when isMobile is true, otherwise set to "80%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="container cont">
        <div className="row">
          <div className="col-md-5">
            <img
              className="imageDisp"
              src={
                item.image
                  ? process.env.REACT_APP_PUBLIC_FOLDER + item.image
                  : ""
              }
            />
          </div>
          <div className="col-md-7">
            {usero && (
              <span className="newarrival text-center">{usero.name}</span>
            )}
            <h2 className="text-center" style={{ marginBottom: "40px" }}>
              {" "}
              {item.name}
            </h2>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <span className="openexp">Dosage : </span>
                  {item.dosage}
                </p>
                <p>
                  <span className="openexp">Quantity : </span>
                  {item.quantity}
                </p>
                <p>
                  <span className="openexp">Location : </span>
                  {item.location}
                </p>
                {usero && (
                  <p>
                    <span className="openexp">Phone : </span>
                    {usero.phone}
                  </p>
                )}
              </div>
              <div className="col-md-6">
                <p>
                  <span className="openexp">Open Date : </span>
                  {item.opendate}
                </p>
                <p>
                  <span className="openexp">Expiry Date : </span>
                  {item.expirydate}
                </p>
                {toggleAvailability && setModalUnbookOpened && (
                  <div>
                    {user && available && (
                      <img
                        style={{ cursor: "pointer" }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
                        className=""
                        alt="icon"
                        title="Book this Medecine !"
                        onClick={toggleAvailability}
                      />
                    )}

                    {user && !available && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
                        className=""
                        alt="icon"
                        style={{ cursor: "pointer" }}
                        onClick={() => setModalUnbookOpened(true)}
                      />
                    )}
                    {!user && available && (
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                        title="Login to Book medecines!"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
                        alt="icon"
                      />
                    )}
                    {!user && !available && (
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                        title="Login to Book medecines!"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
                        alt="icon"
                      />
                    )}
                    {/* <p>
                    {" "}
                    <span className="bookedBy">Booked By : </span> {userBook.name}
                  </p> */}
                    {item && item.takenUntil && (
                      <p>
                        <span className="bookedBy">Available </span>
                        {format(item.takenUntil)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-6">
            {user && myPost && (
              <button
                type="bitton"
                className="btn btn-info "
                onClick={handlegotoChat}
              >
                <span className="textbtn">Go to chat</span>
              </button>
            )}

            {!user && (
              <button
                className="btn btn-info bton"
                type="button"
                onClick={handleLogin}
              >
                <span className="textbtn"> Login to chat</span>
              </button>
            )}
          </div>
          <div className="col-6 col-sm-6">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModalOpened(false)}
            >
              <span className="textbtn"> Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DisplayModel;
//  <div className="container cont">
//    <div className="row">
//      <div className="col-12 col-md-6">
//        <div className="imgDisplay">
//          <img
//            className="imageDisp"
//            src={
//              item.image ? process.env.REACT_APP_PUBLIC_FOLDER + item.image : ""
//            }
//          />
//        </div>
//      </div>
//      <div className="col-12 col-md-6">
//        <div className="display-6 fw-bold my-4">{item.name}</div>
//        <div className="flex-container">
//          <div className="display-8 fw-normal my-4">{item.dosage}</div>
//          <div className="display-8 fw-normal my-4">{item.quantity}</div>
//        </div>
//      </div>
//    </div>

//    {/* //put your code here */}
//    <div className="row" style={{ marginTop: "10px" }}>
//      <div className="col-6 col-sm-6">
//        {user && myPost && (
//          <button
//            type="bitton"
//            className="btn btn-info "
//            onClick={handlegotoChat}
//          >
//            <span className="textbtn">go to chat</span>
//          </button>
//        )}

//        {!user && (
//          <button
//            className="btn btn-info bton"
//            type="button"
//            onClick={handleLogin}
//          >
//            <span className="textbtn"> Login to chat</span>
//          </button>
//        )}
//      </div>
//      <div className="col-6 col-sm-6">
//        <button type="button" className="btn btn-secondary">
//          <span className="textbtn"> Cancel</span>
//        </button>
//      </div>
//    </div>
//  </div>;
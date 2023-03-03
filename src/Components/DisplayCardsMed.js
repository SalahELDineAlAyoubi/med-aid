import { useState } from "react";
import { FaRegBookmark, FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DisplayModel from "./Display Model/DisplayModel";
import "./DisplayCardsMed.css";

const DisplayCardsMed = ({ medData }) => {
  const [modalOpened, setModalOpened] = useState(false);

  //const { user } = useSelector((state) => state.authReducer.authData);

  const [available, setAvailable] = useState(true);

  const toggleAvailability =() => {
    // setAvailable(
    //   medData.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, available: !item.available };
    //     }
    //     return item;
    //   })
    // );

    setAvailable(false);
  };

  return (
    <div className="App0">
      <div className="App1">
        {medData.map((item) => (
          <div key={item.id} className="medList">
            <div className="medCard">
              <div className="medUsername"> user.name </div>

              <div className="img">
                <img src={item.image} alt="med-img" className="medImage"></img>
                {available ? (
                  <div className="book">
                    feel free to book this for 24hrs!
                    <br />
                    <button
                      onClick={toggleAvailability}
                      className="btn btn-outline-light"
                      style={{ width: "50%" }}
                    >
                      book now!
                    </button>
                  </div>
                ) : (
                  <div className="book">
                    <span style={{ color: "red" }}>Unavailable</span>
                    <br />
                  </div>
                )}
              </div>

              <div className="iconsDrugs">
                <FaRegBookmark className={"medCard__wishlist"} />
                <div>
                  <FaInfoCircle
                    onClick={() => setModalOpened(true)}
                    className={"medCard__info"}
                  />
                  <DisplayModel
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                  />
                </div>
                {available ? (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
                    className="availableIcon"
                    alt="icon"
                    onClick={toggleAvailability}
                  />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
                    className="availableIcon"
                    alt="icon"
                  />
                )}
              </div>

              <div className="medCard__content">
                <h1 className="medName">{item.name}</h1>
                <div className="displayStack__1">
                  <div className="medLocation"> {item.location}</div>
                  <div className="medOpDate">
                    <span className="openExp">Op Date: </span>
                    {item.openDate}
                  </div>
                </div>
                <div className="displayStack__2">
                  <div className="medNumber"> {item.number}</div>
                  <div className="medExp">
                    <span className="openExp">Exp: </span>
                    {item.expDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCardsMed;

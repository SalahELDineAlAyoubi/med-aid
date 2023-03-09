import React from 'react'
  import { FaRegBookmark, FaInfoCircle } from "react-icons/fa";
import DisplayModel from "../Display Model/DisplayModel";
import { format } from "timeago.js";
import { useState } from "react";
import { useEffect } from 'react';
// import { findChat } from '../../Redux1/api/ChatRequest';
import { useDispatch, useSelector } from 'react-redux';
//import { getUser } from '../../Redux1/actions/UserActions';
import { bookMed, getPost, unbookMed } from '../../Redux1/api/PostsRequests';
import { useNavigate } from 'react-router-dom';
import UnBookModel from '../UnBookModel/UnBookModel';
import { getUser } from '../../Redux1/api/UserRequest';
  
const CardMed = ({ item, usero, loading }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalUnbookOpened, setModalUnbookOpened] = useState(false);
  const [available, setAvailable] = useState(true);
  const [data, setData] = useState(item);
 // const [userData, setUserData] = useState({});
  const [userBook, setUserBook] = useState({});
    const {user} = useSelector((state) => state.authReducer.authData)||{} ;
    
  //const [postData, setPostData] = useState(item); 
let navigate=useNavigate()  
const dispatch = useDispatch();

 // const dispatch = useDispatch();
 useEffect(() => {
   if (data.taken === 1) setAvailable(false);

   //setData(item);
 }, [data]); 

 useEffect(() => {
   setData(item);
 }, [item]); 
 

  const handleUnBook = async (value) => {
           const updatedData = await getPost(item._id)
 setData(updatedData.data);
     setAvailable(value);
  };
  
  const handleOpenDescription = async () => {
     
      // const userBooked = await getUser(item.userIdBook);

 //      setUserBook(userBooked.data);
  
   
   setModalOpened(true);
  };
  
  
 
  const toggleAvailability = async () => {
    // setAvailable(
    //   medData.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, available: !item.available };
    //     }
    //     return item;
    //   })
    // );
 ;

    if (data.taken === 0) {
      if (user && (user._id!==data.userId)) {
        //console.log(postData._id);
        console.log(user._id);
        console.log(data); 
          await bookMed(data._id, user._id);
          const updatedData = await getPost(item._id);
          setData(updatedData.data);
        setAvailable(false);
      }
    } 
  };
  /* useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(item.userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (item !== null) getUserData();
  }, [item]); */
 

  return (
    <div className="medList">
      <div className="medCard">
        <div className="medUsername"> {usero.name}</div>
        <div className="date"> {format(data.createdAt)}</div>
        <div className="img">
          <img
            src={
              item.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
            }
            alt="med-img"
            className="medImage"
          ></img>

          {user && !(user._id === data.userId) && available && (
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
          )}
          {user && !available && (
            <div className="book">
              <span style={{ color: "red" }}>Unavailable</span>
              <br />
            </div>
          )}
        </div>

        <FaRegBookmark className={"medCard__wishlist"} />

        <div>
          <FaInfoCircle
            onClick={handleOpenDescription}
            className={"medCard__info"}
          />
          <DisplayModel
            item={data}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            usero={usero}
            available={available}
            toggleAvailability={toggleAvailability}
            setModalUnbookOpened={setModalUnbookOpened}
           // userBook={userBook}
          />
        </div>
        {user && available && (
          <img
            style={{ cursor: "pointer" }}
            onClick={toggleAvailability}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
            className="availableIcon"
            title="Book this Medecine !"
            alt="icon"
          />
        )}

        {user && !available && (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
            className="availableIcon"
            alt="icon"
            onClick={() => setModalUnbookOpened(true)}
            style={{ cursor: "pointer" }}
          />
        )}
        <UnBookModel
          modalOpened={modalUnbookOpened}
          setModalOpened={setModalUnbookOpened}
          data={data}
          handleUnBook={handleUnBook}
          user={user ? user : {}}
          test={true}
        />
        {!user && available && (
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
            title="Login to Book medecines!"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
            className="availableIcon"
            alt="icon"
          />
        )}
        {!user && !available && (
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
            title="Login to Book medecines!"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
            className="availableIcon"
            alt="icon"
          />
        )}
        <div className="medCard__content">
          <h1 className="medName">{data.name}</h1>
          <div className="displayStack__1">
            <div className="medLocation"> {data.location}</div>
            <div className="medOpDate">
              <span className="openExp">Op Date: </span>
              {data.opendate}
            </div>
          </div>
          <div className="displayStack__2">
            <div className="medNumber"> {usero.phone}</div>
            <div className="medExp">
              <span className="openExp">Exp: </span>
              {data.expirydate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMed

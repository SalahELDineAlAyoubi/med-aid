import { Modal, useMantineTheme } from "@mantine/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { uploadPost, uploadImage } from "../../Redux1/actions/uploadAction";
import "./AddMedModal.css";
function AddMedModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const [image, setImage] = useState(null);
    const imageRef = useRef();
 const [formData, setFormData] = useState({}); 
 const [error, setError] = useState(""); 
  const { user } = useSelector((state) => state.authReducer.authData);
    const loading = useSelector((state) => state.postReducer.uploading);

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
const dispatch = useDispatch();
  const name = useRef();
  const dosage = useRef();
  const quantiy = useRef();
  const opendate = useRef();
  const expirydate = useRef();
  const location = useRef();
 
 const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     let img = event.target.files[0];
     setImage(img);
   
   }
 };

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
   
    const reset = () => {
      setImage(null);
    const empty = {
   
      name:       "",
      dosage:     "",
      quantity:   "",
      opendate:   "",
      expirydate: "",
      location:   "",
    };
    setFormData(empty);
    };

const handleSubmit = async (e) => {
 e.preventDefault();
 
   if(formData.name=="") setError("Name Required")
  else if (formData.dosage == "") setError("Dosage Required");
  else if (formData.location == "") setError("Location Required");
  else if (formData.quantity == "") setError("Quantity Required");
   else if(formData.opendate=="") setError("OpenDate Required");
   else if(formData.expirydate=="") setError("ExpiryDate Required");
   else if(image==null) setError("Image Required");
  else  {
    setError("");

    const newPost = {
      userId: user._id,
      name: formData.name,
      dosage: formData.dosage,
      quantity: formData.quantity,
      opendate: formData.opendate,
      expirydate: formData.expirydate,
      location: formData.location,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    dispatch(uploadPost(newPost));
    reset();
    window.location.reload();
  }
     

 };
 


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
      size="auto"
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
                name="name"
                placeholder="Name... "
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="dosage"
                placeholder="Dosage..."
                className="medInput"
                onChange={handleChange}
                value={formData.dosage}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="location"
                placeholder="Location..."
                className="medInput"
                onChange={handleChange}
                value={formData.location}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="medInput"
                name="quantity"
                placeholder="Quantity..."
                onChange={handleChange}
                value={formData.quantity}
                required
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
                name="opendate"
                min="2010-01-01"
                max="2023-12-31"
                onChange={handleChange}
                value={formData.opendate}
                required
              ></input>
            </div>
            <div className="col-12 col-md-6 exp">
              <span>Expiry Date : </span>

              <input
                type="date"
                id="start"
                className="medInput"
                name="expirydate"
                min="2023-01-01"
                max="2100-12-31"
                onChange={handleChange}
                value={formData.expirydate}
                required
              ></input>
            </div>
          </div>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <input
                type="file"
                name="medImg"
                className="medInput"
                ref={imageRef}
                onChange={onImageChange}
                required
              />
            </div>
          </div>
          <div className="row butt" style={{ marginTop: "10px" }}>
            <div className="row">
              <span className="errmsg">{error}</span>
              <button
                onClick={handleSubmit}
                className="button infoButton"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddMedModal;  

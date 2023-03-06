import { Modal, useMantineTheme } from "@mantine/core";
import {   useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { updatePost } from "../../Redux1/actions/postAction";
   import { uploadPost, uploadImage } from "../../Redux1/actions/uploadAction";
  
import "../AddMedModal/AddMedModal.css";
import "./MedecineModel.css";
function MedecineModel({ modalOpened, setModalOpened,data }) {
   const theme = useMantineTheme();
  const [formData, setFormData] = useState(data); 
const [medImage, setMedImage] = useState(null);
const dispatch = useDispatch();
   const { updateLoading } = useSelector((state) => state.postReducer);
   //console.log(updateLoading);
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const onImageChange = (event) => {
     if (event.target.files && event.target.files[0]) {
       let img = event.target.files[0];
       setMedImage(img);
     }
   };
 
 const handleSubmit = (e) => {
   e.preventDefault();
   let MedData = formData;
   console.log(MedData);
   if (medImage) {
     const data = new FormData();
     const fileName = Date.now() + medImage.name;
     data.append("name", fileName);
     data.append("file", medImage);
     MedData.image = fileName;
     try {
       dispatch(uploadImage(data));
     } catch (err) {
       console.log(err);
     }
   }
   dispatch(updatePost(formData._id, MedData));

   setModalOpened(false);
   window.location.reload();  
 }; 




  return (
    <Modal
      className="modelEditMed"
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
        <form onSubmit={handleSubmit}>
          <h3 className="textHeading">Edit Your Med info</h3>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="medInput"
                name="name"
                placeholder="Name... "
                value={formData.name}
                onChange={handleChange}
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
                value={formData.dosage}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="location"
                placeholder="Location..."
                className="medInput"
                value={formData.location}
                onChange={handleChange}
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
                value={formData.quantity}
                onChange={handleChange}
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
                value={formData.opendate}
                onChange={handleChange}
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
                value={formData.expirydate}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <input
                type="file"
                name="medImg"
                className="medInput"
                onChange={onImageChange}
              />
            </div>
          </div>
          <div className="row butt" style={{ marginTop: "10px" }}>
            <div className="row">
              <button
                type="submit"
                className="button infoButton"
                // disabled={updateLoading}
              >
                Update
                {/* {updateLoading ? "Updating..." : "Update"} */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default MedecineModel;

import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../Redux1/actions/uploadAction";
import { updateUser } from "../../Redux1/actions/UserActions";
 import "./ProfileModel.css";
function ProfileModal({ modalOpened, setModalOpened,data }) {
  const theme = useMantineTheme();
const { password, ...other } = data;
const [formData, setFormData] = useState(other); 
const [profileImage, setProfileImage] = useState(null);
const dispatch = useDispatch();
const { user } = useSelector((state) => state.authReducer.authData);


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

 const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     let img = event.target.files[0];
        setProfileImage(img)     
   }
 };
const handleSubmit = (e) => {
  e.preventDefault();
  let UserData = formData;
  if (profileImage) {
    const data = new FormData();
    const fileName = Date.now() + profileImage.name;
    data.append("name", fileName);
    data.append("file", profileImage);
    UserData.profilePicture = fileName;
    try {
      dispatch(uploadImage(data));
    } catch (err) {
      console.log(err);
    }
  }
  dispatch(updateUser(user._id, UserData));
  setModalOpened(false);
 
};

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
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="name"
            placeholder="Name... "
            onChange={handleChange}
            value={formData.name}
          />

          <input
            type="text"
            className="infoInput"
            name="phone"
            placeholder="Phone..."
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="location"
            placeholder="Location..."
            onChange={handleChange}
            value={formData.location}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
        </div>

        <button type="submit" className="button infoButton">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

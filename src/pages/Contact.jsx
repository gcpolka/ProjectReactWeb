import React , {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import ContactService from "../services/ContactService"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Contact = () => {
  let navigate = useNavigate();
  let [contact,setContact]= useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };
 const saveContact =(e) =>{
  e.preventDefault();
  ContactService.createContact(contact)
  .then((res)=>{
    swal({
      icon: "success",
      text: "ส่งข้อความสำเร็จ",
      title: "Success"
    });
    navigate("/product")
  })
  .catch((e)=>swal({
    icon: "Error",
    text: "รองใหม่อีกครั้ง",
    title: "Error"
  }));


 }

  return (
    <MainLayout>
      <h1 className="mt-3">Contact</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveContact}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Email
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="emailc"
                  id="emailc"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Message
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control-message"
                  name="messagec"
                  id="messagec"
                  placeholder="Message"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary" onClick={saveContact}>
                  
                  Send
                </button>
              </div>
            </div>
          </form>
          <br /><br /><br /><br /><br /><br /><br /><br />
       
        </div>
      </div>
    </MainLayout>
  );
};
export default Contact;
import React , {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const NewProduct = () => {
  let navigate = useNavigate();
  let [product,setProduct]= useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
 const saveProduct =(e) =>{
  e.preventDefault();
  ProductService.create(product)
  .then((res)=>{
    swal({
      icon: "success",
      text: "เพิ่มข้อมูลสำเร็จ",
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
      <h1 className="mt-3">Add Product</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveProduct}>
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
                Price
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Category
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Category"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Size
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="sizeshoe"
                  id="sizeshoe"
                  placeholder="Size"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Image
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="imageShoe"
                  id="imageShoe"
                  placeholder="Image"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </MainLayout>
  );
};
export default NewProduct;
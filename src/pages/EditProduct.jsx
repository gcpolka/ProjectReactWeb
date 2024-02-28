import React, { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import ProductService from "../services/ProductService";

const EditProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [product, setProduct] = useState({});

  const fetchProduct = (id) => {
    ProductService.get(id)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
  const saveProduct = (e) => {
    e.preventDefault();
    console.log(product);
    ProductService.updateProduct(id,product)
      .then((res)=>{
        swal({
          icon: "success",
          text: "แก้ไขข้อมูลสำเร็จ",
          title: "ผลการทำงาน"
        });
        navigate("/product");
      })
      .catch((e)=>swal({
        icon: "error",
        text: "update failed",
        title: "Result"
      })
      );

  }
  return (
    <MainLayout>
      <h1 className="mt-3">Edit Product</h1>
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
                  value={product.name}
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
                  value={product.price}
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
                  value={product.category}
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
                  value={product.sizeshoe}
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
                  value={product.imageShoe}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditProduct;

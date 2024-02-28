import  React,{useState, useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import logo from "../assets/react.svg";
import ProductService from "../services/ProductService";
const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  let [product, setProduct] = useState({});

  const fetchProduct = (id)=>{
    ProductService.get(id)
      .then((res)=>{
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((e)=>console.log(e));
  }
    
  useEffect(()=>{
    fetchProduct(id)
  },[]);
  
  return (
    <MainLayout>
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={product.imageShoe} alt="" style={{width: '50%'}} />
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              Name:{" "}
            </label>{" "}
            {product.name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price:{" "}
            </label>{" "}
            {product.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Category:{" "}
            </label>{" "}
            {product.category}
          </p>
          
          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
        </div>
      </div>
      {/* <div>
        <h2>Reviews</h2>
        <hr />
        {Product.reviews &&
          Product.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"⭐️".repeat(r.star)}</p>
              <p>{r.message}</p>
            </div>
          ))}
      </div> */}
    </MainLayout>
  );
};

export default ProductDetail;
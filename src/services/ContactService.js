import http from "../http-common.js"

const getAll = () => {
    return http.get("/contact");
  }

const createContact =(contact) =>{
    return http.post("/contact", contact);
  }  


const ProductService = {
    
    getAll,
    createContact,
    
    }
  
  export default ProductService
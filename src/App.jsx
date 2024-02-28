
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import Contact from './pages/Contact';
import Productlift from './pages/Productlift';
import Productrun from './pages/Productrun';
import Productgym from './pages/Productgym';


function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/new' element={<NewProduct/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/product/edit/:id' element={<EditProduct/>}/>
      <Route path='/product/delete/:id' element={<DeleteProduct/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Productlift' element={<Productlift/>}/>
      <Route path='/Productrun' element={<Productrun/>}/>
      <Route path='/Productgym' element={<Productgym/>}/>
      
    </Routes>
  );
}

export default App;
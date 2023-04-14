import {
    Home,
    Navbar, 
    ProductPage, 
    Cart, 
    BrowseProducts, 
    Login, 
    Register} from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="pt-[50px] md:pt-[100px]">
          <Routes>
            <Route exact path ='/' element = {<Home/>} />
            <Route exact path ='/bag' element = {<Cart/>} />
            <Route exact path = '/browseproducts' element = {<BrowseProducts />} />
            <Route exact path = '/login' element = {<Login />} />
            <Route exact path = '/register' element = {<Register />} />
            <Route exact path = 'listing/:id' element = {<ProductPage />} />
          </Routes>          
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

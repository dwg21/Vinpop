import { Home, Navbar, ProductPage, Cart} from "./components";

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
            <Route exact path = 'listing/:id' element = {<ProductPage />} />
          </Routes>          
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

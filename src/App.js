import {
    Home,
    Navbar, 
    ProductPage, 
    Cart, 
    BrowseProducts, 
    Login, 
    Register,
    UploadListing,
    Favorites,
    Chat,
    Offers,
    UserListings,
    MakeOffer,
    EditListing
  } from "./components";

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectUser, getUserStatus, getUserError} from "./Redux/userSlice";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const userStatus = useSelector(getUserStatus);

  useEffect(() => {
    if (userStatus === 'idle') {
        dispatch(getCurrentUser())
    }
}, [userStatus, dispatch])



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="pt-[50px] md:pt-[100px]">
          <Routes>
            <Route exact path ='/' element = {<Home/>} />
            <Route exact path ='/bag' element = {<Cart/>} />
            <Route exact path = '/browseproducts' element = {<BrowseProducts />} />
            <Route exact path = '/favorites' element = {<Favorites />} />
            <Route exact path = '/login' element = {<Login />} />
            <Route exact path = '/register' element = {<Register />} />
            <Route exact path = '/uploadlisting' element = {<UploadListing />} />
            <Route exact path = '/chat/:id' element = {<Chat />} />
            <Route exact path = '/offers' element = {<Offers/>} />
            <Route exact path = '/UserListings' element = {<UserListings/>} />
            <Route exact path = '/editListing/:id' element = {<EditListing/>} />
            <Route exact path = '/makeOffer/:id' element = {<MakeOffer/>} />
            <Route exact path = 'listing/:id' element = {<ProductPage />} />
          </Routes>          
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

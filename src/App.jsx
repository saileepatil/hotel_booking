import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './component/Footer/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBookings from './Pages/MyBookings'
 

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner")

  return (
<>
{!isOwnerPath && <Navbar/>}
<div className="min-h-[70vh]">

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/rooms" element={<AllRooms/>}/>
<Route path='/rooms/:id' element={ <RoomDetails/> }/>
<Route path='/my-bookings' element={ <MyBookings/> }/>
</Routes>

</div>

<Footer/>
</>
  )
}

export default App

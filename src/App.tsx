import './App.css'
import Sidebar from './components/Sidebar'
import ItensCrud from './components/ItensCrud'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripsTable from './components/Trip/GetTrips';
import AddTrip from './components/Trip/AddTripForm';

function App() {
  const [selectedItem, setSelectedItem] = useState<'Trips' | 'User'>('Trips');

  return (

    // <Router> 
    //   <div className="container">
    //   <div className="sidebar">
    //      <Sidebar setSelectedItem={setSelectedItem} />
    //   </div>        
    //   <Routes> 
    //       <Route path="/" element={<ItensCrud selectedItem={selectedItem} />} />
    //       <Route path="/trips" element={<TripsTable />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
    <div className="container">
      <Sidebar setSelectedItem={setSelectedItem} />  
      <div className="content">
      <ItensCrud selectedItem={selectedItem} />
      <div className="table-container"> 
        <Routes>
          <Route path="/"    />
          <Route path="/trips" element={<TripsTable />} />
          <Route path="/add-trip" element={<AddTrip />} />
        </Routes>
      </div>
      </div>
      </div>  
    </Router>

  )
}

export default App

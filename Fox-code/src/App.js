import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Fox-code/components/Header';
import Staff from './Fox-code/staff';
import Run1 from './Fox-code/run1';
import Index from './Fox-code/HomePage';
import Workwithus from './Fox-code/tienhuy-data/WorkWithUs';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/HomePage" element={<Index />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/run1" element={<Run1 />} />
        {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
        <Route path="/WorkWithUs" element={<Workwithus />} />
      </Routes>
    </div>
  );
}

export default App;
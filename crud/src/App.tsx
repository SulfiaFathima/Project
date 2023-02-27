import React from 'react';
import './App.css';
import DisplayTable from './components/displayTable';
import AddItemForm from './components/addUserForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
{/* <Router>
  <Routes>
    <Route path="/" element="<DisplayTable>" />
  </Routes>
</Router> */}


      <DisplayTable />
      <AddItemForm />
    </div>
  );
}

export default App;

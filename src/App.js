  import logo from './logo.svg';
  import './App.css';
  import React from 'react';
  import Header from './Components/header/header';
  import Navbar from './Components/navbar/navbar';
  import Profile from './Components/profile/profile';
  



  const App = () => {
    return (
    <div className="app-wrapper">   
     <Header/>
     <Navbar/>
     <Profile/>
     </div>
    );
  }

  export default App;

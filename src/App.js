import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Content from './components/Content';
import AddModal from './components/AddModal';
function App() {
  return (
    <div>
      <AddModal/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
   
  );
}

export default App;

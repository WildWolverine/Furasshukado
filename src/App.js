import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Content from './components/body/Content';
import AddModal from './components/popUp/AddModal';
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

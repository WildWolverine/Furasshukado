import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Content from './components/body/Content';
import RepetitionTraining from './components/body/RepetitionTraining'
import EndWorld from './components/body/EndWorld'
import RepeatWords from './components/body/RepeatWords'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
       <Router>
      <Switch>
      <Route path="/" exact component={Content} />
      <Route path="/" exact component={Header} />
      <Route path="/повторения слов" component={RepeatWords} />
      <Route path="/тренеровка повторения слов" component={RepetitionTraining}/>
      <Route path="/" exact component={EndWorld} />
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;

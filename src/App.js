import React from 'react';
import {Route} from 'react-router-dom';
import Home from './review/Home.js';
import NoticeBoard from './review/NoticeBoard.js';
import Login from './review/Login.js';
import SignUp from './review/SignUp.js';


const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true}/>    
      <Route path="/noticeboard" component={NoticeBoard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
    

  );
};

export default App;


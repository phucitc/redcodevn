import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import MasterPage from './views/layout/MasterPage';
import Home from './modules/page-home';
import Service from './modules/page-service';
import Process from './modules/page-process';
import OurWork from './modules/page-our-work';
import About from './modules/page-about';
import Career from './modules/page-career';
import Blog from './modules/page-blog';
import Contact from './modules/page-contact';

render(
  <Router history={browserHistory}>
    <Route component={MasterPage}>
      <IndexRedirect to="/" />
      <Route path='/' component={Home} />
      <Route path='/service' component={Service} />
      <Route path='/process' component={Process} />
      <Route path='/our-work' component={OurWork} />
      <Route path='/about' component={About} />
      <Route path='/careers' component={Career} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>, 
  document.getElementById('root')
);
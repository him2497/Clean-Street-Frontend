import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';

import Header from '../components/header'

import Dashboard from '../pages/dashboard'

import './index.css'

export default () => (
  <Fragment>
    <Header />
    <Router style={{display: 'flex', flex: 1}}>
      <Dashboard path='/' />
    </Router>
  </Fragment>
)

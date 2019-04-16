import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';

import Header from '../components/header'

import Dashboard from '../pages/dashboard'
import Admin from '../pages/admin'

import './index.css'

export default () => (
  <Fragment>
    <Header />
    <Router style={{display: 'flex', flex: 1}}>
      <Dashboard path="/" />
      <Admin path="/admin" />
    </Router>
  </Fragment>
)

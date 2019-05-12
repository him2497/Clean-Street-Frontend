import React from 'react'
import {Link} from '@reach/router'
export default () => (
  <div className='header'>
    <div className='header-inner'>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <h1 className="header-title" style={{ fontSize:'25px'}}>
          Clean Streets
        </h1>
        
        <Link style={{paddingLeft: 1100}} to="/admin">Admin Page</Link>
      </div>
    </div>
  </div>
)
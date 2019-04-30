import React from 'react'

import Card from '../../components/card'

export default class extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
        <Card title='Clean Streets'>
          <div style={{
              height: '180px',
              backgroundColor: '#4ab300',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: 'white',
              letterSpacing: '1px'
          }}>
            <h1 style={{margin: '0px', fontSize: '50px'}}>{450}</h1>
            <p style={{margin: '0px' }}>Total Clean Streets</p>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: '#a8aaae',
              fontSize: '18px'
          }}>
            <p>Cleaned Today: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>43</span></p>
          </div>
        </Card>

        <Card title='Littered Streets'>
          <div style={{
              height: '180px',
              backgroundColor: 'rgb(212, 207, 17)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: 'white',
              letterSpacing: '1px'
          }}>
            <h1 style={{margin: '0px', fontSize: '50px'}}>{120}</h1>
            <p style={{margin: '0px' }}>Total Littered Streets</p>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: '#a8aaae',
              fontSize: '18px'
          }}>
            <p>Scheduled for Cleaninng Today: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>61</span></p>
          </div>
        </Card>

        <Card title='Dirty Streets'>
          <div style={{
              height: '180px',
              backgroundColor: 'rgb(222, 59, 20)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: 'white',
              letterSpacing: '1px'
          }}>
            <h1 style={{margin: '0px', fontSize: '50px'}}>{82}</h1>
            <p style={{margin: '0px' }}>Total Dirty Streets</p>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              color: '#a8aaae',
              fontSize: '18px'
          }}>
            <p>Scheduled for Cleaninng Today: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>50</span></p>
          </div>
        </Card>


      </div>
    )
  }
}
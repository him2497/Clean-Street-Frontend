import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import 'mapbox-gl/dist/mapbox-gl.css'

import data from './dataset'

export default class extends React.Component {

  componentDidMount() {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-121.881061, 37.335345], // starting position
      zoom: 12
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.on('load', function () {
      map.addLayer({
        'id': 'litter',
        'type': 'circle',
        'source': {
          type: 'geojson',
          data
        },
        'paint': {
          'circle-radius': {
            property: 'level',
            'base': 1.75,
            'stops': [[5, 3], [8, 5]]
          },
          'circle-color': {
            property: 'level',
            stops: [
              [0, '#8a8acb'],
              [1, '#223b53'],
              [2, '#3887be'],
              [3, '#56b881'],
              [4, '#f1f075 '],
              [5, '#f9886c'],
              [6, '#e55e5e'],
              [7, '#e55e5e']
              [8, '#e55e5e']
              [9, '#e55e5e']
              [10, '#e55e5e']
            ]
          }
        }
      });
    });
  }
  render() {
    return (
      <div style={{ width: '100%', minHeight: '500px' }}>
        <div id="mapbox" style={{height: '40rem'}} />
      </div>
    )
  }
}
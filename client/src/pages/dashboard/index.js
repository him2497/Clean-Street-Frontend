import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import 'mapbox-gl/dist/mapbox-gl.css'

export default class extends React.Component {

  componentDidMount() {
    this.initMap()
  }

  initMap = async () => {
    const data = await fetch(`${process.env.DB_URI}/garbage`)
      .then(res => res.json())
      .catch(console.log)

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
            'base': 250,
            'stops': [[5, 2.5], [8, 3]]
          },
          'circle-color': {
            property: 'level',
            stops: [
              [0, 'rgb(1, 251, 20)'],
              [1, '#a1a61e'],
              [2, 'rgb(255, 0, 0)']
             /* [0, 'rgb(1, 251, 20)'],
              [1, '#5be118'],
              [2, '#74d21c'],
              [3, '#8fb91e'],
              [4, '#98b11d'],
              [5, '#a1a61e'],
              [6, '#b0971d'],
              [7, '#bf841b'],
              [8, '#d26a18'],
              [9, '#e64810'],
              [10, 'rgb(255, 0, 0)']*/
            ]
          }
        }
      });
    });

    map.on('click', function(e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['litter'] // replace this with the name of the layer
      });
    
      if (!features.length) {
        return;
      }
    
      const feature = features[0];
    
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(`<img src="${feature.properties.imgUrl}" width=375 height=250 style="margin: 5px"/>`)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
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
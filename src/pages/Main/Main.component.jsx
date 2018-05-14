import React, { Component } from 'react';

class Map extends Component {
componentDidMount() {
  console.log("a");
  var DG = require('2gis-maps');
  var map = DG.map('map', {
    'center': [54.98, 82.89],
    'zoom': 13
  });
}

  render() {
    return (
      <div>
        <h1>I'm Main!</h1>
        <div id="map"></div>
      </div>

    );
  }
}

export default Map;

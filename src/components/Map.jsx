import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import {connect} from "react-redux"

class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    drawRoute = (map, coordinates) => {
        map.flyTo({
          center: coordinates[0],
          zoom: 15
        });
       
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#ffc617",
            "line-width": 8
          }
        });
      };

    componentDidMount() {
        mapboxgl.accessToken="pk.eyJ1IjoibWlraGFpbHNtdjg5IiwiYSI6ImNreG5ib3ZwaDI2dmYycGtqcDJ0eGxhMHMifQ.N-xkZFCKg3Z_1S-RB6OX7A";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })
    }

    componentDidUpdate() {
        console.log(this.props.route);
        if (this.props.route.length !== 0) {
            this.drawRoute(this.map, this.props.route);
        }
    }

    componentWillUnmount(){
        this.map.remove()
    }
    
    render() {
        return <div className='map-wrapper'>
            <div data-testid="map" className="map" ref={this.mapContainer}></div>
        </div>
    }
}


const MapWithConnect = connect(
    (state) => ({route: state.route.route}),
    null
) (Map)

export default MapWithConnect;
import React  from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div 
style={{
  color: 'white', 
  background: '#70c7be',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;

const defaultProps = {
  center: {
    lat: 52.520008,
    lng: 13.404954
  },
  zoom: 11
};
const SimpleMap = ({lat =0 , lng = 0 , onGeoChanged=f =>f}) =>
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={[lat,lng]}
        onClick = {(marker)=>onGeoChanged(marker)}
      >
        <AnyReactComponent
          lat={lat}
          lng={lng}
          text={'Change my location'}
        />
      </GoogleMapReact>
    </div>
 
SimpleMap.propTypes = {
    lat: PropTypes.number,
    lang: PropTypes.number
  }
  
export default SimpleMap;

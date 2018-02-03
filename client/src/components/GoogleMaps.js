import React from 'react';
import {
	compose,
	withProps,
	lifecycle,
	withHandlers,
	withState
	// withStateHandlers
} from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';
import GoogleSearchHoc from './GoogleSearch';
import { Grid, Row, Col } from 'react-flexbox-grid';

const url = {
	begin: 'https://maps.googleapis.com/maps/api/js?key=',
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY,
	end: '&v=3.exp&libraries=geometry,drawing,places'
};

const loading = () => <div>Loading... Please Wait</div>;

const GoogleMapHOC = compose(
	withProps({
		googleMapURL: `${url.begin}${url.apiKey}${url.end}`,
		loadingElement: <div style={{ width: '100%', height: '600px' }} />,
		containerElement: <div style={{ width: '100%', height: '600px' }} />,
		mapElement: <div style={{ width: '100%', height: '600px' }} />
	}),
	withScriptjs,
	withGoogleMap,
	withState('coords', 'setCoords', null),
	withHandlers({
		initLoc: () => () => {
			return new Promise((resolve, reject) => {
				const positionSuccess = position => {
					resolve(position);
				};
				const error = error => {
					reject(error);
				};
				return navigator.geolocation.getCurrentPosition(positionSuccess, error);
			});
		}
	}),
	lifecycle({
		componentWillMount() {
			this.props.initLoc().then(loc => {
				const latitude = parseFloat(loc.coords.latitude);
				const longitude = parseFloat(loc.coords.longitude);
				const pos = {
					lat: latitude,
					lng: longitude
				};
				localStorage.setItem('position', JSON.stringify(pos));
			});
		},
		componentDidMount() {
			const item = JSON.parse(localStorage.getItem('position'));
			this.props.setCoords(item);
			console.log(item);
		}
	})
)(props => (
	<div>
		<GoogleMap
			defaultZoom={14}
			center={
				props.coords !== null
					? props.coords
					: {
							lat: 51.5055823,
							lng: -0.0984671
					}
			}>
			{props.isMarkerShowen && (
				<Marker
					position={
						props.coords !== null
							? props.coords
							: {
									lat: 51.5055823,
									lng: -0.0984671
							}
					}
				/>
			)}
		</GoogleMap>
		<GoogleSearchHoc />
	</div>
));

export default GoogleMapHOC;

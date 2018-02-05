import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import GoogleMapsWrapper from './GoogleMapsWrapper';
import Loader from './Loader';

const url = {
	begin: 'https://maps.googleapis.com/maps/api/js?key=',
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY,
	end: '&v=3.exp&libraries=geometry,drawing,places'
};

class GoogleMaps extends Component {
	state = {
		position: { lat: null, lng: null }
	};

	initLoc = () => {
		return new Promise((resolve, reject) => {
			const positionSuccess = position => {
				resolve(position);
			};
			const error = error => {
				reject(error);
			};
			return navigator.geolocation.getCurrentPosition(positionSuccess, error);
		});
	};

	componentDidMount() {
		this.initLoc()
			.then(loc => {
				return loc;
			})
			.then(setPosition => {
				const latitude = parseFloat(setPosition.coords.latitude);
				const longitude = parseFloat(setPosition.coords.longitude);
				const position = { lat: latitude, lng: longitude };
				this.setState({ position }, () => {
					localStorage.setItem('position', JSON.stringify(this.state));
					return position;
				});
			});
	}

	componentWillMount() {
		const item = JSON.parse(localStorage.getItem('position'));
		this.setState(item);
	}

	render() {
		const { position } = this.state;

		return position.lat !== null && position.lng !== null ? (
			<GoogleMapsWrapper
				googleMapURL={`${url.begin}${url.apiKey}${url.end}`}
				loadingElement={<div style={{ height: '100%' }} />}
				containerElement={<div style={{ height: '600px' }} />}
				mapElement={<div style={{ height: '100%' }} />}
				defaultZoom={14}
				defaultCenter={position}>
				<Marker position={position} />
			</GoogleMapsWrapper>
		) : (
			<Loader />
		);
	}
}

export default GoogleMaps;

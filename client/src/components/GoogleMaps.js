import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";

class GoogleMaps extends Component {
	fetchPlaces = (mapProps, map) => {
		const { google } = mapProps;
		const service = new google.maps.places.PlacesService(map);
	};

	comoponentDidMount() {
		console.log(process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY);
	}

	render() {
		console.log(process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY);

		return (
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY
				}}
			/>
		);
	}
}

export default GoogleMaps;

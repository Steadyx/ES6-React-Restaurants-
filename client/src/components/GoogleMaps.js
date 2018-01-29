import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
	position: "relative",
	width: "50%",
	height: "50%",
	zIndex: 1000,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	boxShadow: " inset 0 5px 10px #000000"
};

class GoogleMaps extends Component {
	fetchPlaces = (mapProps, map) => {
		const { google } = mapProps;
		const service = new google.maps.places.PlacesService(map);
	};

	render() {
		return <Map google={this.props.google} style={style} />;
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_MAPS_PUBLIC_KEY
})(GoogleMaps);

import React from "react";
import {
	compose,
	withProps,
	lifecycle,
	withHandlers,
	withStateHandlers
} from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const url = {
	begin: "https://maps.googleapis.com/maps/api/js?key=",
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY,
	end: "&v=3.exp&libraries=geometry,drawing,places"
};

const ContainerElement = () => (
	<div style={{ width: "100%", height: "600px" }} />
);
const MapElement = () => <div style={{ width: "100%", height: "600px" }} />;

const LoadigElement = () => <div style={{ width: "100%", height: "600px" }} />;

const GoogleMapHOC = compose(
	withProps({
		googleMapURL: `${url.begin}${url.apiKey}${url.end}`,
		loadingElement: LoadigElement(),
		containerElement: ContainerElement(),
		mapElement: MapElement()
	}),
	withScriptjs,
	withGoogleMap,
	withHandlers({
		intiLocation: () => ({
			retrieveLocation: {
				promise: options => {
					return new Promise(function(resolve, reject) {
						navigator.geolocation.getCurrentPosition(resolve, reject, options);
					});
				}
			},

			resolveLocationPromise: {
				log: console.log(this),
				resolve: () => {
					console.log(this);
				}
			}
		})
	}),
	withStateHandlers(
		({ cordinates = { lat: null, lng: null } }) => ({
			cords: cordinates
		}),
		{
			setLocation: ({ cords }) => value => ({
				cords: { lat: this.props.retrieveLocation }
			})
		}
	),
	lifecycle({
		componentWillUpdate() {
			this.setState(() => ({
				lat: this.props.setLocation
			}));
		}
	})
)(props => (
	<GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: 51.509865, lng: -0.118092 }}>
		{
			(console.log(props),
			props.isMarkerShowen && (
				<Marker position={{ lat: 51.509865, lng: -0.118092 }} />
			))
		}
	</GoogleMap>
));

export default GoogleMapHOC;

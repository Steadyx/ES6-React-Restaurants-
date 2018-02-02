import React from "react";
import {
	compose,
	withProps,
	lifecycle,
	withHandlers,
	withState
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
	withState("coords", "setCoords", {
		lat: null,
		lng: null
	}),
	withHandlers({
		initLoc: (props) => () => {
			return new Promise((resolve, reject) => {
				const positionSuccess = (position) => {
					resolve(position);
				};
				const error = (error) => {
					reject(error);
				};
				return navigator.geolocation.getCurrentPosition(positionSuccess, error);
			});
		}
	}),
	lifecycle({
		componentDidMount() {
			this.setState(() => ({
				init: this.props.initLoc().then((loc) => {
					const latitude = parseFloat(loc.coords.latitude);
					const longitude = parseFloat(loc.coords.longitude);
					return this.props.setCoords({
						lat: latitude,
						lng: longitude
					});
				})
			}));
		}
	})
)((props) => (
	<GoogleMap
		defaultZoom={14}
		center={
			props.coords.lat !== null
				? props.coords
				: {
						lat: 51.5055823,
						lng: -0.0984671
					}
		}>
		{
			(console.log(props.coords),
			props.isMarkerShowen && (
				<Marker
					position={
						props.coords.lat !== null
							? props.coords
							: {
									lat: 51.5055823,
									lng: -0.0984671
								}
					}
				/>
			))
		}
	</GoogleMap>
));

export default GoogleMapHOC;

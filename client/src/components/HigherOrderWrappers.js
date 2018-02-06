import React from 'react';
import {
	GoogleMap,
	withGoogleMap,
	StandaloneSearchBox,
	withScriptjs
} from 'react-google-maps';

export const GoogleMapsWrapper = withScriptjs(
	withGoogleMap(props => {
		return (
			<GoogleMap {...props} ref={props.onMapMounted}>
				{props.children}
			</GoogleMap>
		);
	})
);

export const SearchBarWrapper = withScriptjs(
	withGoogleMap(props => {
		console.log(props);
		return (
			<StandaloneSearchBox {...props} ref={props.onMapMounted}>
				{props.children}
			</StandaloneSearchBox>
		);
	})
);

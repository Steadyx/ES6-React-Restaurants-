import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { SearchBarWrapper } from './HigherOrderWrappers';
import { Grid, Row, Col } from 'react-flexbox-grid';

// const GoogleSearchHoc = compose(
// 	withProps({
// 		loadingElement: <div style={{ width: '50%', height: `100%` }} />,
// 		containerElement: <div style={{ width: '50%', height: `400px` }} />
// 	}),
// 	lifecycle({
// 		componentWillMount() {
// 			const refs = {};
//
// 			this.setState({
// 				places: [],
// 				onSearchBoxMounted: ref => {
// 					refs.searchBox = ref;
// 				},
// 				onPlacesChanged: () => {
// 					const places = refs.searchBox.getPlaces();
//
// 					this.setState({
// 						places
// 					});
// 				}
// 			});
// 		}
// 	})
// )(props => (
// 	<Grid>
// 		<Row>
// 			<Col>
// 				<div data-standalone-searchbox="" style={{ marginTop: 30 }}>
// 					<div style={{ textAlign: 'left' }}>Find your favorite</div>
// 					<StandaloneSearchBox
// 						ref={props.onSearchBoxMounted}
// 						bounds={props.bounds}
// 						onPlacesChanged={props.onPlacesChanged}>
// 						<input
// 							type="text"
// 							placeholder="Customized your placeholder"
// 							style={{
// 								boxSizing: `border-box`,
// 								border: `1px solid transparent`,
// 								width: `50vw`,
// 								height: `35px`,
// 								padding: `10px 12px`,
// 								marginTop: `10px`,
// 								borderRadius: `3px`,
// 								boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
// 								fontSize: `16px`,
// 								outline: `none`,
// 								textOverflow: `ellipses`
// 							}}
// 						/>
// 					</StandaloneSearchBox>
// 					<ol>
// 						{props.places.map(
// 							({ place_id, formatted_address, geometry: { location } }) => (
// 								<li key={place_id}>
// 									{formatted_address}
// 									{' at '}
// 									({location.lat()}, {location.lng()})
// 								</li>
// 							)
// 						)}
// 					</ol>
// 				</div>
// 			</Col>
// 		</Row>
// 	</Grid>
// ));
const url = {
	begin: 'https://maps.googleapis.com/maps/api/js?key=',
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_PUBLIC_KEY,
	end: '&v=3.exp&libraries=geometry,drawing,places'
};
class PlacesWithStandaloneSearchBox extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		places: []
	};

	componentWillMount() {
		console.log(this.props);
		const refs = {};

		this.setState({
			places: []
		});

		const onSearchBoxMounted = ref => {
			refs.searchBox = ref;
		};

		const onPlacesChanged = () => {
			const places = refs.searchBox.getPlaces();

			this.setState({
				places
			});
		};
	}

	render() {
		const { props } = this.props;
		console.log(this.state);

		return (
			<Grid>
				<Row>
					<Col>
						<div data-standalone-searchbox="" style={{ marginTop: 30 }}>
							<div style={{ textAlign: 'left' }}>Find your favorite</div>
							<SearchBarWrapper
								loadingElement={<div style={{ height: '100%' }} />}
								containerElement={<div style={{ height: '600px' }} />}
								mapElement={<div style={{ height: '100%' }} />}>
								<input
									type="text"
									placeholder="Customized your placeholder"
									style={{
										boxSizing: `border-box`,
										border: `1px solid transparent`,
										width: `50vw`,
										height: `35px`,
										padding: `10px 12px`,
										marginTop: `10px`,
										borderRadius: `3px`,
										boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
										fontSize: `16px`,
										outline: `none`,
										textOverflow: `ellipses`
									}}
								/>
							</SearchBarWrapper>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default PlacesWithStandaloneSearchBox;

import React, { Component } from 'react';
const { compose, withProps, lifecycle } = require('recompose');
const { withScriptjs } = require('react-google-maps');
const {
	StandaloneSearchBox
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

const GoogleSearchHoc = compose(
	withProps({
		loadingElement: <div style={{ width: '50%', height: `100%` }} />,
		containerElement: <div style={{ width: '50%', height: `400px` }} />
	}),
	lifecycle({
		componentWillMount() {
			const refs = {};

			this.setState({
				places: [],
				onSearchBoxMounted: ref => {
					refs.searchBox = ref;
				},
				onPlacesChanged: () => {
					const places = refs.searchBox.getPlaces();

					this.setState({
						places
					});
				}
			});
		}
	})
)(props => (
	<Grid>
		<Row>
			<Col>
				<div data-standalone-searchbox="" style={{ marginTop: 30 }}>
					<div style={{ textAlign: 'left' }}>Find your favorite</div>
					<StandaloneSearchBox
						ref={props.onSearchBoxMounted}
						bounds={props.bounds}
						onPlacesChanged={props.onPlacesChanged}>
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
					</StandaloneSearchBox>
					<ol>
						{props.places.map(
							({ place_id, formatted_address, geometry: { location } }) => (
								<li key={place_id}>
									{formatted_address}
									{' at '}
									({location.lat()}, {location.lng()})
								</li>
							)
						)}
					</ol>
				</div>
			</Col>
		</Row>
	</Grid>
));

class PlacesWithStandaloneSearchBox extends Component {
	state = {
		places: []
	};

	componentWillMount() {
		const refs = {};

		this.setState({
			places: [],
			onSearchBoxMounted: ref => {
				refs.searchBox = ref;
			},
			onPlacesChanged: () => {
				const places = refs.searchBox.getPlaces();

				this.setState({
					places
				});
			}
		});
	}

	render() {
		return (
			<div data-standalone-searchbox="" style={{ marginTop: 30 }}>
				<div style={{ textAlign: 'left' }}>Find your favorite</div>
				<StandaloneSearchBox
					ref={props.onSearchBoxMounted}
					bounds={props.bounds}
					onPlacesChanged={props.onPlacesChanged}>
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
				</StandaloneSearchBox>
				<ol>
					{props.places.map(
						({ place_id, formatted_address, geometry: { location } }) => (
							<li key={place_id}>
								{formatted_address}
								{' at '}
								({location.lat()}, {location.lng()})
							</li>
						)
					)}
				</ol>
			</div>
		);
	}
}

export default PlacesWithStandaloneSearchBox;

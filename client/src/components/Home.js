import React, { Component } from "react";
import { HomeContainer } from "./styles/Home";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMapHOC from "./GoogleMaps";

class Home extends Component {
	render() {
		return (
			<HomeContainer>
				<Grid style={{ width: "100%" }}>
					<Row middle="xs">
						<Col center="xl" style={{ width: "100%", height: "600px" }}>
							<GoogleMapHOC isMarkerShowen />
						</Col>
					</Row>
				</Grid>
			</HomeContainer>
		);
	}
}

export default Home;

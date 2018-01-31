import React, { Component } from "react";
import { HomeContainer } from "./styles/Home";
import { CenterMap } from "./styles/Grid";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMaps from "./GoogleMaps";

class Home extends Component {
	render() {
		return (
			<HomeContainer>
				<Grid>
					<Row middle="xs">
						<Col center="xl" style={{ width: "100%", height: "600px" }}>
							<GoogleMaps />
						</Col>
					</Row>
				</Grid>
			</HomeContainer>
		);
	}
}

export default Home;

import React, { Component } from "react";
import { HomeContainer } from "./styles/Home";
import { CenterMap } from "./styles/Grid";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMaps from "./GoogleMaps";

class Home extends Component {
	render() {
		return (
			<HomeContainer>
				<CenterMap>
					<Grid>
						<Row middle="xs">
							<Col center="xs">
								<GoogleMaps />
							</Col>
						</Row>
					</Grid>
				</CenterMap>
			</HomeContainer>
		);
	}
}

export default Home;

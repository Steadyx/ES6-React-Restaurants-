import React, { Component } from "react";
import { HomeContainer } from "./styles/Home";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMaps from "./GoogleMaps";

class Home extends Component {
	render() {
		return (
			<HomeContainer>
				<Grid style={{ width: "100%" }}>
					<Row middle="xs">
						<Col center="xl" style={{ width: "100%", height: "600px" }}>
							<GoogleMaps />
						</Col>
					</Row>
					{/* <Row middle="xs" center="xs">
						<Col center="xl">
							<GoogleSearchBarHOC style={{ width: "100%" }} />
						</Col>
					</Row> */}
				</Grid>
			</HomeContainer>
		);
	}
}

export default Home;
//

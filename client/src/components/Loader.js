import React from "react";
import { ClipLoader } from "react-spinners";
import { Grid, Row, Col } from "react-flexbox-grid";

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}
	render() {
		return (
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<div className="sweet-loading">
							<ClipLoader
								color={"#123abc"}
								loading={this.state.loading}
								size={300}
       />
						</div>
						<div>Loading, Please Wait.</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Loader;

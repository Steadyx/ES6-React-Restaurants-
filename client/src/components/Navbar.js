import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
	Header,
	List,
	ListItem,
	ListButton,
	StyledNavLink
} from "./styles/Navbar";
import { Grid, Row, Col } from "react-flexbox-grid";

class Navbar extends Component {
	state = {
		toggled: false,
		active: true
	};

			renderToggle = el => {
		this.setState(prevState => ({
			toggled: !prevState.toggled
		}));

		console.log(el.button);
	};

	render() {
		// const { toggled, active } = this.state;
		// const { history } = this.props;
		return (
			<Header>
				<Grid>
					<Row between="xs" middle="xs">
						<Col xs={6} center="xs">
							<h1>Resturaunt</h1>
						</Col>
						<Col xs={6} center="xs">
							<Router>
								<List>
									<ListItem>
										<StyledNavLink to="/">
											<ListButton type="primary" {...this.props}>
												Home
											</ListButton>
										</StyledNavLink>
									</ListItem>
									<ListItem>
										<StyledNavLink to="/login">
											<ListButton type="primary">Login</ListButton>
										</StyledNavLink>
									</ListItem>
								</List>
							</Router>
						</Col>
					</Row>
				</Grid>
			</Header>
		);
	}
}

export default Navbar;

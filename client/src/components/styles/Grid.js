import glamorous from "glamorous";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMapsComponent from "../GoogleMaps";

export const CenterMap = glamorous.div({
	width: "100px",
	height: "300px",
	zIndex: "10000"
});

export const StyledMap = glamorous(GoogleMapsComponent)({
	boxShadow: "inset 0 0 7px black"
});

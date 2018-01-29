import glamorous from "glamorous";
import backImg from "../../images/background.jpg";
import resturaunt from "../../images/resturaunt.jpg";

export const HomeContainer = glamorous.div({
	position: "relative",
	backgroundImage: `url(${resturaunt})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100vh",
	"&::after": {
		content: `""`,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(42, 37, 20, 0.6)"
	}
});

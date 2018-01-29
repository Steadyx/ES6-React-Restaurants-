import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

const buttonColors = {
	primary: "#B6635B",
	secondary: "#5bb6a0",
	danger: "#b65b6e",
	success: "#5bb664"
};

export const Header = glamorous.header({
	position: "sticky",
	backgroundColor: "#F2F3F5",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "baseline",
	padding: "5px 0",
	boxShadow: " 0px 5px 15px rgba(37, 37, 37, 0.20)",
	width: "100%",
	top: 0,
	left: 0,
	zIndex: 2000
});

export const List = glamorous.ul({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	padding: "0",
	margin: "0",
	width: "100%",
	maxWidth: "100%",
	overflowY: "hidden",
	flexWrap: "wrap"
});

export const ListItem = glamorous.li({
	listStyle: "none",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

export const ListButton = glamorous.button(
	{
		fontSize: 16,
		border: "none",
		cursor: "pointer",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		padding: "10px 40px",
		textAlign: "center",
		transition: "0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)",
		borderRadius: 4,
		color: "#fff",
		boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
		":hover": {
			opacity: 0.7,
			transform: "translateY(-1px)",
			boxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)"
		}
	},
	props => ({
		backgroundColor: buttonColors[props.type] || buttonColors["red"]
	})
);

export const StyledNavLink = glamorous(NavLink)({
	color: "#fff",
	textDecoration: "none"
});

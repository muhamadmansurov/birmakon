import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
	},

	header: {
		marginHorizontal: 20,
	},

	headerTxt: {
		fontSize: 20,
		marginHorizontal: 20,
		color: COLORS.defaultBlack,
	},

	box: {
		backgroundColor: COLORS.chatColor,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		flex: 1,
	},

	top: {
		backgroundColor: COLORS.lightBlack,
		padding: 15,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},

	topText: {
		fontSize: 17,
		color: COLORS.white,
		fontWeight: "500",
	},

	inner: {
		padding: 15,
		flex: 1,
	},

	innerBox: {
		padding: 15,
		backgroundColor: "rgba(212, 212, 212, 0.5);",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
	},

	innerText: {
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	texting: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	input: {
		width: "80%",
		marginLeft: 5,
	},

	textingBox: {
		height: 45,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: "rgba(212, 212, 212, 0.5);",
	},

	tgicon: {
		marginLeft: 10,
		alignSelf: "center",
	},

	myMsg: {
		color: COLORS.white,
	},

	myBox: {
		marginTop: 20,
		alignItems: "flex-end",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		padding: 10,
		backgroundColor: COLORS.lighBlue,
		alignSelf: "flex-end",
	},
	headerSection: {
		flexDirection: "row",
		marginVertical: 20,
		marginHorizontal: 20,
	},
	headerSectionText: {
		fontWeight: "600",
		fontSize: 20,
		color: COLORS.defaultBlack,
	},
	headerSectionBox: {
		marginHorizontal: 20,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	headerBoxView: {
		backgroundColor: "#FAC8BE",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	headerBoxView1: {
		backgroundColor: "#FAC8BE",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginLeft: 10,
	},
	headerBoxText: {
		fontSize: 14,
		fontWeight: "500",
		color: COLORS.defaultBlack,
	},
});

import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
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
		marginHorizontal: 20,
		marginTop: 10,
		flex: 1,
		flexDirection: "row",
	},

	messageBox: {
		backgroundColor: COLORS.chatColor,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 5,
		borderRadius: 8,
		flex: 1,
		marginLeft: 10,
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
		paddingBottom: 150,
	},

	innerBox: {
		padding: 15,
		backgroundColor: "rgba(212, 212, 212, 0.5);",
		borderRadius: 8,
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
		paddingHorizontal: 10,
		paddingVertical: 10,
	},

	input: {
		width: "80%",
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
		marginVertical: 5,
		paddingBottom: 5,
	},

	headerActiveBox: {
		backgroundColor: "#FAC8BE",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 25,
		alignItems: "center",
		flex: 1,
	},

	headerIsActive: {
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 25,
		backgroundColor: COLORS.lightGray,
		alignItems: "center",
		flex: 1,
	},

	headerActiveBox1: {
		backgroundColor: "#FAC8BE",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginLeft: 10,
		alignItems: "center",
		flex: 1,
	},

	headerIsActiveBox1: {
		backgroundColor: COLORS.lightGray,
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginLeft: 10,
		alignItems: "center",
		flex: 1,
	},

	headerBoxText: {
		fontSize: 14,
		fontWeight: "500",
		color: COLORS.white,
	},

	headerIsActiveText: {
		fontSize: 14,
		fontWeight: "500",
		color: COLORS.defaultBlack,
	},

	boxsView: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		flexDirection: "row",
		marginBottom: 10,
		alignItems: "center",
	},

	boxs: {
		paddingHorizontal: 45,
		paddingVertical: 40,
		backgroundColor: COLORS.gray,
	},

	productsView: {
		alignItems: "center",
		marginLeft: 20,
	},

	productsText: {
		fontSize: 12,
		fontWeight: "500",
		marginTop: 5,
	},

	rightArrow: {
		backgroundColor: COLORS.lightOrange,
		borderRadius: 50,
		alignItems: "center",
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
});

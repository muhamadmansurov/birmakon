import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	text: {
		marginVertical: 20,
		marginHorizontal: 20,
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	content: {
		alignSelf: "center",
	},

	view: {
		justifyContent: "flex-end",
		margin: 0,
	},

	modal: {
		padding: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: COLORS.white,
	},

	modalText: {
		fontSize: 16,
		marginVertical: 15,
		color: COLORS.defaultBlack,
	},
	button: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 16,
	},

	sellersActiveBtn: {
		paddingHorizontal: 18,
		paddingVertical: 12,
		backgroundColor: COLORS.lightOrange,
		borderRadius: 10,
		marginRight: 10,
		marginVertical: 10,
	},

	sellersIsActiveBtn: {
		paddingHorizontal: 18,
		paddingVertical: 12,
		backgroundColor: COLORS.lightGray,
		borderRadius: 10,
		marginRight: 10,
		marginVertical: 10,
	},

	sellersActiveText: {
		color: COLORS.textColor,
		fontSize: 14,
	},

	sellersIsActiveText: {
		color: COLORS.white,
	},

	tabView: {
		flexDirection: "row",
		color: COLORS.gray,
		fontWeight: "bold",
		alignItems: "center",
		backgroundColor: "red",
	},

	// tabview

	styleOne: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginVertical: 10,
		borderRadius: 10,
		marginTop: 20,
	},

	buttonBox: {
		borderColor: "#fff",
		paddingVertical: 10,
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.lightOrange,
		marginLeft: 5,
		borderRadius: 5,
	},

	buttonBoxTwo: {
		paddingVertical: 10,
		borderColor: "#fff",
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.lightgray,
		marginLeft: 5,
		borderRadius: 5,
	},

	headerBox: {
		marginTop: 30,
	},

	scrollContainer: {
		flex: 1,
	},
});

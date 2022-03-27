import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	buttonTxt: {
		fontWeight: "500",
		fontSize: 18,
	},

	itsNotMeView: {
		paddingHorizontal: 25,
		paddingVertical: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	itIsNotMeText: {
		color: COLORS.whiteGray,
		fontSize: 14,
		fontWeight: "500",
	},

	deliveryChooseView: {
		paddingHorizontal: 15,
	},

	deliveryChooseText: {
		color: COLORS.textColor,
		fontSize: 16,
		fontWeight: "500",
		marginLeft: 10,
	},

	couriersOrderView: {
		paddingHorizontal: 20,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		shadowColor: COLORS.defaultBlack,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		paddingVertical: 10,
		marginTop: 10,
		marginBottom: 10,
	},

	courerDelivery: {
		fontSize: 18,
		fontWeight: "400",
		color: COLORS.textColor,
	},

	dateTexts: {
		fontSize: 18,
		color: COLORS.black,
		marginTop: 5,
		marginLeft: 2,
	},

	rowButtons: {
		marginTop: 5,
		marginRight: 20,
		flexDirection: "row",
	},

	dot: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.orange,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	background: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.orange,
	},

	dotGray: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.gray,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	backgroundGray: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.white,
	},

	black: {
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	regionText: {
		fontSize: 14,
		marginTop: 10,
	},

	orderDelivery: {
		fontSize: 13,
		fontWeight: "500",
		color: COLORS.gray,
		marginTop: 5,
	},

	recipientView: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginHorizontal: 15,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	rowView: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 5,
	},

	recipientText: {
		fontSize: 15,
		fontWeight: "500",
	},

	signInBtn: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 15,
		backgroundColor: COLORS.orange,
	},

	signInText: {
		fontSize: 14,
		fontWeight: "500",
		color: COLORS.white,
	},

	notMeText: {
		fontSize: 13,
	},

	checkedBtn: {
		marginRight: 10,
	},

	checkedActiveBtn: {
		marginRight: 10,
		backgroundColor: COLORS.darkBlue2,
	},

	rowViewSecond: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
	},

	rowsInput: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},

	nameInput: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 8,
		borderColor: COLORS.lightgray,
		borderWidth: 1,
		flex: 1,
		alignItems: "flex-start",
		marginTop: 3,
	},

	nameText: {
		fontSize: 14,
		fontWeight: "500",
		marginTop: 15,
	},

	rowsChecked: {
		flexDirection: "row",
		marginTop: 15,
		paddingBottom: 10,
	},

	wildberriesText: {
		fontSize: 12,
		fontWeight: "500",
		color: COLORS.gray,
	},

	allPrice: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginHorizontal: 15,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginTop: 15,
	},

	rowsView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},

	allPriceText: {
		fontSize: 14,
		fontWeight: "500",
	},

	productText: {
		fontSize: 12,
		fontWeight: "500",
		color: COLORS.gray,
	},

	productPriceText: {
		fontSize: 12,
		fontWeight: "500",
	},

	saveButton: {
		paddingHorizontal: 15,
		paddingVertical: 12,
		borderRadius: 8,
		backgroundColor: COLORS.darkBlue2,
		alignItems: "center",
		marginTop: 10,
	},

	orderedText: {
		fontSize: 12,
		fontWeight: "500",
		color: COLORS.white,
	},
});

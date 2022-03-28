import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		// paddingVertical: 60,
		backgroundColor: COLORS.white,
	},

	header: {
		// marginTop: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.white,
		elevation: 4,
	},

	headerText: {
		fontSize: 15,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.blue,
	},

	button: {
		flexDirection: "row",
	},

	buttonText: {
		color: COLORS.white,
		marginRight: 10,
	},

	buttonCon: {
		paddingHorizontal: 10,
		paddingVertical: 0,
		marginHorizontal: 0,
		marginTop: 0,
		borderRadius: 14,
	},

	carousel: {
		paddingVertical: 20,
	},

	itemName: {
		color: COLORS.defaultBlack,
		marginHorizontal: 25,
		fontSize: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	credit: {
		padding: 18,
		backgroundColor: COLORS.lightGray,
		marginHorizontal: 20,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
	},

	creditPrice: {
		marginLeft: 10,
	},

	creditName: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	creditPriceText: {
		color: COLORS.defaultBlack,
		fontSize: 15,
		fontWeight: "700",
	},

	map: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	key: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	compos: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		// marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
	},

	composition: {
		color: COLORS.defaultBlack,
		fontSize: 15,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	buttonTxt: {
		color: COLORS.white,
		fontSize: 16,
		marginHorizontal: 20,
	},

	composTwo: {
		marginVertical: 20,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	rowHeader: {
		marginTop: 20,
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: "row",
	},

	arrow: {
		alignSelf: "center",
		marginLeft: 0.5,
	},

	txt: {
		fontSize: 14,
	},

	blueText: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.blue,
		marginLeft: 10,
		fontSize: 14,
	},

	blueText2: {
		fontSize: 14,
		marginLeft: 10,
	},

	flexEnd: {
		color: COLORS.red,
		marginHorizontal: 20,
		marginTop: 10,
		alignSelf: "flex-end",
		textDecorationLine: "underline",
		textDecorationColor: COLORS.gray,
	},

	buttonReview: {
		fontSize: 16,
		color: COLORS.white,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	contentContainerStyle: { paddingHorizontal: 12 },

	containerFlat: {
		marginBottom: 20,
		alignSelf: "center",
	},
	cartText: {
		color: COLORS.white,
		marginRight: 4,
		fontWeight: "700",
	},

	title: {
		color: COLORS.defaultBlack,
		fontSize: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	inactiveCartText: {
		color: COLORS.textColor,
		marginRight: 8,
		fontFamily: "Montserrat-Medium",
	},
	marginBottom: {
		marginBottom: 40,
	},

	marginBottomEnd: {
		marginBottom: 80,
	},
	otsenka: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},
	corusellContiner: {
		marginTop: 20,
		marginLeft: 18,
		paddingHorizontal: 1,
	},
	corusellText: {
		fontSize: 22,
		fontWeight: "700",
		color: COLORS.lightBlack,
		marginLeft: 20,
		marginTop: 20,
	},
	corusell: {
		width: 75,
		height: 68,
		borderRadius: 5,
	},
	sectionSize: {
		marginTop: 20,
		marginHorizontal: 12,
		borderWidth: 1,
		paddingHorizontal: 18,
		paddingVertical: 14,
		borderRadius: 5,
		marginLeft: 1,
	},
	sectionText: {},
	activeColor: {
		width: 92,
		height: 86,
	},
	activeSize: {
		fontSize: 20,
		fontWeight: "500",
		borderRadius: 5,
		color: COLORS.lightBlack,
	},
	deliveryView: {
		marginVertical: 30,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	deliveryText: {
		fontWeight: "600",
		fontSize: 20,
		color: COLORS.black,
		marginVertical: 6,
	},
	deliveryText1: {
		fontSize: 16,
		color: COLORS.black,
		marginVertical: 6,
	},
	counter: {
		flexDirection: "row",
		marginHorizontal: 20,
	},
	minus: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.orange,
	},

	plus: {
		padding: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.lightBlack,
	},

	topBottom: {
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
	},

	function: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 15,
	},

	functionText: {
		fontSize: 16,
		color: "#666666",
	},

	sectionContainer: {
		width: 180,
	},

	oldContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		paddingHorizontal: 25,
		marginLeft: WINDOW_WIDTH / 10 - 50,
	},

	oldBtn: {
		height: 38,
		width: 100,
		backgroundColor: "#131E3D",
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		paddingHorizontal: 15,
	},

	oldText: {
		color: COLORS.white,
	},

	oldView1: {
		width: WINDOW_WIDTH / 10 - 100,
		height: 38,
		backgroundColor: COLORS.lightOrange,
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		paddingHorizontal: 10,
	},
	sectionBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 40,
		marginHorizontal: 20,
	},
	sectionBoxText: {
		fontSize: 20,
		fontWeight: "600",
		color: COLORS.lightBlack,
	},
	iconView: {
		marginTop: 8,
	},
	flatlistContainerView: {
		marginHorizontal: 10,
		paddingVertical: 20,
	},
	flatlistContainer: {
		marginHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	flatlistContainerText: {
		fontWeight: "600",
		fontSize: 18,
		color: COLORS.black,
	},
	flatlistContainerBox: {
		marginTop: 10,
	},
	flatlistContainerBoxText: {
		fontSize: 12,
		marginLeft: 10,
		color: COLORS.gray,
	},
	flatlistContainerBoxText1: {
		fontSize: 12,
		marginLeft: 10,
		marginTop: 10,
		color: COLORS.gray,
	},
	flatlistContainer12: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	flatlistContainerText12: {
		fontSize: 18,
		color: COLORS.black,
		fontWeight: "600",
	},
	propertyBoxText: {
		fontSize: 16,
		color: COLORS.black,
		marginBottom: 7,
	},
	scrollView: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: "#E5E5E5",
		justifyContent: "center",
		alignItems: "center",
		right: 10,
		top: 40,
		zIndex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	scrollView1: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: "#E5E5E5",
		justifyContent: "center",
		alignItems: "center",
		right: 10,
		top: 28,
		zIndex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},

	rowBox: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

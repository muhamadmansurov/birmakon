import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		// marginTop: 20,
	},

	header: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	title: {
		fontSize: 20,
		marginVertical: 10,
		marginHorizontal: 20,
	},

	itemBox: {
		marginVertical: 10,
		marginHorizontal: 20,
		marginTop: 25,
	},
	sectionContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginHorizontal: 30,
		marginTop: 20,
	},
	section: {
		borderWidth: 1,
		width: 110,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.orange,
		borderColor: COLORS.orange,
		borderRadius: 5,
	},
	sectionText: {
		color: COLORS.white,
		fontSize: 13,
		fontWeight: "500",
	},
	section1: {
		borderWidth: 1,
		width: 110,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.lightPurple,
		borderColor: COLORS.lightPurple,
		marginLeft: 8,
		borderRadius: 5,
	},
	sectionText1: {
		fontSize: 13,
		fontWeight: "500",
		color: COLORS.black,
	},
});

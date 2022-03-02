import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 10,
	},

	header: {
		// marginHorizontal: 20,
		marginVertical: 20,
	},

	banner: {
		width: WINDOW_WIDTH,
		height: 85,
		borderRadius: 5,
	},

	box: {
		marginTop: 20,
	},
	sectionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		paddingBottom: 10,
		borderBottomColor: COLORS.whiteGray,
		paddingHorizontal: 10,
		marginVertical: 25,
	},
	sectionContainerBox: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	sectionContainerText: {
		color: COLORS.red,
		fontWeight: "500",
		fontSize: 16,
	},
	sectionContainerView: {
		marginLeft: 10,
	},
});

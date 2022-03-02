import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	header: {
		marginHorizontal: 20,
		marginVertical: 10,
	},

	input: {
		borderWidth: 1,
		borderRadius: 8,
		marginVertical: 20,
		paddingVertical: 15,
		marginHorizontal: 20,
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.lightGray,
	},
	containerSectionView: {
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray,
		marginLeft: 18,
	},
	containerSection: {
		flexDirection: "row",
		marginLeft: 10,
	},
	containerSectionText: {
		fontSize: 13,
		fontWeight: "500",
		color: "#023047",
	},
	containerSectionIcon: {
		marginRight: 8,
	},
	containerSectionBox: {
		marginLeft: 16,
		marginTop: 6,
	},
	containerSectionBoxText: {
		fontWeight: "500",
		fontSize: 10,
	},

	containerSectionrow: {
		marginTop: 12,
	},
	proksi: {
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray,
		marginLeft: 18,
	},
	containerSectionrowText: {
		fontSize: 13,
		fontWeight: "500",
		color: COLORS.black,
		marginLeft: 20,
	},
});

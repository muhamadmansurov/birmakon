import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	left: {
		marginHorizontal: 20,
	},

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

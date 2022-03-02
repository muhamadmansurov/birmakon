import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	rowHeader: {
		marginTop: 20,
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: "row",
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
	arrow: {
		alignSelf: "center",
		marginLeft: 0.5,
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
	container: {
		backgroundColor: COLORS.white,
		flex: 1,
	},
});

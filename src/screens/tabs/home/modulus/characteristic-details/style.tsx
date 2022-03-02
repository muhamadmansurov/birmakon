import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
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
});

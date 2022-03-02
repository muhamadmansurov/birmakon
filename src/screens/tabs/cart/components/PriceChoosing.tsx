import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

const PriceChoosing = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{STRINGS.price}</Text>
			<View style={styles.row}>
				<View style={styles.inputBox}>
					<Text>{STRINGS.from}</Text>
					<TextInput
						style={styles.input}
						keyboardType={"numeric"}
						placeholder="256"
						placeholderTextColor={COLORS.defaultBlack}
					/>
					<Text>Cум</Text>
				</View>
				<View style={styles.inputBox}>
					<Text>{STRINGS.till}</Text>
					<TextInput
						style={styles.input}
						placeholder="349900"
						keyboardType={"numeric"}
						placeholderTextColor={COLORS.defaultBlack}
					/>
					<Text style={styles.end}>Сум</Text>
				</View>
			</View>
		</View>
	);
};

export default PriceChoosing;

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		marginHorizontal: 20,
		// backgroundColor: "red",
	},

	row: {
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 20,
	},

	inputBox: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.whiteGray,
		paddingHorizontal: 15,
		backgroundColor: COLORS.lightGray,
		marginRight: 10,
	},

	input: {
		width: "40%",
		marginLeft: -30,
		paddingVertical: Platform.OS === "android" ? 0 : 10,
	},

	end: {},
});

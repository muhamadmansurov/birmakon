import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const ChooseSeason = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.headerTxt}>{STRINGS.Season}</Text>
				<Text style={styles.blueTxt}>{STRINGS.all}</Text>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>(сезон не задан) (34)</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>зима (120)</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>зима (120)</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>зима (120)</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>(сезон не задан) (34)</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.brands}>
						<TouchableOpacity style={styles.box}>
							<Text>(сезон не задан) (34)</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default ChooseSeason;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	headerTxt: {
		fontSize: 17,
		color: COLORS.defaultBlack,
	},

	blueTxt: {
		color: COLORS.lightBlack,
		marginRight: 15,
	},

	brands: {
		marginVertical: 20,
		flexDirection: "row",
	},

	box: {
		borderRadius: 10,
		marginRight: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: COLORS.lightGray,
	},
});

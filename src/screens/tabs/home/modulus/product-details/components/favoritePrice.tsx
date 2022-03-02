import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	StyleSheet,
	View,
	Text,
	ViewStyle,
	StyleProp,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";

export interface BlueButtonProps {
	newprice?: string;
	oldprice?: string;
	fromTo?: string;
	tofrom?: string;
	smallprice?: string;
	bigprice?: string;
	onPress?: (event: GestureResponderEvent) => void;
}

const BlueButton = ({
	onPress,
	oldprice,
	newprice,
	fromTo,
	tofrom,
	smallprice,
	bigprice,
}: BlueButtonProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.text01}>{newprice}</Text>
				<Text style={styles.newprice}>{oldprice}</Text>
			</View>
			<View style={styles.box1}>
				<View style={styles.row}>
					<Text style={styles.fromTo}>{fromTo}</Text>
					<Text style={styles.smallprice}>{smallprice}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.tofrom}>{tofrom}</Text>
					<Text style={styles.bigprice}>{bigprice}</Text>
				</View>
			</View>
		</View>
	);
};

export default BlueButton;
const styles = StyleSheet.create({
	text01: {
		color: "background: linear-gradient(270deg, rgba(64, 64, 64, 0.8) 0%, rgba(21, 21, 21, 0.8) 109.4%)",
		fontWeight: "500",
		fontSize: 18,
		textDecorationColor: COLORS.defaultBlack,
		textDecorationLine: "line-through",
	},
	newprice: {
		fontSize: 30,
		fontWeight: "700",
		color: COLORS.red,
	},
	buttoncontainer: {},
	container: {
		marginHorizontal: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	box: {
		width: "50%",
		marginHorizontal: -5,
	},
	box1: {
		width: "50%",
		marginHorizontal: 25,
	},
	fromTo: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "300",
		marginHorizontal: 2,
	},
	tofrom: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "300",
		marginHorizontal: 2,
	},
	smallprice: {
		fontSize: 14,
		fontWeight: "400",
		color: "#999999",
		// backgroundColor: "red",
	},
	bigprice: {
		fontSize: 14,
		fontWeight: "400",
		color: "#999999",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 2,
	},
});

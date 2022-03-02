import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

export interface SelectableItemsProps {
	onPress?: (event: GestureResponderEvent) => void;
}

const SelectableItems = ({ onPress }: SelectableItemsProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row} onPress={onPress}>
				<Text style={styles.text}>{STRINGS.Sorting}</Text>
				<BottomArrow fill={COLORS.lightBlack} />
			</TouchableOpacity>
		</View>
	);
};

export default SelectableItems;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderBottomWidth: 1.5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		color: COLORS.lightBlack,
		marginRight: 6,
		fontSize: 16,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 20,
	},
});

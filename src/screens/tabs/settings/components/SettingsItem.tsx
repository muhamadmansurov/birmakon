import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	Animated,
	GestureResponderEvent,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native";
import { SvgProps } from "react-native-svg";

export interface SettingsItemProps {
	icon?: (props: SvgProps) => JSX.Element;
	text?: string;
	onPress?: (event: GestureResponderEvent) => void;
}

const SettingsItem = ({ icon: Icon, text, onPress }: SettingsItemProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.icon}>{Icon && <Icon />}</View>
				<Animated.Text style={styles.text}>{text}</Animated.Text>
			</View>
		</TouchableOpacity>
	);
};

export default SettingsItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.lightGray,
		paddingVertical: 10,
	},

	text: {
		marginLeft: 10,
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	icon: {
		width: 30,
	},
});

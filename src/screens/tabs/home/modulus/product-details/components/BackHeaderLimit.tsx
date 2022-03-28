import { GroupIcon, LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

let navigation = useNavigation();
export interface BackHeaderLimit {
	image: string;
	content: string;
	date: string;
}

const BackHeaderLimit = () => {
	return (
		<View style={styles.row}>
			<TouchableOpacity onPress={navigation.goBack}>
				<LeftArrowIcon
					hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
				/>
			</TouchableOpacity>
			<Text style={styles.logoText}>{STRINGS.headerLogo}</Text>
			<TouchableOpacity>
				<GroupIcon />
			</TouchableOpacity>
		</View>
	);
};

export default BackHeaderLimit;

const styles = StyleSheet.create({
	row: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.white,
		marginTop: 20,
	},
	heart: {
		marginRight: 20,
	},
	logoText: {
		color: COLORS.defaultBlack,
		fontWeight: "500",
		fontSize: 20,
	},
});

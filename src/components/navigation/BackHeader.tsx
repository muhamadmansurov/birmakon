import {
	HeartIcon,
	LeftArrow,
	SearchIcon,
} from "@novomarkt/assets/icons/icons";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";
import Text from "../general/Text";
import HeaderBackButton from "@react-navigation/elements/src/Header/HeaderBackButton";

export interface BackHeaderProps {
	name?: string;
	style?: StyleProp<ViewStyle>;
	hasSearch?: boolean;
	hasHeart?: boolean;
}

const BackHeader = ({
	name = STRINGS.backHeaderName,
	style,
	hasSearch,
	hasHeart,
}: BackHeaderProps) => {
	let navigation = useNavigation();
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<HeaderBackButton
					onPress={navigation.goBack}
					tintColor={COLORS.defaultBlack}
				/>
				<Text style={styles.text}>{name}</Text>
			</View>
			{hasSearch && <SearchIcon fill={COLORS.defaultBlack} />}
			{hasHeart && <HeartIcon fill={COLORS.defaultBlack} />}
		</View>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
		marginRight: 20,
	},

	text: {
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat",
		fontWeight: "600",
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
});

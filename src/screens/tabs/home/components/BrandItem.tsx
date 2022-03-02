import { COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import {
	Image,
	ListRenderItem,
	ListRenderItemInfo,
	StyleSheet,
	View,
} from "react-native";

export type BrandItemProps = string;

const BrandItem = ({
	item,
}: ListRenderItemInfo<BrandItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: item }} style={styles.image} />
		</View>
	);
};

export default BrandItem;

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 80,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 6,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		borderRadius: 8,
		fontSize: 20,
	},
	image: {
		width: 100,
		height: 60,
	},
});

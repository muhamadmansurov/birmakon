import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BrandItem, { BrandItemProps } from "./BrandItem";

let shopsData: BrandItemProps[] = [
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
];

const ShopsList = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.yourShops}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={shopsData}
				renderItem={BrandItem}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default ShopsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: {
		paddingLeft: 1,
	},
});

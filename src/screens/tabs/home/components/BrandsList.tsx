import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BrandItem, { BrandItemProps } from "./BrandItem";

let brandsData: BrandItemProps[] = [
	"https://www.waterfront.co.za/wp-content/uploads/2018/05/zara.jpg",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.waterfront.co.za/wp-content/uploads/2018/05/zara.jpg",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
];

const BrandsList = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.brands}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={brandsData}
				renderItem={BrandItem}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default BrandsList;

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

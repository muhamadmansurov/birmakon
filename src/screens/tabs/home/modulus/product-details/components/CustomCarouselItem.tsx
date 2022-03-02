import { WhiteHeartIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AdditionalParallaxProps } from "react-native-snap-carousel";

export type CustomCarouselItemProps = { item: string; index: number };

export let DotElement = ({ active }) => {
	return <View style={styles.dot} />;
};

const CustomCarouselItem = (
	{ item }: { item: string; index: number },
	parallaxProps?: AdditionalParallaxProps
): ReactElement<any, string | JSXElementConstructor<any>> | null => {
	return (
		<View>
			<Image source={{ uri: item }} style={styles.image} />
			<View style={styles.imagesView}>
				<Image
					style={{ width: 30, height: 30 }}
					source={require("../../../../../../assets/images/casette.png")}
				/>
				<WhiteHeartIcon />
			</View>
		</View>
	);
};

export default CustomCarouselItem;

const styles = StyleSheet.create({
	imagesView: {
		// width: 300,
		position: "absolute",
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 40,
		marginTop: 10,
		left: 0,
		right: 0,
	},
	image: {
		width: WINDOW_WIDTH - 32,
		height: 340,
		borderRadius: 8,
		marginHorizontal: 16,
	},
	dot: {
		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: COLORS.lightGray,
	},
});

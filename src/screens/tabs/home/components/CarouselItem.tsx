import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AdditionalParallaxProps } from "react-native-snap-carousel";

export type CarouselItemProps = { item: string; index: number };

export let DotElement = ({ active }) => {
	return <View style={styles.dot} />;
};

const CarouselItem = (
	{ item }: { item: CarouselItemProps; index: number },
	parallaxProps?: AdditionalParallaxProps
): ReactElement<any, string | JSXElementConstructor<any>> | null => {
	return (
		<View>
			<Image source={{ uri: item }} style={styles.image} />
		</View>
	);
};

export default CarouselItem;

const styles = StyleSheet.create({
	image: {
		width: WINDOW_WIDTH - 32,
		height: 200,
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

import { BasketIcon, HeartIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React, { ReactElement, useState } from "react";
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
export interface ProductItemProps {
	id?: number;
	image: string;
	price: string;
	shopName: string;
	category: string;
	name: string;
	discount?: number;
	sale?: string;
	options?: {
		key?: string;
		value?: string;
	}[];
}

const ProductItem = ({
	item,
}: ListRenderItemInfo<ProductItemProps>): ReactElement => {
	const [isActive, setIsActive] = useState(true);
	// let secondary = true;
	let { image, category, price, shopName, sale, name, discount } = item;
	let navigation = useNavigation();
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate(ROUTES.PRODUCT_DETAILS, { item })
			}
		>
			<View style={styles.container}>
				<Image source={{ uri: image }} style={styles.image} />
				<View style={styles.absolute}>
					<HeartIcon fill={COLORS.red} />
					{discount && (
						<View style={styles.discount}>
							<Text style={styles.dscountText}>{discount}%</Text>
						</View>
					)}
				</View>
				<View style={styles.details}>
					<View style={styles.row}>
						<Text style={styles.brand}>{category}</Text>
						<Text style={styles.brand}>{shopName}</Text>
					</View>
					<Text style={styles.name}>{name}</Text>
					<View style={styles.saleView}>
						<Text style={styles.price}>{price}</Text>
						<Text style={styles.sale}>{sale}</Text>
					</View>
					<DefaultButton
						containerStyle={styles.button}
						onPress={() => setIsActive((e) => !e)}
						secondary={isActive}
					>
						<View style={styles.buttonContainer}>
							<Text
								style={[
									isActive
										? styles.inactiveCartText
										: styles.cartText,
								]}
							>
								{STRINGS.addToCart}
							</Text>
							<BasketIcon
								fill={
									isActive ? COLORS.cartColor3 : COLORS.white
								}
							/>
						</View>
					</DefaultButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	dscountText: {
		fontSize: 12,
		color: COLORS.defaultBlack,
	},
	discount: {
		borderRadius: 8,
		padding: 4,
		backgroundColor: COLORS.lightpurple2,
		marginBottom: 25,
		marginRight: -5,
	},
	absolute: {
		position: "absolute",
		right: 10,
		top: 10,
		justifyContent: "space-between",
		height: 162,
		alignItems: "flex-end",
	},
	cartText: {
		color: COLORS.white,
		marginRight: 4,
		fontWeight: "700",
	},
	inactiveCartText: {
		color: COLORS.textColor,
		marginRight: 8,
		fontFamily: "Montserrat-Medium",
	},
	button: {
		marginHorizontal: 0,
	},
	name: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	brand: {
		color: COLORS.gray,
		fontSize: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: WINDOW_WIDTH / 2.13 - 22,
		height: 150,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		width: WINDOW_WIDTH / 2.15 - 20,
		marginVertical: 15,
		marginHorizontal: 11,
	},
	details: {
		paddingHorizontal: 8,
		paddingBottom: 10,
		paddingTop: 8,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	inactiveButton: {},
	sale: {
		fontSize: 12,
		fontWeight: "500",
		color: COLORS.whiteGray,
		textDecorationLine: "line-through",
	},
	saleView: {
		justifyContent: "center",
		marginTop: 5,
	},
	price: {
		color: COLORS.textColor,
		fontSize: 15,
		fontWeight: "500",
	},
});

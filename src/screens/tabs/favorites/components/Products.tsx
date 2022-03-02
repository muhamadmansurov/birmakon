import { BasketIcon, CrashIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import SecondaryButton from "@novomarkt/components/general/SecondaryButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { productsData } from "../../home/components/ProductsList";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

export let ProductsData = {
	name: "Элегантный Костюм с брюками ZARA стиль",
	price: "140000 Cум",
};

export default function Products() {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageURL }} style={styles.image} />
			<View style={styles.textBox}>
				<Text style={styles.text}>{ProductsData.name}</Text>
				<View style={styles.row}>
					<Text style={styles.price}>{ProductsData.price}</Text>
					<TouchableOpacity>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								borderWidth: 1,
								borderRadius: 10,
								paddingHorizontal: 10,
								paddingVertical: 7,
								marginHorizontal: 30,
							}}
						>
							<Text style={{ fontSize: 14, marginRight: 5 }}>
								В корзину
							</Text>
							<BasketIcon fill={COLORS.lightBlack} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
	},
	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 4,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 8,
	},
	container: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		fontWeight: "700",
		letterSpacing: 0.5,
		flexWrap: "wrap",
	},
	textBox: {
		paddingHorizontal: 15,
		// marginRight: 100,
		// justifyContent: "space-between",
		flexShrink: 1,
	},

	row: {
		flexDirection: "row",
		paddingRight: 50,
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 5,
	},

	price: {
		color: COLORS.lightBlack,
		fontSize: 15,
	},

	button: {
		backgroundColor: COLORS.white,
		// flex: 1,
		// marginLeft: 10,
	},

	buttonText: {
		color: COLORS.defaultBlack,
	},
});

import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { COLORS } from "@novomarkt/constants/colors";
import MirImg from "../../../../assets/images/mir.png";
import VisaImg from "../../../../assets/images/visa.png";
import MastercardImg from "../../../../assets/images/mastercard.png";

const OrderDetails = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerTxt}>{STRINGS.orderDetails}</Text>
			<View style={styles.box}>
				<View style={styles.row}>
					<Text>{STRINGS.items} (1) </Text>
					<Text style={styles.price}>1400 Cум</Text>
				</View>
				<View style={styles.row}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Text>{STRINGS.sale}</Text>
						<Image source={MirImg} style={styles.image} />
						<Image source={VisaImg} style={styles.image} />
					</View>
					<Text style={styles.price}>1400 Сум</Text>
				</View>
				<View style={styles.row}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Text>{STRINGS.sale}</Text>
						<Image source={MastercardImg} style={styles.image} />
					</View>
					<Text style={styles.price}>140 300 200 Сум</Text>
				</View>
				<View style={styles.rowFooter}>
					<Text style={styles.footerTxt}>{STRINGS.totalPrice}</Text>
					<Text style={styles.total}> 15 300 00 Сум </Text>
				</View>
			</View>
		</View>
	);
};

export default OrderDetails;

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 20,
	},

	headerTxt: {
		fontWeight: "600",
		fontSize: 19,
		fontFamily: "Montserrat",
		color: COLORS.defaultBlack,
		marginLeft: 8
	},

	box: {
		padding: 10,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		borderRadius: 8,
		marginVertical: 10,
		backgroundColor: COLORS.white,
	},

	row: {
		flexDirection: "row",
		marginVertical: 2,
		justifyContent: "space-between",
	},

	price: {
		fontSize: 14,
		color: COLORS.defaultBlack,
		fontWeight: "700",
	},

	image: {
		width: 30,
		height: 10,
		marginLeft: 5,
		marginTop: 2,
	},

	footerTxt: {
		fontSize: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.defaultBlack,
	},

	rowFooter: {
		marginTop: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	total: {
		fontSize: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.lightBlack,
		marginRight: -6,
	},
});

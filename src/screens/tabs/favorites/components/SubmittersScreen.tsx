import { MessagesIcon } from "@novomarkt/assets/icons/icons";
import { IMAGES } from "@novomarkt/assets/images/images";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SubmittersScreen = () => {
	return (
		<View>
			<View style={styles.userInfosBox}>
				<Image source={IMAGES.userImage} style={styles.image} />
				<Text style={styles.userNameText}>Mironshoh Nasimov</Text>
				<Text style={styles.grayText}>12545 отзывов (94%</Text>
				<Text style={styles.grayText}>положительных)</Text>
				<Text style={styles.grayText}>Москва</Text>
				<View style={styles.rowsView}>
					<View style={styles.messageView}>
						<MessagesIcon fill={COLORS.orange} />
						<Text style={styles.writeText}>Написать</Text>
					</View>
					<Text style={styles.toMarket}>Перейти в магазин</Text>
				</View>
			</View>
			<View style={{ marginTop: 20 }}>
				<View style={styles.userInfosBox}>
					<Image source={IMAGES.userImage} style={styles.image} />
					<Text style={styles.userNameText}>Mironshoh Nasimov</Text>
					<Text style={styles.grayText}>12545 отзывов (94%</Text>
					<Text style={styles.grayText}>положительных)</Text>
					<Text style={styles.grayText}>Москва</Text>
					<View style={styles.rowsView}>
						<View style={styles.messageView}>
							<MessagesIcon fill={COLORS.orange} />
							<Text style={styles.writeText}>Написать</Text>
						</View>
						<Text style={styles.toMarket}>Перейти в магазин</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default SubmittersScreen;

const styles = StyleSheet.create({
	userInfosBox: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		alignItems: "center",
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		paddingVertical: 10,
	},

	image: {
		resizeMode: "contain",
		borderRadius: 50,
		width: 100,
		height: 100,
	},

	userNameText: {
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},

	grayText: {
		color: "grey",
		fontWeight: "500",
	},

	rowsView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	messageView: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 70,
	},

	writeText: {
		color: COLORS.orange,
		fontSize: 14,
		fontWeight: "500",
	},

	toMarket: {
		color: COLORS.textColor,
		fontWeight: "500",
		fontSize: 16,
	},
});

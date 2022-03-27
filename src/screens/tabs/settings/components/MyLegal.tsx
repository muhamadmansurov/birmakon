import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@novomarkt/constants/colors";
import { IMAGES } from "@novomarkt/assets/images/images";
import {
	LocationBlueIcon,
	PlayIcon,
	PlusIcon,
} from "@novomarkt/assets/icons/icons";

const MyLegal = () => {
	return (
		<View style={styles.container}>
			<View style={styles.userView}>
				<View style={styles.rowsUser}>
					<Image source={IMAGES.userImage} style={styles.imageUser} />
					<Text style={styles.notFoundText}>Not Found</Text>
				</View>
				<View style={styles.rowsUser}>
					<Text style={styles.emailText}>Э-маил:</Text>
					<Text style={styles.emailNotFound}>Not Found</Text>
				</View>
				<Text style={styles.phoneText}>Телефон:</Text>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Банковские карты</Text>
				<TouchableOpacity style={styles.cartBtn}>
					<View style={styles.plusIconView}>
						<PlusIcon fill={COLORS.red} />
					</View>
					<Text style={styles.addCartText}>Добавить карту</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Rich Daddies</Text>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.innText}>ИНН</Text>
						<Text style={{ marginTop: 5 }}>274528284</Text>
					</View>
					<View style={{ marginRight: 35 }}>
						<Text style={styles.innText}>Расчетный счет</Text>
						<Text style={{ marginTop: 5 }}>274528284</Text>
					</View>
				</View>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.innText}>ОКЭД</Text>
						<Text style={{ marginTop: 5 }}>274528284</Text>
					</View>
					<View style={{ marginRight: 50 }}>
						<Text style={styles.innText}>Банк</Text>
						<Text style={{ marginTop: 5 }}>Ипотека банк</Text>
					</View>
				</View>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Уведомления</Text>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.innText}>0 шт</Text>
						<Text style={{ marginTop: 5 }}></Text>
					</View>
				</View>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Мои отзывы</Text>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.innText}>20 шт</Text>
						<Text style={{ marginTop: 5 }}></Text>
					</View>
				</View>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Местные адреса</Text>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.innText}>
							Россия, Москва, Хорошевский проезд 11
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<LocationBlueIcon fill={COLORS.black} />
							<Text style={{ marginTop: 5, marginLeft: 10 }}>
								Добавить адрес
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.userView}>
				<Text style={styles.cartText}>Международные адреса</Text>
				<View style={styles.innViewRow}>
					<View>
						<Text style={styles.locationText}>
							Махмуда тараби 23
						</Text>
						<Text style={styles.locationText}>
							Махмуда тараби 23
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<LocationBlueIcon fill={COLORS.black} />
							<Text style={{ marginTop: 5, marginLeft: 10 }}>
								Добавить адрес
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default MyLegal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	userView: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginHorizontal: 10,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginTop: 15,
	},

	imageUser: {
		resizeMode: "contain",
		borderRadius: 80,
	},

	rowsUser: {
		flexDirection: "row",
		alignItems: "center",
	},

	notFoundText: {
		fontSize: 14,
		fontWeight: "500",
		marginLeft: 20,
	},

	emailText: {
		color: COLORS.gray,
		fontSize: 14,
		fontWeight: "500",
		marginTop: 10,
	},

	emailNotFound: {
		fontSize: 14,
		fontWeight: "500",
		marginLeft: 10,
		marginTop: 10,
	},

	phoneText: {
		color: COLORS.gray,
		fontSize: 14,
		fontWeight: "500",
		marginTop: 10,
	},

	cartText: {
		color: COLORS.darkBlue2,
		fontSize: 16,
		fontWeight: "500",
	},

	cartBtn: {
		alignItems: "center",
		borderWidth: 1,
		borderColor: COLORS.red,
		borderRadius: 10,
		paddingVertical: 20,
		marginTop: 10,
	},

	addCartText: {
		color: COLORS.red,
		fontSize: 14,
		fontWeight: "500",
		marginTop: 10,
	},

	plusIconView: {
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: COLORS.red,
	},

	innViewRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
		justifyContent: "space-between",
	},

	innText: {
		color: COLORS.gray,
		fontWeight: "500",
	},

	locationText: {
		color: COLORS.gray,
		fontWeight: "500",
		marginTop: 5,
	},
});

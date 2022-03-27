import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { STRINGS } from "@novomarkt/locales/strings";
import Products from "./Products";
import SuitsList from "../../catalog/modules/catalog-products/components/SuitsList";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "@novomarkt/constants/colors";
import Modal from "react-native-modal";

const ProductsScreen = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	let navigation = useNavigation();
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const [activeIndex, setIsActive] = useState(0);
	return (
		<View>
			<Products />
			<Products />
			<Products />
			<Text style={styles.text}>{STRINGS.advertBlock}</Text>
			<SuitsList />
			<Modal
				style={styles.view}
				isVisible={isModalVisible}
				onSwipeComplete={toggleModal}
				onBackdropPress={toggleModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>
							{STRINGS.firstCheap}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>
							{STRINGS.firsExpensive}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

export default ProductsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	text: {
		marginVertical: 20,
		marginHorizontal: 20,
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	content: {
		alignSelf: "center",
	},

	view: {
		justifyContent: "flex-end",
		margin: 0,
	},

	modal: {
		padding: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: COLORS.white,
	},

	modalText: {
		fontSize: 16,
		marginVertical: 15,
		color: COLORS.defaultBlack,
	},
	button: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 16,
	},

	sellersActiveBtn: {
		paddingHorizontal: 18,
		paddingVertical: 12,
		backgroundColor: COLORS.lightOrange,
		borderRadius: 10,
		marginRight: 10,
		marginVertical: 10,
	},

	sellersIsActiveBtn: {
		paddingHorizontal: 18,
		paddingVertical: 12,
		backgroundColor: COLORS.lightGray,
		borderRadius: 10,
		marginRight: 10,
		marginVertical: 10,
	},

	sellersActiveText: {
		color: COLORS.textColor,
		fontSize: 14,
	},

	sellersIsActiveText: {
		color: COLORS.white,
	},

	tabView: {
		flexDirection: "row",
		color: COLORS.gray,
		fontWeight: "bold",
		alignItems: "center",
		backgroundColor: "red",
	},
});

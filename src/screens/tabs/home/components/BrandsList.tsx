import { LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import AllButton from "@novomarkt/components/general/AllButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Dimensions,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Modal from "react-native-modal";
import { HomeStack } from "..";
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
	let navigation = useNavigation();
	const [allModalVisible, setAllModalVisible] = useState(false);
	const toggleAllModalVisible = () => {
		setAllModalVisible(!allModalVisible);
	};

	return (
		<View style={styles.container}>
			<View style={styles.allButtonsView}>
				<Text style={styles.title}>{STRINGS.brands}</Text>
				<Modal
					isVisible={allModalVisible}
					testID={"modal"}
					swipeDirection={["right", "left", "down"]}
					swipeThreshold={Dimensions.get("window").width / 2}
					onSwipeComplete={() => {
						setAllModalVisible(false);
					}}
					style={styles.modalStyle}
				>
					<View style={styles.modalInView}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: 15,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate(ROUTES.HOME);
									setAllModalVisible(false);
								}}
							>
								<LeftArrowIcon />
							</TouchableOpacity>
							<Text style={styles.brandsText}>
								{STRINGS.brands}
							</Text>
						</View>
						<View style={styles.view}>
							<View style={styles.view}>
								<Text style={styles.brandsName}>
									{STRINGS.Nike}
								</Text>
							</View>
							<View style={styles.view}>
								<Text style={styles.brandsName}>
									{STRINGS.ZARA}
								</Text>
							</View>
							<View style={styles.view}>
								<Text style={styles.brandsName}>
									{STRINGS.LG}
								</Text>
							</View>
							<View style={styles.view}>
								<Text style={styles.brandsName}>
									{STRINGS.SAMO}
								</Text>
							</View>
							<View style={styles.view}>
								<Text style={styles.brandsName}>
									{STRINGS.PENTI}
								</Text>
							</View>
						</View>
					</View>
				</Modal>
				<AllButton onPress={toggleAllModalVisible} />
			</View>
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
		// marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: {
		paddingLeft: 1,
	},
	allButtonsView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	modalStyle: {
		justifyContent: "center",
		margin: 0,
	},
	modalInView: {
		flex: 1,
		backgroundColor: COLORS.white,
		// paddingHorizontal: 20,
		// alignItems: "flex-start",
		paddingVertical: 50,
	},
	brandsText: {
		color: COLORS.defaultBlack,
		fontWeight: "600",
		fontSize: 18,
		marginLeft: 15,
	},
	view: {
		marginTop: 5,
		borderBottomWidth: 1,
		borderColor: COLORS.lightgray,
	},
	brandsName: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		marginTop: 15,
		marginLeft: 15,
		marginBottom: 5,
	},
});

import AllButton from "@novomarkt/components/general/AllButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import BrandItem, { BrandItemProps } from "./BrandItem";
import Modal from "react-native-modal";

let brandsData: BrandItemProps[] = [
	"https://www.waterfront.co.za/wp-content/uploads/2018/05/zara.jpg",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.waterfront.co.za/wp-content/uploads/2018/05/zara.jpg",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
	"https://www.vhv.rs/dpng/d/405-4052243_nike-logo-png-nike-logo-design-transparent-png.png",
];

const BrandsList = () => {
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
						<Text style={styles.brandsText}>{STRINGS.brands}</Text>
						<View style={styles.view}>
							<Text style={styles.brandsName}>
								{STRINGS.Nike}
							</Text>
							<Text style={styles.brandsName}>
								{STRINGS.ZARA}
							</Text>
							<Text style={styles.brandsName}>{STRINGS.LG}</Text>
							<Text style={styles.brandsName}>
								{STRINGS.SAMO}
							</Text>
							<Text style={styles.brandsName}>
								{STRINGS.PENTI}
							</Text>
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
		marginLeft: 16,
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
		paddingHorizontal: 20,
		alignItems: "flex-start",
		paddingVertical: 50,
	},
	brandsText: {
		color: COLORS.defaultBlack,
		fontWeight: "600",
		fontSize: 18,
	},
	view: {
		marginTop: 20,
	},
	brandsName: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		marginTop: 15,
	},
});

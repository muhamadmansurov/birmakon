import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import SuitsList from "../catalog/modules/catalog-products/components/SuitsList";
import ProductItem from "../home/components/ProductItem";
import { productsData } from "../home/components/ProductsList";
import DefaultHeader from "./components/DefaultHeader";
import Products from "./components/Products";
import SelectableItems from "./components/SelectableItems";
import SelectableMenu from "./components/SelectableMenu";
import { styles } from "./style";

const FavoriteView = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	let navigation = useNavigation();

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<ScrollView style={styles.container}>
			<DefaultHeader name={STRINGS.favorites} />
			{/* <SelectableMenu /> */}
			<SelectableItems onPress={toggleModal} />
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
		</ScrollView>
	);
};

export default FavoriteView;

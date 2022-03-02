import { ChoiceIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DefaultHeader from "../favorites/components/DefaultHeader";
import ChooseItemNum from "./components/ChooseItemNum";
import LocationBox from "./components/LocationBox";
import OrderDetails from "./components/OrderDetails";
import { styles } from "./style";

const CartView = () => {
	let navigation = useNavigation();

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<DefaultHeader name={STRINGS.cart} />
			<LocationBox />
			<OrderDetails />
			<View style={{}}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "500",
						marginHorizontal: 30,
						marginTop: 20,
					}}
				>
					Asadbek OOO
				</Text>
				<View
					style={{
						marginTop: 30,
						marginHorizontal: 20,
						borderRadius: 5,
						backgroundColor: COLORS.white,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,

						elevation: 5,
					}}
				>
					<ChooseItemNum />
					<ChooseItemNum />
					<ChooseItemNum />
				</View>
			</View>
			<View>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "500",
						marginHorizontal: 30,
						marginTop: 20,
					}}
				>
					Asadbek OOO
				</Text>
				<View
					style={{
						marginTop: 30,
						marginHorizontal: 20,
						borderRadius: 5,
						backgroundColor: COLORS.white,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,

						elevation: 5,
					}}
				>
					<ChooseItemNum />
					<ChooseItemNum />
					<ChooseItemNum />
					<ChooseItemNum />
					<ChooseItemNum />
				</View>
			</View>
			<View style={{ marginBottom: 40 }}>
				<DefaultButton
					onPress={() => navigation.navigate(ROUTES.CHECKOUT)}
					text={STRINGS.continueOrdering}
					containerStyle={styles.button}
					textStyle={styles.buttonTxt}
				/>
			</View>
		</ScrollView>
	);
};

export default CartView;

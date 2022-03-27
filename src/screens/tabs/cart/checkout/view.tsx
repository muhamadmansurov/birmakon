import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView, View } from "react-native";
import RecipientBox from "../components/RecipientBox";
import { styles } from "./style";

const CheckoutView = () => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<BackHeader name={STRINGS.checkout} style={styles.backHeader} />
			<RecipientBox />
		</ScrollView>
	);
};

export default CheckoutView;

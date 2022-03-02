import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const CharacteristicDetails = () => {
	let route = useRoute();
	let hasOptions =
		!!route.params?.options && route.params.options?.length > 0;
	return (
		<View style={styles.container}>
			<BackHeader hasHeart name={STRINGS.characteristics} />
			{hasOptions &&
				[...route.params?.options, ...route.params?.options]?.map(
					(e) => {
						return (
							<View style={styles.map}>
								<Text style={styles.key}>{e.key}</Text>
								<Text>{e.value}</Text>
							</View>
						);
					}
				)}
		</View>
	);
};

export default CharacteristicDetails;

import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CharacteristicDetails from "./modulus/characteristic-details/view";
import { CompareScreen } from "./modulus/compare";
import FeedbacksView from "./modulus/feedbacks/view";
import ProductDetailsView from "./modulus/product-details/view";
import HomeView from "./view";

let Stack = createNativeStackNavigator();

export let HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={HomeView} name={ROUTES.HOME} />
			<Stack.Screen component={FeedbacksView} name={ROUTES.FEEDBACKS} />
			<Stack.Screen
				component={CharacteristicDetails}
				name={ROUTES.CHARACTERISTIC_DETAILS}
			/>
			<Stack.Screen component={CompareScreen} name={ROUTES.COMPARE} />
			<Stack.Screen
				component={ProductDetailsView}
				name={ROUTES.PRODUCT_DETAILS}
			/>
		</Stack.Navigator>
	);
};

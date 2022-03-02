import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FilterScreen } from "../cart/filter";
import { ProdusctDetailsScreen } from "../home/modulus/product-details";
import { CatalogDetailsScreen } from "./modules/catalog-details";
import { CatalogProductsScreen } from "./modules/catalog-products";
import { FiltersScreen } from "./modules/Filters";
import CatalogView from "./view";

let Stack = createNativeStackNavigator();

export default function CatalogStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={ROUTES.CATALOG} component={CatalogView} />
			<Stack.Screen
				name={ROUTES.CATALOG_DETAILS}
				component={CatalogDetailsScreen}
			/>
			<Stack.Screen
				name={ROUTES.CATALOG_PRODUCTS}
				component={CatalogProductsScreen}
			/>
			<Stack.Screen
				name={ROUTES.PRODUCT_DETAILS}
				component={ProdusctDetailsScreen}
			/>

			<Stack.Screen name={ROUTES.FILTERS} component={FilterScreen} />
		</Stack.Navigator>
	);
}

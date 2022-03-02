import {
	BasketIcon,
	CatalogIcon,
	HeartIcon,
	HomeIcon,
	PersonIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import CartStack from "./cart";
import CatalogStack from "./catalog";
import { FavoriteScreen } from "./favorites";
import { HomeStack } from "./home";
import { SettingsStack } from "./settings";

let Tab = createBottomTabNavigator();

const TabNavigation = () => {
	let renderTabIcon = useCallback((Component: React.FC<SvgProps>) => {
		return (props: { focused: boolean; color: string; size: number }) => {
			let { color, focused, size } = props;

			return <Component fill={color} width={size} height={size} />;
		};
	}, []);
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.red,
				tabBarInactiveTintColor: COLORS.gray,
				tabBarStyle: {
					height: 70,
					paddingBottom: 15,
				},
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tab.Screen
				name={ROUTES.HOME}
				component={HomeStack}
				options={{
					tabBarIcon: renderTabIcon(HomeIcon),
					tabBarLabel: STRINGS.home,
					tabBarLabelStyle: { fontSize: 14 },
					tabBarHideOnKeyboard: true,
				}}
			/>
			<Tab.Screen
				name={ROUTES.CATEGORIES}
				component={CatalogStack}
				options={{
					tabBarIcon: renderTabIcon(CatalogIcon),
					tabBarLabel: STRINGS.categories,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.CART}
				component={CartStack}
				options={{
					tabBarIcon: renderTabIcon(BasketIcon),
					tabBarBadge: 2,
					tabBarLabel: STRINGS.cart,
					tabBarLabelStyle: { fontSize: 14 },

					// tabBarBadgeStyle: COLORS.lightBlack,
				}}
			/>
			<Tab.Screen
				name={ROUTES.FAVORITES}
				component={FavoriteScreen}
				options={{
					tabBarIcon: renderTabIcon(HeartIcon),
					tabBarLabel: STRINGS.favorites,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.SETTINGSSTACK}
				component={SettingsStack}
				options={{
					tabBarIcon: renderTabIcon(PersonIcon),
					tabBarLabel: STRINGS.login,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;

const styles = StyleSheet.create({
	bar: {
		backgroundColor: COLORS.white,
		height: 100,
		overflow: "visible",
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
});

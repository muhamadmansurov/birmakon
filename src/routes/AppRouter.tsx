import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import TabNavigation from "@novomarkt/screens/tabs";
import { CheckoutPointScreen } from "@novomarkt/screens/tabs/cart/checkout-point";
import CourierDelivery from "@novomarkt/screens/tabs/cart/courierDelivery/view";
import BrandsList from "@novomarkt/screens/tabs/home/components/BrandsList";
import HomeView from "@novomarkt/screens/tabs/home/view";
import { useAppSelector } from "@novomarkt/store/hooks";
import { selectUser } from "@novomarkt/store/slices/userSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	const insets = useSafeAreaInsets();
	const user = useAppSelector(selectUser);
	// console.log(!user.token);

	return (
		<View style={{ flex: 1, marginTop: insets.top }}>
			<NavigationContainer key={user.token}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<>
						<Stack.Screen
							name={ROUTES.TABS}
							component={TabNavigation}
						/>
						<Stack.Screen
							name={ROUTES.CHECKOUT_POINT}
							component={CheckoutPointScreen}
						/>
						<Stack.Screen
							name={ROUTES.COURIERDELIVERY}
							component={CourierDelivery}
						/>
						<Stack.Screen
							name={ROUTES.BRANDSLIST}
							component={BrandsList}
						/>
						<Stack.Screen
							name={ROUTES.HOMEVIEW}
							component={HomeView}
						/>
					</>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default AppRouter;

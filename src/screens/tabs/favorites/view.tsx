import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Animated,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import SuitsList from "../catalog/modules/catalog-products/components/SuitsList";
import DefaultHeader from "./components/DefaultHeader";
import ProductsScreen from "./components/ProductsScreen";
import SelectableItems from "./components/SelectableItems";
import SubmittersScreen from "./components/SubmittersScreen";
import { styles } from "./style";

const FavoriteView = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	let navigation = useNavigation();
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const [activeIndex, setIsActive] = useState(0);

	const { width } = Dimensions.get("window");
	const [state, setState] = useState({
		active: 0,
		xTabOne: 0,
		xTabTwo: 0,
		translateX: new Animated.Value(0),
		translateXTabOne: new Animated.Value(0),
		translateXTabTwo: new Animated.Value(width),
		translateY: -1000,
	});

	let {
		xTabOne,
		translateX,
		active,
		translateXTabTwo,
		translateXTabOne,
		translateY,
	} = state;

	let handleSlide = (type: number) => {
		let { active, translateX, translateXTabTwo, translateXTabOne } = state;
		Animated.spring(translateX, {
			toValue: type,
			useNativeDriver: true,
		}).start();
		if (active === 0) {
			Animated.parallel([
				Animated.spring(translateXTabOne, {
					toValue: 0,
					useNativeDriver: true,
				}),
				Animated.spring(translateXTabTwo, {
					toValue: width,
					useNativeDriver: true,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.spring(translateXTabOne, {
					toValue: width,
					useNativeDriver: true,
				}),
				Animated.spring(translateXTabTwo, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]).start();
		}
	};
	useEffect(() => {
		handleSlide(xTabOne);
	}, [state.active]);

	return (
		// <View style={styles.container}>
		<>
			<DefaultHeader name={STRINGS.favorites} />
			<SelectableItems onPress={toggleModal} />
			<View style={styles.container}>
				<Animated.View
					style={{
						transform: [
							{
								translateX,
							},
						],
					}}
				/>
				<View style={styles.styleOne}>
					<TouchableOpacity
						style={
							active === 0
								? styles.buttonBox
								: styles.buttonBoxTwo
						}
						onLayout={(event) =>
							setState({
								...state,
								xTabOne: event.nativeEvent.layout.x,
							})
						}
						onPress={() => setState({ ...state, active: 0 })}
					>
						<Text
							style={{
								color: active === 0 ? "white" : "black",
								fontWeight: "500",
							}}
						>
							Товары
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							active === 1
								? styles.buttonBox
								: styles.buttonBoxTwo
						}
						onLayout={(event) =>
							setState({
								...state,
								xTabTwo: event.nativeEvent.layout.x,
							})
						}
						onPress={() => setState({ ...state, active: 1 })}
					>
						<Text
							style={{
								color: active === 0 ? "black" : "white",
								fontWeight: "500",
							}}
						>
							Продавцы
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<View style={styles.scrollContainer}>
						<Animated.View
							style={{
								transform: [
									{
										translateX: translateXTabOne,
									},
								],
							}}
							onLayout={(event) =>
								setState({
									...state,
									translateY: event.nativeEvent.layout.height,
								})
							}
						>
							<ProductsScreen />
						</Animated.View>
						<Animated.View
							style={{
								transform: [
									{
										translateX: translateXTabTwo,
									},
									{
										translateY: -translateY,
									},
								],
							}}
						>
							<SubmittersScreen />
							<Text style={styles.text}>
								{STRINGS.advertBlock}
							</Text>
							<SuitsList />
						</Animated.View>
					</View>
				</ScrollView>
			</View>
			{/* </View> */}
		</>
	);
};

export default FavoriteView;

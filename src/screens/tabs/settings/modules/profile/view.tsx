import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Animated,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import MyLegal from "../../components/MyLegal";
import ProfileViewScreen from "../../components/ProfileView";
import { styles } from "./style";

const ProfileView = () => {
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
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<BackHeader style={styles.left} />
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
							Мои данные
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
							Мои данные
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.scrollContainer}>
					<ScrollView>
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
							<ProfileViewScreen />
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
							<MyLegal />
						</Animated.View>
					</ScrollView>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileView;

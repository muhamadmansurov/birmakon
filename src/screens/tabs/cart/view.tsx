import { Choice2Icon, ChoiceIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import DefaultHeader from "../favorites/components/DefaultHeader";
import ChooseItemNum from "./components/ChooseItemNum";
import { styles } from "./style";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
}

const CartView = () => {
	let navigation = useNavigation();

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const [data, setData] = useState<UserData>({
		email: "",
		phone: "",
		dateOfBirth: "",
		isMale: true,
		name: "",
	});
	const onTextChange = useCallback((key: keyof UserData) => {
		return (value: string) => {
			setData({ ...data, [key]: value });
		};
	}, []);

	const [hidePass, setHidePass] = useState(false);
	const [checked, setChecked] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<DefaultHeader name={STRINGS.cart} />
			<View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "500",
						marginTop: 20,
						marginLeft: 20,
						marginBottom: 15,
					}}
				>
					Asadbek OOO
				</Text>
				<View
					style={{
						marginHorizontal: 15,
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
			<View style={styles.deliveryChooseView}>
				<View style={styles.couriersOrderView}>
					<Text style={styles.courerDelivery}>{STRINGS.product}</Text>
					<View style={{ flexDirection: "row", marginVertical: 5 }}>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: true })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dot
											: styles.dotGray
									}
								>
									<View
										style={
											data?.isMale
												? styles.background
												: styles.backgroundGray
										}
									/>
								</View>
								<Text style={styles.black}>Самовывоз</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: false })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dotGray
											: styles.dot
									}
								>
									<View
										style={
											data?.isMale
												? styles.backgroundGray
												: styles.background
										}
									/>
								</View>
								<Text style={styles.black}>
									Адресная доставка
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<Text style={styles.dateTexts}>
						{STRINGS.addressDelivery}
					</Text>
					<Text style={styles.regionText}>
						Uzbekistan, Samarkand, Ul, Al bukhariy 6
					</Text>
				</View>
			</View>
			<View style={styles.deliveryChooseView}>
				<View style={styles.couriersOrderView}>
					<Text style={styles.courerDelivery}>{STRINGS.buy}</Text>
					<Text style={styles.orderDelivery}>
						Для оформления заказа, выбрат адрес доставки
					</Text>
					<View style={{ flexDirection: "row", marginVertical: 5 }}>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: true })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dot
											: styles.dotGray
									}
								>
									<View
										style={
											data?.isMale
												? styles.background
												: styles.backgroundGray
										}
									/>
								</View>
								<Text style={styles.black}>Онлайн</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: false })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dotGray
											: styles.dot
									}
								>
									<View
										style={
											data?.isMale
												? styles.backgroundGray
												: styles.background
										}
									/>
								</View>
								<Text style={styles.black}>Наличными</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: "row", marginVertical: 5 }}>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: true })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dot
											: styles.dotGray
									}
								>
									<View
										style={
											data?.isMale
												? styles.background
												: styles.backgroundGray
										}
									/>
								</View>
								<Text style={styles.black}>
									Картой при получении
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: false })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dotGray
											: styles.dot
									}
								>
									<View
										style={
											data?.isMale
												? styles.backgroundGray
												: styles.background
										}
									/>
								</View>
								<Text style={styles.black}>По договору</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.recipientView}>
				<View style={styles.rowView}>
					<Text style={styles.recipientText}>Получатель</Text>
					<TouchableOpacity style={styles.signInBtn}>
						<Text style={styles.signInText}>Войти</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.rowViewSecond}>
					<Text style={styles.notMeText}>Получать буду не я</Text>
					<TouchableOpacity
						style={
							hidePass
								? styles.checkedActiveBtn
								: styles.checkedBtn
						}
						onPress={() => setHidePass(!hidePass)}
					>
						{hidePass ? <ChoiceIcon /> : <Choice2Icon />}
					</TouchableOpacity>
				</View>
				<Text style={styles.nameText}>Имя</Text>
				<TextInput
					keyboardType="default"
					placeholder="Ваш имя"
					style={styles.nameInput}
					placeholderTextColor="gray"
				/>
				<Text style={styles.nameText}>Фамилия</Text>
				<TextInput
					keyboardType="default"
					placeholder="Ваш Фамилия"
					style={styles.nameInput}
					placeholderTextColor="gray"
				/>
				<Text style={styles.nameText}>Контактный телефон</Text>
				<TextInput
					keyboardType="default"
					placeholder="Tелефон"
					style={styles.nameInput}
					placeholderTextColor="gray"
				/>
				<Text style={styles.nameText}>Электронная почта</Text>
				<TextInput
					keyboardType="default"
					placeholder="Email"
					style={styles.nameInput}
					placeholderTextColor="gray"
				/>
				<View style={styles.rowsChecked}>
					<TouchableOpacity
						style={
							checked
								? styles.checkedActiveBtn
								: styles.checkedBtn
						}
						onPress={() => setChecked(!checked)}
					>
						{checked ? <ChoiceIcon /> : <Choice2Icon />}
					</TouchableOpacity>
					<Text style={styles.wildberriesText}>
						Получать эксклюзивные скидки вSMS‑рассылке от
						Wildberries
					</Text>
				</View>
			</View>

			<View style={styles.allPrice}>
				<View style={styles.rowsView}>
					<Text style={styles.allPriceText}>Итого</Text>
					<Text style={styles.allPriceText}>1890 So'm</Text>
				</View>
				<View style={styles.rowsView}>
					<Text style={styles.productText}>Товары (1)</Text>
					<Text style={styles.productPriceText}>1890 So'm</Text>
				</View>
				<View style={{ paddingVertical: 10 }}>
					<TouchableOpacity style={styles.saveButton}>
						<Text style={styles.orderedText}>
							{STRINGS.ordered}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.rowsChecked}>
					<TouchableOpacity
						style={
							isChecked
								? styles.checkedActiveBtn
								: styles.checkedBtn
						}
						onPress={() => setIsChecked(!isChecked)}
					>
						{isChecked ? <ChoiceIcon /> : <Choice2Icon />}
					</TouchableOpacity>
					<Text style={styles.wildberriesText}>
						Правил пользования торговой площадкой и правилами
						возврата
					</Text>
				</View>
			</View>
			<View style={{ marginBottom: 40 }}></View>
		</ScrollView>
	);
};

export default CartView;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import Avatar from "./Avatar";
import EditableInput from "@novomarkt/components/general/EditableInput";
import { STRINGS } from "@novomarkt/locales/strings";
import { COLORS } from "@novomarkt/constants/colors";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
}

const ProfileViewScreen = () => {
	const [data, setData] = useState<UserData>({
		email: "",
		phone: "",
		dateOfBirth: "",
		isMale: true,
		name: "",
	});
	let onTextChange = useCallback((key: keyof UserData) => {
		return (value: string) => {
			setData({ ...data, [key]: value });
		};
	}, []);
	return (
		<View style={styles.shadowBox}>
			<View style={styles.row}>
				<Avatar />
			</View>
			<View style={styles.inputBox}>
				<EditableInput
					title={STRINGS.email}
					value={data?.email}
					onChange={onTextChange("email")}
					placeholder="Нет email"
					keyboardType="email-address"
				/>
				<EditableInput
					title={STRINGS.phone}
					value={data?.phone}
					onChange={onTextChange("phone")}
					placeholder="+998 99 989 2923"
					keyboardType="phone-pad"
				/>
			</View>
			<View style={{ flex: 1 }}>
				<EditableInput
					title={STRINGS.dateOfBirth}
					value={data?.dateOfBirth}
					onChange={onTextChange("dateOfBirth")}
					placeholder="01.01.2000"
					keyboardType="numeric"
				/>
			</View>
			<View>
				<Text>{STRINGS.sex}</Text>
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity
						onPress={() => setData({ ...data, isMale: true })}
					>
						<View style={styles.rowButtons}>
							<View
								style={
									data?.isMale ? styles.dot : styles.dotGray
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
							<Text style={styles.black}>Муж.</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setData({ ...data, isMale: false })}
					>
						<View style={styles.rowButtons}>
							<View
								style={
									data?.isMale ? styles.dotGray : styles.dot
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
							<Text style={styles.black}>Жен.</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.inputBox}>
				<EditableInput
					title={"Наименование организации / ЯТТ"}
					value={data?.email}
					onChange={onTextChange("email")}
					placeholder="Itmaker"
					keyboardType="email-address"
				/>
				<EditableInput
					title={"Расчетный счет"}
					value={data?.phone}
					onChange={onTextChange("phone")}
					placeholder="274528284"
					keyboardType="phone-pad"
				/>
			</View>
			<View style={styles.inputBox}>
				<EditableInput
					title={"Наименование банка"}
					value={data?.email}
					onChange={onTextChange("email")}
					placeholder="Ипотека банк"
					keyboardType="email-address"
				/>
				<EditableInput
					title={"МФО"}
					value={data?.phone}
					onChange={onTextChange("phone")}
					placeholder="11122000"
					keyboardType="phone-pad"
				/>
			</View>
			<View style={styles.inputBox}>
				<EditableInput
					title={"ИНН"}
					value={data?.email}
					onChange={onTextChange("email")}
					placeholder="274528284"
					keyboardType="email-address"
				/>
				<EditableInput
					title={"ОКЭД"}
					value={data?.phone}
					onChange={onTextChange("phone")}
					placeholder="274528284"
					keyboardType="phone-pad"
				/>
			</View>
			<View style={styles.inputBox}>
				<EditableInput
					title={"Юридический адрес"}
					value={data?.email}
					onChange={onTextChange("email")}
					placeholder="Махмуда тараби 23"
					keyboardType="email-address"
				/>
				<EditableInput
					title={"ФИО руководителя"}
					value={data?.phone}
					onChange={onTextChange("phone")}
					placeholder="mironshohnasimov"
					keyboardType="phone-pad"
				/>
			</View>
		</View>
	);
};

export default ProfileViewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 20,
		paddingBottom: 40,
	},

	header: {
		fontSize: 25,
		color: COLORS.defaultBlack,
		marginTop: 20,
		marginHorizontal: 20,
	},

	shadowBox: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginBottom: 20,
	},

	row: {
		alignItems: "center",
		marginTop: 15,
	},

	text: {
		fontSize: 18,
		color: COLORS.defaultBlack,
		marginHorizontal: 15,
	},

	inputBox: {
		marginTop: 20,
	},

	rowButtons: {
		marginTop: 5,
		marginRight: 20,
		flexDirection: "row",
	},

	dot: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.orange,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	background: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.orange,
	},
	dotGray: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.gray,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	backgroundGray: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.white,
	},

	black: {
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	head: {
		alignSelf: "center",
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat-Medium",
	},

	shadowBoxTwo: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		paddingRight: 20,
		marginBottom: 60,
	},

	bank: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	border: {
		borderRadius: 8,
		borderWidth: 2,
		borderColor: COLORS.red,
		alignItems: "center",
		justifyContent: "center",
		padding: 35,
	},

	blueText: {
		color: COLORS.lightBlack,
		fontSize: 14,
		marginTop: 10,
	},

	round: {
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderRadius: 30,
		borderColor: COLORS.red,
	},

	locate: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	moscow: {
		marginLeft: 10,
	},

	txt: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	delete: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	recover: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},
});

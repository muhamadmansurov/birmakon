import { PasswordIcon, PasswordOffIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { useState } from "react";
import {
	KeyboardType,
	KeyboardTypeOptions,
	RegisteredStyle,
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import Text from "./Text";

export interface DefaultInputProps {
	title?: string;
	placeholder?: string;
	titleStyle?: StyleProp<TextStyle>;
	containerStyle?: ViewStyle;
	inputStyle?: TextStyle;
	textContentType?:
		| "none"
		| "URL"
		| "addressCity"
		| "addressCityAndState"
		| "addressState"
		| "countryName"
		| "creditCardNumber"
		| "emailAddress"
		| "familyName"
		| "fullStreetAddress"
		| "givenName"
		| "jobTitle"
		| "location"
		| "middleName"
		| "name"
		| "namePrefix"
		| "nameSuffix"
		| "nickname"
		| "organizationName"
		| "postalCode"
		| "streetAddressLine1"
		| "streetAddressLine2"
		| "sublocality"
		| "telephoneNumber"
		| "username"
		| "password"
		| "newPassword"
		| "oneTimeCode"
		| undefined;
	secureText?: boolean | undefined;
	onChange?: (val: string) => void;
	value?: string;
	setPasswordEnabled: (val: boolean) => void;
}

const DefaultInputEye = ({
	placeholder,
	title,
	titleStyle,
	containerStyle,
	inputStyle,
	textContentType,
	secureText,
	onChange,
	value,
	setPasswordEnabled,
}: DefaultInputProps) => {
	const [show, setShow] = React.useState(false);
	const [visible, setVisible] = React.useState(true);
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<View style={styles.section}>
				<TextInput
					textContentType={textContentType}
					secureTextEntry={secureText}
					style={[styles.input, inputStyle]}
					placeholder={placeholder}
					placeholderTextColor={COLORS.gray}
					onChangeText={onChange}
					value={value}
				/>
				<TouchableOpacity
					style={styles.eyes}
					onPress={() => {
						setVisible(!visible);
						setShow(!show);
						setPasswordEnabled(!secureText);
					}}
				>
					{show ? <PasswordIcon /> : <PasswordOffIcon />}
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DefaultInputEye;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		lineHeight: 27,
	},
	input: {
		width: "70%",
		fontFamily: "Montserrat-Medium",
	},
	container: {
		alignSelf: "center",
		marginBottom: 20,
	},
	section: {
		borderColor: COLORS.darkBorder,
		borderWidth: 1,
		borderRadius: 8,
		width: WINDOW_WIDTH - 80,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 10,
	},
	btnEye: {
		position: "absolute",
		right: 20,
		top: 18,
	},
	eyes: {
		marginRight: 10,
	},
});

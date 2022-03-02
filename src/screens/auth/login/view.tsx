import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultInputEye from "@novomarkt/components/general/DefaultInputEye";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import useLoginHook from "./hooks";
import { styles } from "./style";

const LoginView = () => {
	// let {
	// 	navigation,
	// 	passwordEnabled,
	// 	setPasswordEnabled,
	// 	onStateChange,
	// 	state,
	// 	loading,
	// 	onLogin,
	// 	onRegister,
	// } = useLoginScreenHook();
	let {
		error,
		loading,
		onForgotPassNavigation,
		onLogin,
		onLoginNavigation,
		onStateChange,
		state,
		passwordEnabled,
		setPasswordEnabled,
	} = useLoginHook();
	console.log(error);
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: 320,
					height: 60,
					marginHorizontal: 30,
					marginBottom: 50,
					justifyContent: "center",
				}}
				source={require("../../../assets/images/Logo.png")}
			/>
			<View style={styles.inputBox}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
					keyboardType="phone-pad"
					onChange={onStateChange("phone")}
					value={state?.phone}
				/>
				<DefaultInputEye
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
					textContentType={"password"}
					secureText={passwordEnabled}
					setPasswordEnabled={setPasswordEnabled}
					onChange={onStateChange("password")}
					value={state?.password}
				/>
				<Text style={styles.errorText}>{error}</Text>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.auth}
					onPress={onLogin}
					containerStyle={styles.button}
					loading={loading}
				/>
				<View style={styles.rowText}>
					<TouchableOpacity onPress={onForgotPassNavigation}>
						<Text style={styles.blueText}>Забыли пароль?</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.askText}>Нет учетной записи?</Text>
					</TouchableOpacity>
				</View>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.registration}
					containerStyle={styles.button}
					onPress={onLoginNavigation}
					loading={loading}
				/>
			</View>
		</View>
	);
};

export default LoginView;

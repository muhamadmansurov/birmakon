import { FbIcon, GmailIcon, OkIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultInputEye from "@novomarkt/components/general/DefaultInputEye";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./style";

const RegisterView = () => {
	// let {
	// 	loading,
	// 	onStateChange,
	// 	onRegister,
	// 	state,
	// 	onRegisterNavigation,
	// 	errTxt,
	// } = useRegisterHook();
	const [passwordEnabled, setPasswordEnabled] = useState(true);
	let navigation = useNavigation();
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
			<View style={[styles.inputBox, styles.elevation]}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.name}
					placeholder={STRINGS.yourName}
					// onChange={onStateChange("name")}
					// value={state.name}
				/>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
					// onChange={onStateChange("phone")}
					// value={state.phone}
				/>
				<DefaultInputEye
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
					textContentType={"password"}
					secureText={passwordEnabled}
					setPasswordEnabled={setPasswordEnabled}
					// onChange={onStateChange("password")}
					// value={state.password}
				/>

				{/* <Text style={styles.errText}>{errTxt}</Text> */}
				<DefaultButton
					text={STRINGS.continue}
					textStyle={styles.text}
					containerStyle={styles.button}
					onPress={() => navigation.navigate(ROUTES.REGISTER)}
				/>
			</View>
		</View>
	);
};

export default RegisterView;

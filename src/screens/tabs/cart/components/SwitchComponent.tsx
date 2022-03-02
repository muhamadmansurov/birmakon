import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

export interface SwitchComponentProps {
	text?: string;
}

const SwitchComponent = ({ text }: SwitchComponentProps) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<Text style={styles.text}> {text} </Text>
			<Switch
				hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
				trackColor={{ false: "#767577", true: COLORS.lightpurple2 }}
				thumbColor={isEnabled ? "#EE4927" : COLORS.lightGray}
				ios_backgroundColor="gray"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

export default SwitchComponent;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	text: {
		fontSize: 20,
		color: COLORS.defaultBlack,
	},
});

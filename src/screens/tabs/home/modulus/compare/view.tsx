import BackHeader from "@novomarkt/components/navigation/BackHeader";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import CompareList from "./components/CompareList";

const view = () => {
	return (
		<View style={styles.container}>
			<BackHeader name="Сравнить" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<CompareList />
			</ScrollView>
		</View>
	);
};

export default view;

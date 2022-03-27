import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../../home/components/ProductItem";

export const BySellers = () => {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={[]}
				renderItem={({ item }) => <ProductItem item={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

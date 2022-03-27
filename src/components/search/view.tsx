import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import React from "react";
import { FlatList, View } from "react-native";
import SearchBackHeader from "../navigation/Search&BackHeader";
import { styles } from "./styles";

const Search = () => {
	// let { result, searchWithQuery } = useSearchHook();

	return (
		<View style={styles.container}>
			<SearchBackHeader autoFocus={true} onChange={() => {}} />
			<FlatList
				data={[]}
				renderItem={({ item }) => {
					return <ProductItem item={item} />;
				}}
				style={styles.list}
			/>
		</View>
	);
};

export default Search;

import React from "react";
import { styles } from "./style";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { STRINGS } from "@novomarkt/locales/strings";
import FilterHeader from "../components/FilterHeader";
import PriceChoosing from "../components/PriceChoosing";
import SwitchComponent from "../components/SwitchComponent";
import ChooseBrands from "../components/ChooseBrands";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import ChooseColor from "../components/ChooseColor";
import ChooseSize from "../components/ChooseSize";
import ChooseSeason from "../components/ChooseSeason";

const FilterView = () => {
	return (
		<View style={styles.container}>
			<FilterHeader />
			<ScrollView showsVerticalScrollIndicator={false}>
				<PriceChoosing />
				<SwitchComponent text={STRINGS.price} />
				<SwitchComponent text={STRINGS.getToday} />
				<SwitchComponent text={STRINGS.moreCashback} />
				<ChooseBrands />
				<ChooseColor />
				<ChooseSize />
				<ChooseSeason />
				<DefaultButton
					containerStyle={styles.button}
					text="Показать 1 товар"
				/>

				<View style={{ marginTop: 40 }}></View>
			</ScrollView>
		</View>
	);
};

export default FilterView;

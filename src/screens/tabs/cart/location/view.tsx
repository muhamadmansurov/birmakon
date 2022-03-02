import { LocationBlueIcon } from "@novomarkt/assets/icons/icons";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { ScrollView, TextInput, TextInputBase, View } from "react-native";
import DefaultHeader from "../../favorites/components/DefaultHeader";
import { styles } from "./style";

const Location = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader name="Ваш регион" style={styles.header} />
			<TextInput
				placeholder="Ваш регион"
				style={styles.input}
				placeholderTextColor={COLORS.gray}
			/>
			<View style={styles.containerSectionView}>
				<View style={styles.containerSection}>
					<View style={styles.containerSectionIcon}>
						<LocationBlueIcon />
					</View>
					<Text style={styles.containerSectionText}>
						Москва и московская област
					</Text>
				</View>
				<View style={styles.containerSectionBox}>
					<Text style={styles.containerSectionBoxText}>
						Определен автоматически
					</Text>
				</View>
			</View>
			<View style={styles.containerSectionrow}>
				<View style={styles.proksi}>
					<Text style={styles.containerSectionrowText}>
						Санкт - Петербург{" "}
					</Text>
				</View>
			</View>
			<View style={styles.containerSectionrow}>
				<View style={styles.proksi}>
					<Text style={styles.containerSectionrowText}>
						Самарская область{" "}
					</Text>
				</View>
			</View>
			<View style={styles.containerSectionrow}>
				<View style={styles.proksi}>
					<Text style={styles.containerSectionrowText}>
						Нижегородская область{" "}
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Location;

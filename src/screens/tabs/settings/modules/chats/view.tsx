import React from "react";
import { styles } from "./style";
import {
	View,
	Text,
	ScrollView,
	Touchable,
	TouchableOpacity,
} from "react-native";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import ChatPersonComponent from "./components/ChatPerson";
import { COLORS } from "@novomarkt/constants/colors";

const ChatsView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name="Чаты" style={styles.header} />
			<View style={styles.sectionContainer}>
				<TouchableOpacity>
					<View style={styles.section}>
						<Text style={styles.sectionText}>По поставщику</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.section1}>
						<Text style={styles.sectionText1}>По товару</Text>
					</View>
				</TouchableOpacity>
				{/* <TouchableOpacity>
					<View style={styles.section1}>
						<Text style={styles.sectionText1}>Поддержка</Text>
					</View>
				</TouchableOpacity> */}
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.itemBox}
			>
				<View
					style={{
						marginBottom: 60,
						backgroundColor: COLORS.lightGray,
					}}
				>
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
					<ChatPersonComponent />
				</View>
			</ScrollView>
		</View>
	);
};

export default ChatsView;

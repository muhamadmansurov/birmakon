import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { ArrowBottomMarked } from "@novomarkt/assets/icons/icons";
import { productsData } from "../../components/ProductsList";
import CommentItem from "@novomarkt/screens/tabs/settings/modules/comments/components/CommentItem";
import { COLORS } from "@novomarkt/constants/colors";
import BackHeader from "@novomarkt/components/navigation/BackHeader";

const FeedbacksView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name="Посмотреть все отзывы" />
			<View style={styles.rowHeader}>
				<Text style={styles.txt}>Сортировать по:</Text>
				<Text style={styles.blueText}>Дате</Text>
				<ArrowBottomMarked fill={COLORS.blue} style={styles.arrow} />
				<Text style={styles.blueText2}>Оценке</Text>
			</View>
			<FlatList
				data={productsData.slice(0, 7)}
				renderItem={CommentItem}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default FeedbacksView;

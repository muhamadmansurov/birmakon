import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem, { ProductItemProps } from "./SuitsItem";

export let productsData: ProductItemProps[] = [
	{
		category: "Костюми",
		image: "https://img.championat.com/s/735x490/news/big/g/u/gorodskoj-stil-vybiraem-krossovki-na-osen_1566832407654818550.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		name: "Lorem Ipsum is simply dummy text of the ",
		discount: -21,
		sale: "2000 cум",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://incrussia.ru/wp-content/uploads/2019/02/uilyamson-1.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		sale: "2000 cум",
		name: "Lorem Ipsum is simply dummy text of the ",
		discount: -50,
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://assets.gq.ru/photos/6041cef7d2ed9f2d527c6ec1/16:9/w_1280,c_limit/GettyImages-1231502993.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		sale: "2000 cум",
		discount: -46,
		name: "Lorem Ipsum is simply dummy text of the ",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://static.ecco.ru/images/eshop/img/other/big/802814_02244_8.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		name: "Lorem Ipsum is simply dummy text of the ",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://cdnn1.img.sputniknews-uz.com/img/07e4/09/09/14935111_170:0:2901:2048_1920x0_80_0_0_cd44099c69c2cb42ae632b20ee3f25e6.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		name: "Lorem Ipsum is simply dummy text of the ",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://ixbt.online/live/images/original/00/96/98/2021/11/07/171c23f224.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		name: "Lorem Ipsum is simply dummy text of the ",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
	{
		category: "Костюми",
		image: "https://assets.gq.ru/photos/5db2b21c6fc3e4000841248c/16:9/w_1280,c_limit/GettyImages-1182171612.jpg",
		price: "1400 Cум",
		shopName: "ZARA",
		name: "Lorem Ipsum is simply dummy text of the ",
		options: [
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
			{
				key: "эластан",
				value: " 5%",
			},
			{ key: "Комплектация", value: "рубашка" },
			{ key: "Крой", value: "средняя посадка" },
		],
	},
];

export interface PropularProductsProps {
	title?: string;
}

const SuitsList = ({}: PropularProductsProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={productsData}
				renderItem={(e) => <ProductItem {...e} />}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default SuitsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		marginLeft: 16,
		marginBottom: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});

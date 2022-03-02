import {
	BlackSearchIcon,
	BottomIcon,
	FiltersIcon,
} from "@novomarkt/assets/icons/icons";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SuitsList from "../catalog-products/components/SuitsList";
import { CatalogDetailsProps } from "./components/CatalogDetails";
import { styles } from "./style";

let BannerURL =
	"https://lh4.googleusercontent.com/mEIPzmkL2ezY8H55Ib7dyT7gUPQRnDSxyu_SM458KWgKAkOWD0X9VmkIw7hBQdgecLARQOUT97qOtLxf2OHysWaByiq-HbLPzrMA5Sb9hsUP3Xrml-BPjUTBQP_YR1ZTOsm14Doh";

export let catalogDetailsData: CatalogDetailsProps[] = [
	{
		name: "Платья",
		image: "https://lh3.googleusercontent.com/proxy/LJy7o2ngC66hOJArEx7xr_89ilgqbYqqtZHyBqeKJ9cvrD4X6r8uys4tRTZHyOa9jVo9rfoq2ZDeOHvmPjjdGFeYSGWL1KAf2ji8v1lhc9SWuGaQW3YJ0lJZaCMxY7Uwo-g7hw-PzrY",
	},
	{
		name: "Сумки",
		image: "https://cdn.shopify.com/s/files/1/0266/7783/7929/products/EG109_8.jpg",
	},
	{
		name: "Кепки",
		image: "https://5.imimg.com/data5/QR/ID/MY-19889014/men-cap-0-500x500.jpg",
	},
	{
		name: "Обувь",
		image: "https://i31.takemore.net/images/watermarked/60/12/95/adidas-fw2888-bravada-1.jpg",
	},
	{
		name: "Костюмы",
		image: "https://assets.ajio.com/medias/sys_master/root/20200912/GowL/5f5ccabf7cdb8c766299e9b0/-1117Wx1400H-460257617-lightgrey-MODEL.jpg",
	},
	{
		name: "Обувь",
		image: "https://i31.takemore.net/images/watermarked/60/12/95/adidas-fw2888-bravada-1.jpg",
	},
];

const CatalogDetailsView = () => {
	let navigation = useNavigation();
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.section}>
				<BackHeader
					name={"Женщинам"}
					style={styles.header}
					hasSearch={false}
				/>
			</View>
			<Image source={{ uri: BannerURL }} style={styles.banner} />
			<View style={styles.sectionContainer}>
				<TouchableOpacity>
					<View style={styles.sectionContainerBox}>
						<Text style={styles.sectionContainerText}>
							Сортировка
						</Text>
						<View style={styles.sectionContainerView}>
							<BottomIcon />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.sectionContainerBox}
					onPress={() => navigation.navigate(ROUTES.FILTERS)}
				>
					<Text style={styles.sectionContainerText}>Фильтры</Text>

					<View style={styles.sectionContainerView}>
						<FiltersIcon />
					</View>
				</TouchableOpacity>
			</View>
			<SuitsList />
		</ScrollView>
	);
};

export default CatalogDetailsView;

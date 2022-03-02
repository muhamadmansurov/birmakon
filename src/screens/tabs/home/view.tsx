import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarouselItemProp } from ".";
import BrandsList from "./components/BrandsList";
import CarouselItem from "./components/CarouselItem";
import DiscountproductList from "./components/DiscountproductList";
import NewsList from "./components/NewsList";
import ProductsList from "./components/ProductsList";
import RedItem from "./components/RedItem";
import ShopsList from "./components/ShopsList";
import { styles } from "./style";

export let carouselData: CarouselItemProp[] = [
	"https://donttakefake.com/wp-content/uploads/2018/03/9-3.jpg",
	"https://static.dw.com/image/16702984_403.jpg",
	"https://vicco.uz/wp-content/uploads/2021/02/1-3-min-e1615788188720.jpg",
	"https://dreamstan.com.ua/image/cache/data/tovar/KROSSOVKI/DETSKIE/A-2-2/a-2-2%20detskie%20krossovki-1-750x750.jpg",
];

const HomeView = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
			<SearchHeader />
			<View style={styles.container}>
				<Carousel
					onSnapToItem={(index) => setActiveSlide(index)}
					itemWidth={WINDOW_WIDTH}
					windowSize={WINDOW_WIDTH}
					sliderWidth={WINDOW_WIDTH}
					itemHeight={200}
					sliderHeight={200}
					data={carouselData}
					renderItem={CarouselItem}
					pagingEnabled
				/>
				<Pagination
					activeDotIndex={activeSlide}
					dotsLength={carouselData.length}
				/>
			</View>
			<BrandsList />
			<ShopsList />
			<ProductsList />
			<DiscountproductList title={STRINGS.productsOnSale} />
			<NewsList />
			<DiscountproductList title={STRINGS.RecentlyAdded} />
			<ProductsList title={STRINGS.recentlyWatched} />
			<RedItem />
			<RedItem />
		</ScrollView>
	);
};

export default HomeView;

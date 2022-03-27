import {
	ArrowBottomMarked,
	BasketIcon,
	BlueBackIcon,
	DownArrowIcon,
	DownIcon,
	HeartIcon,
	MinusIcon,
	PlusCounterIcon,
	RightArrow,
	RightBlueIcon,
	ScrollViewIcon,
	StarsIcon,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import CommentItem from "@novomarkt/screens/tabs/settings/modules/comments/components/CommentItem";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
	Animated,
	Dimensions,
	FlatList,
	Image,
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ProductItem, { ProductItemProps } from "../../components/ProductItem";
import ProductsList, { productsData } from "../../components/ProductsList";
import BackHeaderLimit from "./components/BackHeaderLimit";
import CustomCarouselItem from "./components/CustomCarouselItem";
import FavoritePrice from "./components/favoritePrice";
import ReviewBox from "./components/ReviewBox";
import { styles } from "./style";

export let customCarouselData: string[] = [
	"https://konvers-kazan.ru/wp-content/uploads/2020/11/fytbolki_02-e1614013120178.jpg",
	"https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwea09aa59/original/90_1003391-1A02346_1B000_10_LaGrecaT-Shirt-T-shirts-versace-online-store_0_0.jpg?sw=450&sh=632&sm=fit&sfrm=jpg",
	"https://image.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg",
];

let productColors = [
	"https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png",
	"https://u01.appmifile.com/images/2018/01/11/e269ddd1-9d47-4beb-8741-92764fb0578d.jpg",
	"https://xiaomistore.md/files/product_common_photo/id_2694/addphoto/10_5a2c291a326fe.jpg",
	"https://www.ixbt.com/img/n1/news/2020/1/6/1269151_10844817.jpg",
	"https://img.championat.com/c/1200x900/news/big/o/l/camye-dorogie-krossovki-v-mire_1593518652374931204.jpg",
];
let productSize = [
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
];

let data = {
	oldprice: "2000 сум",
	newprice: "1400  сум",
	fromTo: "от 10 до 50:",
	smallprice: "800 сум",
	tofrom: "от 50 до 100:",
	bigprice: "1000 сум",
};
const ProductDetailsView = () => {
	let navigation = useNavigation();
	let { params } = useRoute();
	const [isActive, setIsActive] = useState(true);
	let item: ProductItemProps = params?.item || {};
	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	const [currentSize, setCurrentSize] = useState(-1);
	const [currentColor, setCurrentColor] = useState(-1);
	const colorScrollerRef = useRef<ScrollView>();
	const sizeScrollerRef = useRef<ScrollView>();
	const [colorScrollIndex, setColorScrollIndex] = useState(0);
	const [sizeScroll, setSizeScroll] = useState(0);
	//animation
	const value = useRef(new Animated.Value(0));

	const [number, setNumber] = useState(0);
	function increment() {
		setNumber(number + 1);
	}
	function decrement() {
		if (number > 0) setNumber(number - 1);
	}

	return (
		<View style={styles.container}>
			<BackHeaderLimit />
			<ScrollView
				contentContainerStyle={{ paddingBottom: 50 }}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.otsenka}>
					<StarsIcon />
					<Text>545 отзывов</Text>
				</View>
				<View style={styles.carousel}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={customCarouselData}
						renderItem={CustomCarouselItem}
						pagingEnabled
					/>
					<Pagination
						activeDotIndex={activeSlide}
						dotsLength={customCarouselData.length}
					/>
					<Text style={styles.itemName}>
						Lorem Ipsum is simply dummy text of th
					</Text>
				</View>
				<FavoritePrice
					oldprice={data.oldprice}
					newprice={data.newprice}
					fromTo={data.fromTo}
					smallprice={data.smallprice}
					tofrom={data.tofrom}
					bigprice={data.bigprice}
				/>
				<Text style={styles.corusellText}>Цвет</Text>
				<View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						ref={colorScrollerRef}
						contentContainerStyle={{ paddingRight: 60 }}
					>
						{productColors.map((e, i) => {
							return (
								<TouchableOpacity
									onPress={() => setCurrentColor(i)}
								>
									<View style={styles.corusellContiner}>
										<Image
											source={{ uri: e }}
											style={
												currentColor === i
													? styles.activeColor
													: styles.corusell
											}
										/>
									</View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
					<View style={styles.scrollView}>
						<TouchableOpacity
							onPress={() => {
								console.log({ colorScrollIndex });

								colorScrollerRef.current?.scrollTo({
									x:
										Dimensions.get("window").width *
										(colorScrollIndex + 1),
									animated: true,
								});
								setColorScrollIndex(colorScrollIndex + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View>
				</View>

				<Text style={styles.corusellText}>Размер</Text>
				<View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						ref={sizeScrollerRef}
						contentContainerStyle={{ paddingRight: 45 }}
					>
						{productSize.map((e, index) => {
							return (
								<TouchableOpacity
									onPress={() => {
										sizeScrollerRef.current?.scrollTo({
											x: (index + 1) * 60,
											animated: true,
										});
										setCurrentSize(index);
									}}
								>
									<View style={styles.sectionSize}>
										<Text
											style={
												currentSize === index
													? styles.activeSize
													: styles.sectionText
											}
										>
											{e}
										</Text>
									</View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
					<View style={styles.scrollView1}>
						<TouchableOpacity
							onPress={() => {
								console.log({
									setSizeScroll,
								});

								sizeScrollerRef.current?.scrollTo({
									x:
										Dimensions.get("window").width *
										(sizeScroll + 1),
									animated: true,
								});
								setSizeScroll(sizeScroll + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styles.deliveryView}>
						<Text style={styles.deliveryText}>
							Доставка: 318,94 сум
						</Text>
						<TouchableOpacity style={{ flexDirection: "row" }}>
							<Text style={styles.deliveryText1}>
								В Uzbekistan через BTC
							</Text>
							<DownArrowIcon
								style={{ marginTop: 2, marginLeft: 10 }}
							/>
						</TouchableOpacity>
						<Text style={styles.deliveryText1}>
							Расчётное время доставки: 29-48 дней
						</Text>
					</View>
					<View style={styles.counter}>
						<TouchableOpacity
							style={styles.minus}
							onPress={decrement}
						>
							<MinusIcon fill={COLORS.white} />
						</TouchableOpacity>
						<View style={styles.topBottom}>
							<Text>{number} шт</Text>
						</View>
						<TouchableOpacity
							style={styles.plus}
							onPress={increment}
						>
							<PlusCounterIcon fill={COLORS.white} />
						</TouchableOpacity>
						<View style={styles.function}>
							<Text style={styles.functionText}>
								Габариты: 120х120
							</Text>
						</View>
					</View>
					<View style={styles.oldContainer}>
						<TouchableOpacity style={styles.oldBtn}>
							<Text style={styles.oldText}>Купить</Text>
						</TouchableOpacity>
						<View style={styles.sectionContainer}>
							<DefaultButton
								containerStyle={styles.button}
								onPress={() => setIsActive((e) => !e)}
								secondary={isActive}
							>
								<View style={styles.buttonContainer}>
									<Text
										style={[
											isActive
												? styles.inactiveCartText
												: styles.cartText,
										]}
									>
										{STRINGS.addToCart}
									</Text>
									<BasketIcon
										fill={
											isActive
												? COLORS.cartColor3
												: COLORS.white
										}
									/>
								</View>
							</DefaultButton>
						</View>
						<TouchableOpacity
							onPress={() => navigation.navigate(ROUTES.COMPARE)}
							style={styles.oldView1}
						>
							<Text style={styles.oldText}>Сравнить</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(ROUTES.CHARACTERISTIC_DETAILS, {
								options: item.options,
							})
						}
					>
						<View style={styles.sectionBox}>
							<Text style={styles.sectionBoxText}>
								{STRINGS.characteristics}
							</Text>
							<View style={styles.iconView}>
								<BlueBackIcon />
							</View>
						</View>
					</TouchableOpacity>
					{item.options?.map((e) => {
						return (
							<View style={styles.map}>
								<Text style={styles.key}>{e.key}</Text>
								<Text>{e.value}</Text>
							</View>
						);
					})}
				</View>
				<View style={styles.flatlistContainerView}>
					<View style={styles.flatlistContainer}>
						<Text style={styles.flatlistContainerText}>
							Описание
						</Text>
						<RightBlueIcon />
					</View>
					<View style={styles.flatlistContainerBox}>
						<Text style={styles.flatlistContainerBoxText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Feugiat a ut pellentesque adipiscing viverra
							risus laoreet. Orci, dictumst eget vel nunc at
							vulputate cras posuere commodo. Tortor, semper
							fermentum felis sagittis, phasellus molestie at nunc
							ut. Sit tristique at faucibus risus nunc cras.
						</Text>
						<Text style={styles.flatlistContainerBoxText1}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Feugiat a ut pellentesque adipiscing viverra
							risus laoreet. Orci, dictumst eget vel nunc at
							vulputate cras posuere commodo. Tortor, semper
							fermentum felis sagittis, phasellus molestie at nunc
							ut. Sit tristique at faucibus risus nunc cras.
						</Text>
					</View>
				</View>
				<View
					style={{
						backgroundColor: COLORS.white,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
						marginHorizontal: 10,
						borderRadius: 10,
						padding: 0,
						paddingHorizontal: 15,
					}}
				>
					<View style={styles.flatlistContainer12}>
						<Text style={styles.flatlistContainerText12}>
							Мироншох
						</Text>
						<HeartIcon fill={COLORS.red} />
					</View>
					<View style={styles.propertyBox}>
						<Text style={styles.propertyBoxText}>
							12545 отзывов (94% положительных)
						</Text>
						<Text style={styles.propertyBoxText}>
							Махмуда тараби 23
						</Text>
						<Text style={styles.propertyBoxText}>Ташкент</Text>
					</View>
				</View>
				<ProductsList
					hasBottomMargin={false}
					title={STRINGS.sellerProducts}
				/>
				<View style={{ alignItems: "center" }}>
					<DefaultButton containerStyle={styles.marginBottom}>
						<Text style={styles.buttonReview}>
							{STRINGS.goToShop}
						</Text>
					</DefaultButton>
				</View>
				<TouchableOpacity
					onPress={() => {
						LayoutAnimation.configureNext(
							LayoutAnimation.Presets.easeInEaseOut
						);
						setShouldShow(!shouldShow);
					}}
				>
					<View style={styles.composTwo}>
						<Text style={styles.composition}>
							{STRINGS.reviews} 105
						</Text>
						<RightArrow fill={COLORS.blue} />
					</View>
				</TouchableOpacity>
				<ReviewBox />
				<View>
					<View style={styles.rowHeader}>
						<Text style={styles.txt}>Сортировать по:</Text>
						<Text style={styles.blueText}>Дате</Text>
						<ArrowBottomMarked
							fill={COLORS.blue}
							style={styles.arrow}
						/>
						<Text style={styles.blueText2}>Оценке</Text>
					</View>
					<FlatList
						data={productsData.slice(0, 2)}
						renderItem={CommentItem}
						showsVerticalScrollIndicator={false}
					/>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate(ROUTES.FEEDBACKS)}
				>
					<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
				</TouchableOpacity>
				<Text style={styles.title}>{STRINGS.advertBlock}</Text>
				<FlatList
					numColumns={2}
					data={productsData}
					renderItem={(props) => <ProductItem {...props} />}
					style={styles.containerFlat}
					contentContainerStyle={styles.contentContainerStyle}
				/>
			</ScrollView>
		</View>
	);
};

export default ProductDetailsView;

import { RatingsIcon, SendingsIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CompareList = () => {
	let productColors = [
		"https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png",
	];
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<View style={{ flexDirection: "column" }}>
					<View style={styles.colorView}>
						<Image
							source={require("../../../../../../assets/images/ShoesImage.png")}
							style={{
								width: 160,
								height: 150,
								resizeMode: "cover",
							}}
						/>
					</View>
					<Text style={styles.colorText}>Lorem ipsum</Text>
					<View style={styles.row}>
						<View style={styles.containerBox}>
							<RatingsIcon />
							<Text style={styles.containerBoxText}>
								Общая оценка
							</Text>
						</View>
						<TouchableOpacity activeOpacity={0.6}>
							<View style={styles.containerSection}>
								<Text style={styles.containerSectionText}>
									название магазина
								</Text>
								<SendingsIcon />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flexDirection: "column" }}>
					<View style={styles.colorView}>
						<Image
							source={require("../../../../../../assets/images/ShoesImage.png")}
							style={{
								width: 160,
								height: 150,
								resizeMode: "cover",
							}}
						/>
					</View>
					<Text style={styles.colorText}>Lorem ipsum</Text>
					<View style={styles.row}>
						<View style={styles.containerBox}>
							<RatingsIcon />
							<Text style={styles.containerBoxText}>
								Общая оценка
							</Text>
						</View>
						<TouchableOpacity activeOpacity={0.6}>
							<View style={styles.containerSection}>
								<Text style={styles.containerSectionText}>
									название магазина
								</Text>
								<SendingsIcon />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.flex}>
				<View style={styles.international}>
					<Text style={styles.flexText}>Описания</Text>
					<Text style={styles.flexText1}>
						Lorem Ipsum is simply text of the and typesetting
						industry. Lor em Ipsum has been the industry's standard
						dum my text ever since the 1500s, when an unknown
						printer took a galley
					</Text>
				</View>
				<View style={styles.international}>
					<Text style={styles.flexText}>Описания</Text>
					<Text style={styles.flexText1}>
						Lorem Ipsum is simply text of the and typesetting
						industry. Lor em Ipsum has been the industry's standard
						dum my text ever since the 1500s, when an unknown
						printer took a galley
					</Text>
				</View>
			</View>
			<View style={styles.internat}>
				<View style={styles.section2}>
					<Text style={styles.section2Text}>Размер</Text>
					<View style={styles.section2Box}>
						<View style={styles.section3Box}>
							<TouchableOpacity style={{ marginRight: 5 }}>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{ marginRight: 5 }}>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.section2Box}>
						<View style={styles.boxStyle}>
							<TouchableOpacity style={{ marginRight: 5 }}>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{ marginRight: 5 }}>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.section2View}>
									<Text>35</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<View style={styles.section2}>
						<Text style={styles.section2Text}>Размер</Text>
						<View style={styles.section2Box}>
							<View style={styles.boxStyle}>
								<TouchableOpacity style={{ marginRight: 5 }}>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={{ marginRight: 5 }}>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.section2Box}>
							<View style={styles.section3Box}>
								<TouchableOpacity style={{ marginRight: 5 }}>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={{ marginRight: 5 }}>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.section2View}>
										<Text>35</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.animation}>
				<View style={styles.boxView1}>
					<Text style={styles.boxText1}>Характеристики</Text>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой: </Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой:</Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой:</Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: "column",
						justifyContent: "space-between",
						marginLeft: -20,
					}}
				>
					<Text style={styles.boxText1}>Характеристики</Text>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой: </Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой:</Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
					<Text style={styles.columnText}>
						эластан 5%, вискоза 42%, {"\n"}шерсть 53%
					</Text>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Комплектация: </Text>
						<Text style={styles.flexrowText}>рубашка</Text>
					</View>
					<View style={styles.flexrowView}>
						<Text style={styles.boxTextmin}>Крой:</Text>
						<Text style={styles.flexrowText}>средняя посадка</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CompareList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 10,
		marginTop: 25,
		paddingBottom: 40,
		marginVertical: 40,
		backgroundColor: COLORS.white,
	},
	containerBox: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 10,
		marginTop: 10,
	},
	containerBoxText: {
		fontWeight: "400",
		fontSize: 15,
		marginHorizontal: 3,
		fontFamily: "Poppins",
	},
	containerSection: {
		width: 160,
		height: 50,
		marginVertical: 10,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: COLORS.orange,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	containerSectionText: {
		color: COLORS.orange,
		marginRight: 5,
	},
	row: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray,
	},
	flex: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray,
		flexDirection: "row",
	},
	flexText: {
		marginLeft: 10,
		fontWeight: "500",
		fontSize: 20,
		marginTop: 20,
	},
	flexText1: {
		marginTop: 8,
		marginLeft: 10,
		fontSize: 12,
		fontWeight: "400",
	},
	section2: {
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	section2Text: {
		fontWeight: "500",
		fontSize: 20,
		marginVertical: 15,
	},
	section2View: {
		borderWidth: 1,
		width: 50,
		height: 50,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	section2Box: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 6,
	},
	colorView: {
		width: 160,
		height: 150,
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 8,
		marginRight: 18,
		alignItems: "center",
	},
	colorText: {
		fontSize: 20,
		fontWeight: "600",
		marginHorizontal: 10,
		marginVertical: 5,
	},
	international: {
		flex: 1,
		marginVertical: 15,
		marginHorizontal: 5,
	},
	internat: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderColor: "gray",
	},
	animation: {
		flexDirection: "row",
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	boxStyle: {
		flexDirection: "row",
		alignItems: "center",
	},
	section3Box: {
		flexDirection: "row",
		alignItems: "center",
	},
	boxView1: {
		flexDirection: "column",
		justifyContent: "space-between",
	},
	boxText1: {
		fontSize: 16,
		marginVertical: 5,
	},
	boxTextmin: {},
	columnText: {
		fontSize: 12,
		width: 200,
		marginVertical: 8,
	},
	boxText2: {
		fontSize: 12,
		marginVertical: 8,
	},
	flexrowView: {
		flexDirection: "row",
		width: 150,
	},
	flexrowText: {
		color: COLORS.gray,
	},
});

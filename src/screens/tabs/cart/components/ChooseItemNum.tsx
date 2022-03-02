import {
	Choice2Icon,
	ChoiceIcon,
	CrashIcon,
	HeartIcon,
	MinusIcon,
	PlusCounterIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export let imageURL =
	"https://images.yaoota.com/ufh-pKI-D0-pSxC9M0Jz_ge7w18=/trim/yaootaweb-production-ke/media/crawledproductimages/24490bca2258a9b1940fc4ebd62981425a0c9382.jpg";

export let ProductsData = {
	name: "Lorem Ipsum is simply dummy text",
	price: "144 240 00 ",
};

export default function ChooseItemNum() {
	const [hidePass, setHidePass] = useState(true);
	return (
		<View style={styles.container}>
			<View style={styles.containerSection}>
				<View style={{ marginRight: 5, marginTop: 30 }}>
					<TouchableOpacity
						style={styles.eyes}
						onPress={() => setHidePass(!hidePass)}
					>
						{hidePass ? <ChoiceIcon /> : <Choice2Icon />}
					</TouchableOpacity>
				</View>
				<Image
					style={styles.leftImage}
					resizeMode="center"
					source={{ uri: imageURL }}
				/>
			</View>
			<View style={styles.textBox}>
				<Text style={styles.headerTxt}>{ProductsData.name}</Text>
				<Text> Белый,XXL</Text>
				<View style={styles.rowTxt}>
					<Text style={styles.blueTxt}>140 000 Cyм</Text>
				</View>
				<View style={styles.counter}>
					<TouchableOpacity>
						<View style={styles.minus}>
							<MinusIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>1 шт</Text>
					</View>
					<TouchableOpacity>
						<View style={styles.plus}>
							<PlusCounterIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity>
				<View style={styles.iconBox}>
					<CrashIcon fill={COLORS.gray} />
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	leftImage: {
		width: 90,
		height: 120,
		borderRadius: 8,
	},

	textBox: {
		flexShrink: 1,
		paddingHorizontal: 10,
	},

	headerTxt: {
		fontSize: 14,
		letterSpacing: 0.5,
		fontWeight: "700",
		color: COLORS.defaultBlack,
	},

	itemTxt: {
		fontSize: 11,
		color: COLORS.defaultBlack,
	},

	rowTxt: {
		alignItems: "flex-start",
		// flexDirection: "row",
		marginVertical: 5,
	},

	blueTxt: {
		fontSize: 15,
		fontWeight: "700",
		color: COLORS.red,
	},

	lineThrough: {
		fontSize: 12,
		textDecorationLine: "line-through",
	},

	counter: {
		flexDirection: "row",
	},

	iconBox: {
		paddingVertical: 5,
		justifyContent: "flex-start",
	},

	item: {
		color: COLORS.white,
	},

	minus: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: COLORS.orange,
	},

	plus: {
		padding: 10,
		paddingHorizontal: 10,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: COLORS.lightBlack,
	},

	topBottom: {
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
	},
	containerSection: {
		flexDirection: "row",
	},
	iconView: {
		marginVertical: 10,
	},
});

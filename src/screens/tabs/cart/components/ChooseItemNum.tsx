import {
	Choice2Icon,
	ChoiceIcon,
	CrashIcon,
	MinusIcon,
	PlusCounterIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export let imageURL =
	"https://images.yaoota.com/ufh-pKI-D0-pSxC9M0Jz_ge7w18=/trim/yaootaweb-production-ke/media/crawledproductimages/24490bca2258a9b1940fc4ebd62981425a0c9382.jpg";

export let ProductsData = {
	name: "ADIDAS кроссовки",
	price: "144 240 00 ",
};

export default function ChooseItemNum() {
	const [hidePass, setHidePass] = useState(false);
	const [number, setNumber] = useState(0);
	function increment() {
		setNumber(number + 1);
	}
	function decrement() {
		if (number > 0) setNumber(number - 1);
	}

	return (
		<View style={styles.container}>
			<View style={styles.containerSection}>
				<TouchableOpacity
					style={
						hidePass ? styles.checkedActiveBtn : styles.checkedBtn
					}
					onPress={() => setHidePass(!hidePass)}
				>
					{hidePass ? <ChoiceIcon /> : <Choice2Icon />}
				</TouchableOpacity>
				<Image style={styles.leftImage} source={{ uri: imageURL }} />
			</View>
			<View style={styles.textBox}>
				<Text style={styles.headerTxt}>{ProductsData.name}</Text>
				<Text style={{ marginRight: 5, fontSize: 12, marginTop: 2 }}>
					Белый,XXL
				</Text>
				<View style={styles.rowTxt}>
					<Text style={styles.blueTxt}>140 000 Cyм</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity>
					<View style={styles.iconBox}>
						<CrashIcon fill={COLORS.gray} />
					</View>
				</TouchableOpacity>
				<View style={styles.counter}>
					<TouchableOpacity onPress={decrement} style={styles.minus}>
						<MinusIcon fill={COLORS.white} />
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>{number} шт</Text>
					</View>
					<TouchableOpacity onPress={increment} style={styles.plus}>
						<PlusCounterIcon fill={COLORS.white} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingHorizontal: 10,
	},

	leftImage: {
		width: 90,
		height: 90,
		borderRadius: 8,
	},

	textBox: {
		flexShrink: 1,
		paddingHorizontal: 5,
		marginRight: 15,
	},

	headerTxt: {
		fontSize: 10,
		// letterSpacing: 0.5,
		fontWeight: "600",
		color: COLORS.defaultBlack,
		textTransform: "uppercase",
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
		fontSize: 14,
		fontWeight: "700",
		color: COLORS.red,
	},

	lineThrough: {
		fontSize: 12,
		textDecorationLine: "line-through",
	},

	counter: {
		flexDirection: "row",
		marginTop: 40,
		marginLeft: 10,
	},

	iconBox: {
		paddingVertical: 5,
		alignItems: "flex-end",
	},

	item: {
		color: COLORS.white,
	},

	minus: {
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: COLORS.orange,
	},

	plus: {
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: COLORS.lightBlack,
		alignItems: "center",
	},

	topBottom: {
		paddingHorizontal: 5,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
	},
	containerSection: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconView: {
		marginVertical: 10,
	},

	checkedBtn: {
		marginRight: 10,
	},

	checkedActiveBtn: {
		marginRight: 10,
		backgroundColor: COLORS.darkBlue2,
	},
});

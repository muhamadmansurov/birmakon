import {
	RightArrowIcon,
	SaveIconMessage,
	TelegramIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useRef, useState } from "react";
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./style";

const MessageView = () => {
	const [sendingMsg, setSendingMsg] = useState("");
	const [messages, setMessages] = useState([
		{ content: STRINGS.myMessages, myMsg: false },
	]);

	const sendMessage = () => {
		if (sendingMsg.length == 0) {
			return;
		} else {
			setSendingMsg("");
			setMessages([...messages, { content: sendingMsg, myMsg: true }]);
		}

		ref.current?.scrollToEnd();
	};

	const ref = useRef<FlatList<any>>(null);

	const [activeIndex, setIsActive] = useState(0);

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myMessages} style={styles.header} />
			<ScrollView>
				<View style={styles.headerSection}>
					<Text style={styles.headerSectionText}>Мои сообщения</Text>
				</View>
				<View style={styles.headerSectionBox}>
					<TouchableOpacity
						style={
							activeIndex === 1
								? styles.headerActiveBox
								: styles.headerIsActive
						}
						onPress={() => setIsActive(1)}
					>
						<Text
							style={
								activeIndex === 1
									? styles.headerBoxText
									: styles.headerIsActiveText
							}
						>
							По Поставщики
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							activeIndex === 2
								? styles.headerActiveBox1
								: styles.headerIsActiveBox1
						}
						onPress={() => setIsActive(2)}
					>
						<Text
							style={
								activeIndex === 2
									? styles.headerBoxText
									: styles.headerIsActiveText
							}
						>
							По Товары
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.headerSectionBox}>
					<TouchableOpacity
						style={
							activeIndex === 3
								? styles.headerActiveBox
								: styles.headerIsActive
						}
						onPress={() => setIsActive(3)}
					>
						<Text
							style={
								activeIndex === 3
									? styles.headerBoxText
									: styles.headerIsActiveText
							}
						>
							По дорогу
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							activeIndex === 4
								? styles.headerActiveBox1
								: styles.headerIsActiveBox1
						}
						onPress={() => setIsActive(4)}
					>
						<Text
							style={
								activeIndex === 4
									? styles.headerBoxText
									: styles.headerIsActiveText
							}
						>
							Поддержка
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.boxsView}>
						<TouchableOpacity style={styles.rightArrow}>
							<RightArrowIcon fill={COLORS.black} />
							{/* <Text>sadas</Text> */}
						</TouchableOpacity>
						<View style={styles.productsView}>
							<View style={styles.boxs} />
							<Text style={styles.productsText}>Товар 1</Text>
						</View>
						<View style={styles.productsView}>
							<View style={styles.boxs} />
							<Text style={styles.productsText}>Товар 2</Text>
						</View>
						<View style={styles.productsView}>
							<View style={styles.boxs} />
							<Text style={styles.productsText}>Товар 3</Text>
						</View>
						<View style={styles.productsView}>
							<View style={styles.boxs} />
							<Text style={styles.productsText}>Товар 4</Text>
						</View>
					</View>
				</ScrollView>

				<View style={styles.messageBox}>
					<View style={styles.top}>
						<Text style={styles.topText}>Чат поддержки</Text>
					</View>
					<View style={styles.inner}>
						<ScrollView>
							<FlatList
								ref={ref}
								data={messages}
								renderItem={({ item, index }) =>
									item.myMsg ? (
										<View key={index} style={styles.myBox}>
											<Text style={styles.myMsg}>
												{item.content}
											</Text>
										</View>
									) : (
										<View style={styles.innerBox}>
											<Text style={styles.innerText}>
												{STRINGS.comment}
											</Text>
										</View>
									)
								}
							/>
						</ScrollView>
					</View>
					<View style={styles.texting}>
						<View style={styles.textingBox}>
							<SaveIconMessage
								fill={COLORS.gray}
								style={{ marginTop: 1, marginRight: 5 }}
							/>
							<TextInput
								placeholder={STRINGS.yourMessage}
								value={sendingMsg}
								style={styles.input}
								placeholderTextColor={COLORS.gray}
								onChangeText={(text) => setSendingMsg(text)}
							/>
						</View>
						<TelegramIcon
							hitSlop={{
								top: 10,
								bottom: 10,
								left: 10,
								right: 10,
							}}
							fill={COLORS.gray}
							style={styles.tgicon}
							onPress={sendMessage}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default MessageView;

import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { productsData } from "@novomarkt/screens/tabs/home/components/ProductsList";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import OrderItem from "./components/OrderItem";
import { styles } from "./style";
import StatusBar from "./components/StatusBar";

const OrderView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar />
				<FlatList
					data={productsData}
					renderItem={OrderItem}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={() => (
						<View style={styles.row}>
							<View>
								<Text style={styles.headerText}>Заказ №23</Text>
								<View style={styles.salesman}>
									<Text>Продавец:</Text>
									<Text>ООО "ПРАЙД"</Text>
								</View>
							</View>
							<Text style={styles.salesman}>10.10.2021</Text>
						</View>
					)}
				/>
				<View style={styles.finish}>
					<Text style={styles.finishTexto}>Общая сумма:</Text>
					<Text style={styles.finishText}> 2070 сум</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default OrderView;

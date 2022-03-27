import { DownIcon, LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const CourierDelivery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isShowed, setIsShowed] = useState(false);
  const enableShow = () => {
    setIsShowed(true);
  };
  const disableShow = () => {
    setIsShowed(false);
  };
  return (
    <View style={styles.container}>
      <BackHeader name={STRINGS.DeliveryMethod} />
      <View style={{ marginBottom: 450 }}>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={
              activeIndex === 1
                ? styles.buttonIsActive
                : styles.buttonActive
            }
            onPress={() => setActiveIndex(1)}
          >
            <Text>{STRINGS.PointIssue}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeIndex === 2
                ? styles.buttonIsActive
                : styles.buttonActive
            }
            onPress={() => setActiveIndex(2)}
          >
            <Text>{STRINGS.withCourier}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.dropDownBtn}
            activeOpacity={0.7}
          >
            <Text style={{ marginLeft: 45 }}>Россия</Text>
            <DownIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropDownBtn}
            activeOpacity={0.7}
          >
            <Text style={{ marginLeft: 45 }}>Москва</Text>
            <DownIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            paddingHorizontal: 65,
            paddingVertical: 19,
            alignItems: "center",
            marginRight: 5,
            backgroundColor: COLORS.darkBlue2,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 10,
              fontWeight: "500",
              textTransform: "uppercase",
              width: 200,
              marginLeft: 40,
            }}
          >
            выбрать картинку на карту
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingHorizontal: 35,
            paddingVertical: 19,
            alignItems: "center",
            // marginRight: 5,
            backgroundColor: COLORS.darkBlue2,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 10,
              fontWeight: "500",
              textTransform: "uppercase",
              // marginLeft: 40,
            }}
          >
            сохранить
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 20,
            alignItems: "center",
          }}
        >
          <Text>sadasd</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default CourierDelivery;

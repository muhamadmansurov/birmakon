import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  buttonActive: {
    paddingVertical: 14,
    backgroundColor: COLORS.lightgray,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginLeft: 10
  },
  buttonIsActive: {
    paddingVertical: 14,
    backgroundColor: COLORS.lightgray,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginLeft: 10
  },
  buttonsView: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingRight: 5
  },
  dropDownBtn: {
    paddingVertical: 11,
    backgroundColor: COLORS.lightgray,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
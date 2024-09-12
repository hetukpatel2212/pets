import { StyleSheet } from "react-native";
import Color from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  bannerView: {
    height: "25%",
    borderBottomRightRadius: 50,
  },
  headerView: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 18,
  },
  searchView: {
    // width: "70%",
    position: "absolute",
    top: 120,
  },
  searchDetails: {
    position: "absolute",
    top: 25,
    left: 20,
  },
  welcomeText: {
    color: Color.black,
    fontSize: 18,
    fontWeight: "500",
  },
  searchText: {
    color: Color.black,
    fontSize: 22,
    fontWeight: "bold",
  },
  seachIconImg: {
    position: "absolute",
    right: 0,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: Color.white,
    // paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 15,
    marginTop: 10,
  },
  contentViewTitle: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentDetails: {
    marginBottom: 500,
  },
  contentViewTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.black,
  },
  mainContainer: {
    paddingHorizontal: 18,
    marginTop: 125,
    // height: '100%',
  },
  homeBtnView: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 15,
  },
  cateBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
  },
  cateBtnText: {
    color: Color.black,
    fontSize: 15,
    fontWeight: "500",
  },
  cateBtnIcon: {
    width: 25,
    height: 25,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  popularView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 500,
    marginTop: 15,
  },
  popularBtn1: {
    backgroundColor: "#EDFFCE",
    width: "48%",
    height: 150,
    borderRadius: 20,
    // height:"100%"
  },
  popularBtn2: {
    backgroundColor: "#CEFFF3",
    width: "48%",
    height: 150,
    borderRadius: 20,
    // height:"100%"
  },
  popularBtnImg: {
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  popularText: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: Color.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  popularBackground: {
    position: "absolute",
    right: 0,
  },
  recommendedView: {
    marginTop: 15,
    marginBottom: 500,
  },
  recommendedBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F4FF",
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
  },
  recommendedBoxText: {
    width: "40%",
    color: Color.black,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  recommendedBoxBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap:5,
    width: 200,
  },
  recommendedBtn: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: "#995BFF",
    borderRadius: 15,
  },
  date: {
    color: Color.black,
    fontSize: 12,
    fontWeight: "400",
  },
  frameTop: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  frameBottom: {
    position: "absolute",
    bottom: 0,
  },
  exploreText: {
    color: Color.white,
    fontSize: 12,
    fontWeight:"500"
  }
});

export default styles;

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import {
  BELL,
  DOTS,
  FRAME,
  FRAMEBOTTOM,
  FRAMETOP,
  HOMEBTN1,
  HOMEBTN2,
  HOMEBTN3,
  HOMEBTN4,
  HOMEBTN5,
  HOMEBTN6,
  LOGOPETS,
  MENU,
  MENUPETS,
  POPULAR1,
  POPULAR2,
  SEARCH,
  SEARCHBACKGROUND,
  SEARCHIMG,
} from "../../Assets/Images/Index";
import { TextInput } from "react-native-gesture-handler";
import Bottom from "../../Components/Bottom/Index";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <LinearGradient
        colors={["#A57BFF", "#C6ACFF", "#DECEFF"]}
        style={styles.bannerView}
      >
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image style={styles.headerIcon} source={MENUPETS} />
          </TouchableOpacity>
          <View style={styles.bellIconView}>
            <Image style={styles.headerIcon} source={LOGOPETS} />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.searchView}>
        <Image style={styles.searchBackground} source={SEARCHBACKGROUND} />
        <Image style={styles.seachIconImg} source={SEARCHIMG} />
        <View style={styles.searchDetails}>
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.searchText}>Find Your</Text>
            <Text style={styles.searchText}>Dream Sector!</Text>
          </View>
          <View style={styles.searchBox}>
            <Image source={SEARCH} />
            <TextInput placeholder="What are you looking for?" placeholderTextColor="#FF6694" />
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentViewTitle}>
            <Text style={styles.contentViewTitleText}>Service Providers</Text>
            <Image style={styles.dotsContentIcon} source={DOTS} />
          </View>
          <View style={styles.homeBtnView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#FCFDFF", "#E3EEFF", "#D0E3FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#D0E3FF" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN1} />
                <Text style={styles.cateBtnText}>Construction</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#FFFEFB", "#FFF2DA", "#FFEBC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#FFEBC3" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN2} />
                <Text style={styles.cateBtnText}>Entertainment</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#FEECF1", "#FFCEE7", "#FFB5DF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#FFB5DF" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN3} />
                <Text style={styles.cateBtnText}>Pet Care</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#F9FFFE", "#DBFDFA", "#C4FCF7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#C4FCF7" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN4} />
                <Text style={styles.cateBtnText}>Home Care</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#FFF8F5", "#FFE2D3", "#FFCCB1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#FFCCB1" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN5} />
                <Text style={styles.cateBtnText}>Events</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pets");
              }}
            >
              <LinearGradient
                colors={["#FBFBFF", "#E4E4FF", "#D1D1FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.cateBtn, { borderColor: "#D1D1FF" }]}
              >
                <Image style={styles.cateBtnIcon} source={HOMEBTN6} />
                <Text style={styles.cateBtnText}>Healthcare</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.contentViewTitle}>
            <Text style={styles.contentViewTitleText}>Popular Sectors</Text>
            <Image style={styles.dotsContentIcon} source={DOTS} />
          </View>
          <View style={styles.popularView}>
            <TouchableOpacity style={styles.popularBtn1}>
              <Image style={styles.popularBackground} source={SEARCHIMG} />
              <Text style={styles.popularText}>Home Services</Text>
              <Image style={styles.popularBtnImg} source={POPULAR1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.popularBtn2}>
              <Image style={styles.popularBackground} source={SEARCHIMG} />

              <Text style={styles.popularText}>Healthcare</Text>
              <Image style={styles.popularBtnImg} source={POPULAR2} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentViewTitle}>
            <Text style={styles.contentViewTitleText}>Recommended for you</Text>
            <Image style={styles.dotsContentIcon} source={DOTS} />
          </View>
          <View style={styles.recommendedView}>
            <View style={styles.recommendedBox}>
              <Image style={styles.frameTop} source={FRAMETOP} />
              <Image style={styles.frameBottom} source={FRAMEBOTTOM} />
              <Image source={FRAME} />
              <View>
                <Text style={styles.recommendedBoxText}>
                  Now share the Construction Sectors with your anyone and can
                  save it as bookmark
                </Text>
                <View style={styles.recommendedBoxBtn}>
                  <Text style={styles.date}>Updated | 06:30 AM</Text>
                  <TouchableOpacity style={styles.recommendedBtn}>
                    <Text style={styles.exploreText}>Explore</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.recommendedBox}>
              <Image style={styles.frameTop} source={FRAMETOP} />
              <Image style={styles.frameBottom} source={FRAMEBOTTOM} />
              <Image source={FRAME} />
              <View>
                <Text style={styles.recommendedBoxText}>
                  Now share the Construction Sectors with your anyone and can
                  save it as bookmark
                </Text>
                <View style={styles.recommendedBoxBtn}>
                  <Text style={styles.date}>Updated | 06:30 AM</Text>
                  <TouchableOpacity style={styles.recommendedBtn}>
                    <Text style={styles.exploreText}>Explore</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.recommendedBox}>
              <Image style={styles.frameTop} source={FRAMETOP} />
              <Image style={styles.frameBottom} source={FRAMEBOTTOM} />
              <Image source={FRAME} />
              <View>
                <Text style={styles.recommendedBoxText}>
                  Now share the Construction Sectors with your anyone and can
                  save it as bookmark
                </Text>
                <View style={styles.recommendedBoxBtn}>
                  <Text style={styles.date}>Updated | 06:30 AM</Text>
                  <TouchableOpacity style={styles.recommendedBtn}>
                    <Text style={styles.exploreText}>Explore</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.recommendedBox}>
              <Image style={styles.frameTop} source={FRAMETOP} />
              <Image style={styles.frameBottom} source={FRAMEBOTTOM} />
              <Image source={FRAME} />
              <View>
                <Text style={styles.recommendedBoxText}>
                  Now share the Construction Sectors with your anyone and can
                  save it as bookmark
                </Text>
                <View style={styles.recommendedBoxBtn}>
                  <Text style={styles.date}>Updated | 06:30 AM</Text>
                  <TouchableOpacity style={styles.recommendedBtn}>
                    <Text style={styles.exploreText}>Explore</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <Bottom />
      </View>
    </View>
  );
};

export default Home;

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  BACKGROUND,
  BELL,
  BOOK,
  book,
  CIRCLE,
  DOTS,
  EDIT,
  FILTER,
  LOGO,
  MENU,
  PERSON,
  PET1,
  PET2,
  PET3,
  PETLEG1,
  PETLEG2,
  PROFILE,
  PROVIDERBOTTOM,
  PROVIDERTOP,
  RATINGICON1,
  RATINGICON2,
  RATINGIMG1,
  RATINGIMG2,
  SEARCH,
  SERIVCES1,
  SERIVCES2,
  SERIVCES3,
  SERIVCES4,
  SERIVCES5,
  SERVICESCIRCLE,
  VECTOR,
} from "../../Assets/Images/Index";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import Bottom from "../../Components/Bottom/Index";
const { width: viewportWidth } = Dimensions.get("window");

const data = [
  {
    id: "1",
    bannerText: "All-New Groomers in Town!",
    discount: "-20",
  },
  {
    id: "2",
    bannerText: "Another Exciting Banner!",
    discount: "-40",
  },
  {
    id: "3",
    bannerText: "All-New Groomers in Town!",
    discount: "-60",
  },
];
const Pets = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground source={BACKGROUND} style={styles.background}>
        <View style={styles.mainContainer}>
          <View style={styles.headerView}>
            <TouchableOpacity>
              <Image style={styles.headerIcon} source={MENU} />
            </TouchableOpacity>
            <Image style={styles.headerIcon} source={LOGO} />
            <View style={styles.bellIconView}>
              <Image style={styles.headerIcon} source={BELL} />
            </View>
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeMain}>Hello,</Text>
            <Text style={styles.welcomeSmall}>Fancy for a wash today!</Text>
            <Image style={styles.petLegIcon1} source={PETLEG1} />
            <Image style={styles.petLegIcon2} source={PETLEG2} />
          </View>

          <View style={styles.contentView}>
            <View style={styles.petsView}>
              <Image style={styles.pet1Icon} source={PET1} />
              <Image style={styles.pet2Icon} source={PET2} />
              <Image style={styles.pet3Icon} source={PET3} />
            </View>
            <ScrollView
              style={{ width: "100%", marginTop: 20 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.searchView}>
                <View style={styles.searchIconText}>
                  <Image style={styles.searchIcon} source={SEARCH} />
                  <TextInput
                    style={styles.TextInputBox}
                    placeholder="What are you looking for?"
                    placeholderTextColor="#FF6694"
                  />
                </View>
                <Image style={styles.searchIcon} source={FILTER} />
              </View>

              <View style={styles.contentDetails}>
                <Swiper
                  style={styles.wrapper}
                  showsButtons={false}
                  autoplay
                  autoplayTimeout={3}
                  loop
                  dotStyle={styles.inactiveDot}
                  activeDotStyle={styles.activeDot}
                >
                  {data.map((item) => (
                    <LinearGradient
                      key={item.id}
                      colors={["#EB9FC0", "#F5AAB8", "#FEB4B2"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.bannerView}
                    >
                      <Image style={styles.bannerCircle} source={CIRCLE} />
                      <View>
                        <Image style={styles.bookIcon} source={BOOK} />
                        <Text style={styles.bannerDiscount}>
                          {item.discount}
                        </Text>
                      </View>
                      <Text style={styles.bannerText}>{item.bannerText}</Text>
                      <Image style={styles.vectorIcon} source={VECTOR} />
                      <Image source={PERSON} />
                    </LinearGradient>
                  ))}
                </Swiper>

                <View style={styles.contentViewTitle}>
                  <Text style={styles.contentViewTitleText}>
                    Popular Services
                  </Text>
                  <Image style={styles.dotsContentIcon} source={DOTS} />
                </View>
                <View style={styles.servicesView}>
                  <View style={styles.servicesViewBox}>
                    <View style={styles.servicesBox1}>
                      <Image style={styles.servicesCricleTop} source={CIRCLE} />
                      <Image
                        style={styles.servicesCricleBottom}
                        source={CIRCLE}
                      />
                      <Image style={styles.servicesImg1} source={SERIVCES1} />
                      <Text style={styles.servicesBoxText}>Pet Grooming</Text>
                    </View>
                    <View style={styles.servicesBox2}>
                      <Image
                        style={styles.servicesCricleTopDating}
                        source={SERVICESCIRCLE}
                      />
                      <Image
                        style={styles.servicesCricleBottomDating}
                        source={SERVICESCIRCLE}
                      />
                      <Image style={styles.servicesImg2} source={SERIVCES2} />
                      <Text style={styles.servicesBoxText}>Pet Dating</Text>
                    </View>
                    <View style={styles.servicesBox1}>
                      <Image style={styles.servicesCricleTop} source={CIRCLE} />
                      <Image
                        style={styles.servicesCricleBottom}
                        source={CIRCLE}
                      />
                      <Image style={styles.servicesImg3} source={SERIVCES3} />
                      <Text style={styles.servicesBoxText}>Pet Grooming</Text>
                    </View>
                  </View>
                  <View style={styles.servicesViewBox}>
                    <View style={styles.servicesBox5}>
                      <Image
                        style={styles.servicesCricleTopWalking}
                        source={CIRCLE}
                      />
                      <Image
                        style={styles.servicesCricleBottomWalking}
                        source={CIRCLE}
                      />
                      <Image style={styles.servicesImg5} source={SERIVCES5} />
                      <Text style={styles.servicesBoxText}>Pet Walking</Text>
                    </View>
                    <View style={styles.servicesBox1}>
                      <Image style={styles.servicesCricleTop} source={CIRCLE} />
                      <Image
                        style={styles.servicesCricleBottom}
                        source={CIRCLE}
                      />
                      <Image style={styles.servicesImg4} source={SERIVCES4} />
                      <Text style={styles.servicesBoxText}>Pet Grooming</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentViewTitle}>
                  <Text style={styles.contentViewTitleText}>
                    Service Providers
                  </Text>
                  <Image style={styles.dotsContentIcon} source={DOTS} />
                </View>
                <View style={styles.providerView}>
                  <View style={styles.providerBox}>
                    <Image style={styles.providerImgTop} source={PROVIDERTOP} />
                    <Image
                      style={styles.providerImgBottom}
                      source={PROVIDERBOTTOM}
                    />
                    <Image style={styles.profileIcon} source={PROFILE} />
                    <View style={styles.providerDetails}>
                      <Text style={styles.providerName}>Rohit Singhania</Text>
                      <Text style={styles.providerDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                      <TouchableOpacity style={styles.providerBtn}>
                        <Text style={styles.providerBtnText}>Know More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.providerBox}>
                    <Image style={styles.providerImgTop} source={PROVIDERTOP} />
                    <Image
                      style={styles.providerImgBottom}
                      source={PROVIDERBOTTOM}
                    />
                    <Image style={styles.profileIcon} source={PROFILE} />
                    <View style={styles.providerDetails}>
                      <Text style={styles.providerName}>Rohit Singhania</Text>
                      <Text style={styles.providerDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                      <TouchableOpacity style={styles.providerBtn}>
                        <Text style={styles.providerBtnText}>Know More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.providerBox}>
                    <Image style={styles.providerImgTop} source={PROVIDERTOP} />
                    <Image
                      style={styles.providerImgBottom}
                      source={PROVIDERBOTTOM}
                    />
                    <Image style={styles.profileIcon} source={PROFILE} />
                    <View style={styles.providerDetails}>
                      <Text style={styles.providerName}>Rohit Singhania</Text>
                      <Text style={styles.providerDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                      <TouchableOpacity style={styles.providerBtn}>
                        <Text style={styles.providerBtnText}>Know More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.contentViewTitle}>
                  <Text style={styles.contentViewTitleText}>Ratings</Text>
                  <Image style={styles.dotsContentIcon} source={DOTS} />
                </View>
                <View style={styles.contentViewTitle}>
                  <Text
                    style={[styles.contentViewTitleText, { color: "#FF6694" }]}
                  >
                    13 Reviews
                  </Text>
                  <View style={styles.editView}>
                    <Text
                      style={[
                        styles.contentViewTitleText,
                        { color: "#FF6694" },
                      ]}
                    >
                      Write a Review
                    </Text>
                    <Image source={EDIT} />
                  </View>
                </View>
                <View style={styles.ratingView}>
                  <View style={styles.ratingBox}>
                    <View style={styles.ratingDetails}>
                      <Text style={styles.cusName}>Pooja Jain</Text>
                      <View style={styles.ratingIconView}>
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON2} />
                      </View>
                      <Text style={styles.ratingDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                    </View>
                    <Image style={styles.ratingImg} source={RATINGIMG1} />
                  </View>
                  <View style={styles.ratingBox}>
                    <View style={styles.ratingDetails}>
                      <Text style={styles.cusName}>Pooja Jain</Text>
                      <View style={styles.ratingIconView}>
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON2} />
                      </View>
                      <Text style={styles.ratingDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                    </View>
                    <Image style={styles.ratingImg} source={RATINGIMG2} />
                  </View>
                  <View style={styles.ratingBox}>
                    <View style={styles.ratingDetails}>
                      <Text style={styles.cusName}>Pooja Jain</Text>
                      <View style={styles.ratingIconView}>
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON2} />
                      </View>
                      <Text style={styles.ratingDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                    </View>
                    <Image style={styles.ratingImg} source={RATINGIMG1} />
                  </View>
                  <View style={styles.ratingBox}>
                    <View style={styles.ratingDetails}>
                      <Text style={styles.cusName}>Pooja Jain</Text>
                      <View style={styles.ratingIconView}>
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON1} />
                        <Image source={RATINGICON2} />
                      </View>
                      <Text style={styles.ratingDesc}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo
                        ipsum.
                      </Text>
                    </View>
                    <Image style={styles.ratingImg} source={RATINGIMG2} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <Bottom />
      </View>
    </View>
  );
};

export default Pets;

import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 70,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 18,
  },
  bellIconView: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDC2C1',
    borderRadius: 10,
  },
  welcomeView: {
    paddingHorizontal: 18,
    // backgroundColor:"red",
    // height: '15%',
  },
  welcomeMain: {
    color: Color.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeSmall: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '500',
  },
  contentView: {
    backgroundColor: Color.white,
    height: '100%',
    marginTop: 100,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  petsView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    // bottom:-10,
    top: -75,
    right: 20,
  },
  petLegIcon1: {
    position: 'absolute',
    left: 25,
    top: 60,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  petLegIcon2: {
    position: 'absolute',
    right: 0,
    top: 15,
    width: 35,
    height: 35,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  searchView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFEDF2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 25,
  },
  searchIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  TextInputBox: {
    fontSize: 16,
    fontWeight: '500',
  },
  bannerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 150, //
  },
  bannerCircle: {
    position: 'absolute',
    left: -40,
  },
  vectorIcon: {
    position: 'absolute',
    right: 0,
  },
  bannerText: {
    color: Color.black,
    fontSize: 18,
    fontWeight: 'bold',
    width: '24%',
    lineHeight: 25,
  },
  bannerDiscount: {
    marginLeft: 20,
    fontSize: 16,
    color: Color.black,
    fontWeight: '500',
    marginTop: 5,
  },
  contentViewTitle: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentDetails: {
    marginBottom: 500,
  },
  wrapper: {
    height: 120,
    
  },
  contentViewTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.black,
  },
  servicesView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servicesViewBox: {
    width: '48%',
  },
  servicesBox1: {
    backgroundColor: Color.background,
    alignItems: 'center',
    borderRadius: 30,
    height: 210,
    overflow: 'hidden',
    marginBottom: 15,
  },
  servicesBox2: {
    backgroundColor: Color.background,
    alignItems: 'center',
    borderRadius: 30,
    height: 160,
    overflow: 'hidden',
    marginBottom: 15,
  },
  servicesBox3: {
    backgroundColor: Color.background,
    alignItems: 'center',
    borderRadius: 30,
    height: 195,
    overflow: 'hidden',
    marginBottom: 15,
  },
  servicesBox5: {
    backgroundColor: Color.background,
    alignItems: 'center',
    borderRadius: 30,
    height: 160,
    overflow: 'hidden',
    marginBottom: 15,
  },
  servicesCricleTop: {
    position: 'absolute',
    top: -50,
    left: -60,
  },
  servicesCricleBottom: {
    position: 'absolute',
    bottom: -80,
    right: -70,
  },
  servicesCricleTopDating: {
    position: 'absolute',
    top: -30,
    right: -20,
    width: 75,
    height: 75,
  },
  servicesCricleBottomDating: {
    position: 'absolute',
    bottom: -30,
    left: -10,
    width: 100,
    height: 100,
  },
  servicesCricleTopWalking: {
    position: 'absolute',
    top: -80,
    right: -60,
  },
  servicesCricleBottomWalking: {
    position: 'absolute',
    bottom: -30,
    left: -20,
    width: 70,
    height: 70,
  },
  servicesImg1: {
    position: 'absolute',
    right: 0,
    top: 35,
  },
  servicesImg2: {
    position: 'absolute',
    right: 0,
    top: 15,
    // width:155,
    height: 100,
  },
  servicesImg3: {
    position: 'absolute',
    left: 0,
    top: 50,
  },
  servicesImg4: {
    position: 'absolute',
    // left: 0,
    top: 30,
  },
  servicesImg5: {
    position: 'absolute',
    left: 0,
    top: 20,
  },

  servicesBoxText: {
    color: Color.black,
    fontSize: 20,
    fontWeight: '500',
    position: 'absolute',
    bottom: 20,
  },
  providerView: {
    marginTop: 15,
  },
  providerBox: {
    backgroundColor: Color.background,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingVertical: 14,
    paddingHorizontal: 18,
    overflow: 'hidden',
    marginBottom: 15,
  },
  providerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color:Color.black
  },
  providerDesc: {
    fontSize: 10,
    width: '80%',
    fontWeight: '500',
    marginTop: 4,
    color:Color.black
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  providerBtn: {
    backgroundColor: '#CF76DD',
    width: '30%',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 5,
  },
  providerBtnText: {
    color: Color.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  providerImgTop: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  providerImgBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  editView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingView: {
    marginTop:15
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#FFCCD2',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    marginBottom:15
  },
  ratingIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingDetails: {
    padding: 10,
  },
  ratingDesc: {
    width: 205,
    flexWrap: 'wrap',
    fontSize: 12,
    color:Color.black
  },
  cusName: {
    color: Color.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  inactiveDot: {
    marginBottom:-25
  },
  activeDot: {
    marginBottom: -25,
    backgroundColor:"#FF6694"
  },
});

export default styles;

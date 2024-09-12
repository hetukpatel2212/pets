import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2}, // Creates shadow at the top
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // Android Shadow (Elevation)
    elevation: 5,
  },
  homeView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFE7EA',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
  },
  homeText: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '500',
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;

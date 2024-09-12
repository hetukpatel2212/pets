import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {
  BOTTOMHOME,
  BOTTOMPLAY,
  BOTTOMSEARCH,
  BOTTOMUSER,
} from '../../Assets/Images/Index';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeView}>
        <Image style={styles.bottomIcon} source={BOTTOMHOME} />
        <Text style={styles.homeText}>Home</Text>
      </View>
      <Image style={styles.bottomIcon} source={BOTTOMSEARCH} />
      <Image style={styles.bottomIcon} source={BOTTOMPLAY} />
      <Image style={styles.bottomIcon} source={BOTTOMUSER} />
    </View>
  );
};

export default Bottom;

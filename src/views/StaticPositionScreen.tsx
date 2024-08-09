import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {CONSTANT_STRING} from '../libs/Constant';

const StaticPositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{CONSTANT_STRING.YOGA3}</Text>
      <View style={styles.staticContainer}>
        <Text>{CONSTANT_STRING.STATIC_POS}</Text>
      </View>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
};

export default StaticPositionScreen;

interface IStyle {
  container: ViewStyle;
  header: TextStyle;
  box1: ViewStyle;
  box2: ViewStyle;
  staticContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  staticContainer: {
    position: 'static',
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    left: 300,
  },
});

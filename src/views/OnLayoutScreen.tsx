import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import { CONSTANT_STRING } from '../libs/Constant';
interface ILayout {
  updatestate1: () => void;
  updatestate2: () => void;
  updatestate3: () => void;
}

const OnLayoutScreen = ({
  updatestate1,
  updatestate2,
  updatestate3,
}: ILayout) => {
  return (
    <View style={styles.container}>
      <View onLayout={updatestate1} />
      <Text>{CONSTANT_STRING.BADGED}</Text>
      <View onLayout={updatestate2} />
      <View onLayout={updatestate3} />
    </View>
  );
};

export default OnLayoutScreen;

const styles = StyleSheet.create<{container:ViewStyle}>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

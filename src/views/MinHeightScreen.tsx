import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

const MinHeightScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.child} />
        <View style={styles.child} />
      </View>
    </View>
  );
};

export default MinHeightScreen;


interface IStyle{
  container:ViewStyle;
  child:ViewStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    minHeight: 200,
    backgroundColor: 'blue',
    rowGap: 30,
  },
  child: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
});

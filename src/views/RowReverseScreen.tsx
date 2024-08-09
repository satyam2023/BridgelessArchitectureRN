import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const RowReverseScreen = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.childContainer}>
        <View style={styles.grandChildConatiner}>
          <View style={styles.greatGrandChild} />
        </View>
      </View>
    </View>
  );
};

export default RowReverseScreen;

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    margin: 10,
    width: '90%',
    height: '50%',
  },
  childContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: 'blue',
    flex: 1,
    marginStart: 100,
  },
  grandChildConatiner: {
    backgroundColor: 'green',
    flexDirection: 'row-reverse',
    height: '50%',
    flex: 1,
    marginStart: 50,
  },
  greatGrandChild: {
    backgroundColor: 'red',
    height: '50%',
    flex: 1,
    marginStart: 20,
  },
});

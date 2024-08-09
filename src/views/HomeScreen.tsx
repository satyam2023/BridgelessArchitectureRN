import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  FlatList,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {CONSTANT_STRING} from '../libs/Constant';

interface IHomeScreen {
  data: string[];
}

const HomeScreen = ({data}: IHomeScreen) => {
  const renderItem = ({item, index}: {item: string; index: number}) => {

    return (
      <View style={{padding: 20, borderRadius: 20,backgroundColor:'tomato',width:'50%',marginBottom:16,height:200,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'700',fontSize:16}}>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{columnGap:10,elevation:10}}
      contentContainerStyle={{flex:1,paddingHorizontal:20,}}
    />
  );
};

export default HomeScreen;

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
  },
});

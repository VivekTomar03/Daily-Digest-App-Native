import React, { useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NewsContext } from '../Context/Context';

const LoadingState = () => {
    const {
       
        darkTheme
       
      } = useContext(NewsContext);
  return (
    <View style={{...styles.container, backgroundColor: darkTheme?"black" :"white"}}>
      <ActivityIndicator size="large" color= {!darkTheme?"black" :"white"}/>
      <Text style={{...styles.loadingText, color:!darkTheme?"black" :"white"}}>Loading News For You...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default LoadingState;

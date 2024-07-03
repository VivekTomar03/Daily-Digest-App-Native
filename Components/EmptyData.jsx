import React, { useContext } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NewsContext } from '../Context/Context';


const EmptyState = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/564x/3c/5f/37/3c5f37392328d7085265e3e9e97866fc.jpg" }}
      style={styles.imageBackground}
    >
      <View style={[styles.container, darkTheme ? styles.darkOverlay : styles.lightOverlay]}>
        <Text style={[styles.text, darkTheme ? styles.darkText : styles.lightText]}>
          No News Data Available
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  darkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default EmptyState;

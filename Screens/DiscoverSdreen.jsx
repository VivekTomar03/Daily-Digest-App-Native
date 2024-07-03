import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories, sources } from "../Context/Api";
import { NewsContext } from "../Context/Context";
import { useSharedValue } from "react-native-reanimated";
import Search from "../Components/Search";

const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme, category } =
    useContext(NewsContext);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Search />
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Categories
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories &&
          categories.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setCategory(item.name)}
              style={{
                ...styles.category,
                opacity : item.name ===category ? 0.4 :1
              }}
            >
              <Image source={{ uri: item.pic }} style={{ ...styles.image }} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default DiscoverScreen;

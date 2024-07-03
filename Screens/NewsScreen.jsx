import React, { useContext, useRef, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import SingleNews from "../Components/SingleNews";
import { NewsContext } from "../Context/Context";
import { useSharedValue } from "react-native-reanimated";

const NewsScreen = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = Dimensions.get("window").height;
  const width = Dimensions.get("window").height;
  const [isVertical, setIsVertical] =useState(false);
  const PAGE_WIDTH = window.width;
  const ref =useRef(null);
  const scrollOffsetValue = useSharedValue(0);
  const baseOptions = isVertical
  ? {
    vertical: true,
    width: windowWidth,
    height: PAGE_WIDTH / 2,
  } 
  : {
    vertical: false,
    width: windowWidth,
    height: PAGE_WIDTH / 2,
  } 
  return <View style={styles.carousel}>
     {articles && (
           <Carousel
           enabled
           style={{backgroundColor: darkTheme ? "black":"white"}}
           {...baseOptions}
           ref={ref}
           mode="parallax"
           modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
           defaultScrollOffsetValue={scrollOffsetValue}
           testID={"xxx"}
           onConfigurePanGesture={g => g.enabled(false)}
           data={articles.slice(0, 10)}
           height={windowHeight}
           width={Dimensions.get("window").width}
           vertical
           onSnapToItem={(index) => setActiveIndex(index)}
           renderItem={({ item, index }) => (
            <ScrollView >
             <SingleNews item={item} index={index} darkTheme={darkTheme} />

            </ScrollView>
           )}
         />
      )}
  </View>;
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});

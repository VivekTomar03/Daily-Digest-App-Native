import { View, Text, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsScreen from '../Screens/NewsScreen';
import DiscoverSdreen from '../Screens/DiscoverSdreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../Context/Context';

const AllTabs = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);
  const [routes] = useState([
    { key: 'first', title: 'News' },
    { key: 'second', title: 'Discover' },
  ]);
  const renderScene = SceneMap({
    first: DiscoverSdreen,
    second: NewsScreen,
  });
  return (
    <TabView
     swipeEnabled={false}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}


export default AllTabs
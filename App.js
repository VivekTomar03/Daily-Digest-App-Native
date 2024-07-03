
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import AllTabs from './Components/AllTabs';
import Context, { NewsContext } from './Context/Context';
import { useContext } from 'react';




 function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{
      ...styles.container,
      backgroundColor: darkTheme ? "#282C35" : "white",
    }}>
      <AllTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop:StatusBar.currentHeight
  },
});
export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
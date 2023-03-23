import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import HomeIconActive from './assets/homeNavActive.svg';
import ReadyOrderCard from './components/ReadyOrderCard';
import Start from './pages/GetStarted.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <NavBar /> */}
      {/* <SearchBar textInput="djhf"/> */}
      {/* <ReadyOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/> */}
      <Start/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

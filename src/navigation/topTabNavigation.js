import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from '../screens/Overview';
import Features from '../screens/Features';
import Market from '../screens/Market';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      scrollEnabled={true}
      screenOptions={{
        tabContainerStyle: {width: '100%', paddingHorizontal: 10},
        scrollEnabled: true,
        tabStyle: {height: 40, marginHorizontal: 0},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="OverView" component={Overview} />
      <Tab.Screen name="Features" component={Features} />
      <Tab.Screen name="Market" component={Market} />
    </Tab.Navigator>
  );
}
export default MyTabs;

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from '../screens/Overview';
import Features from '../screens/Features';
import Market from '../screens/Market';
import {NavigationContainer} from '@react-navigation/native';
import Constituents from '../screens/Constituents';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      scrollEnabled={true}
      screenOptions={{
        tabContainerStyle: {width: '100%', paddingHorizontal: 10},
        scrollEnabled: true,
        tabStyle: {height: 40, marginHorizontal: 0},
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'none',
        },
      }}>
      <Tab.Screen
        name="Constituents"
        component={Constituents}
        options={{tabBarLabel: 'Constituents'}}
      />
      <Tab.Screen name="OverView" component={Overview} />
      <Tab.Screen name="Features" component={Features} />
      <Tab.Screen name="Market" component={Market} />
    </Tab.Navigator>
  );
}
export default MyTabs;

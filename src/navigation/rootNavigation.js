import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Home from '../screens/Home';
import MyTabs from './topTabNavigation';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            headerTitle: () => (
              <View>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                  Nifty 50
                </Text>
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 0,
            },
            headerShadowVisible: false,
          }}
          name="Home"
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

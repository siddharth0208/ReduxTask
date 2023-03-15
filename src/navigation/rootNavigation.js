import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import MyTabs from './topTabNavigation';
import {useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {checkInternet} from '../redux/Action';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    NetInfo.addEventListener(state => {
      Dispatch(checkInternet(state.isConnected));
    });
  }, []);
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

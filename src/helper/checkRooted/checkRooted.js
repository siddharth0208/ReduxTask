import React from 'react';
import {View, Text, BackHandler, Alert} from 'react-native';
import JailMonkey from 'jail-monkey';
export const checkRooted = () => {
  const isRooted = JailMonkey.isJailBroken();
  if (!isRooted) {
    console.log('rooted');
    Alert.alert(
      'Device Rooted!',
      'You can not proceed with rooted Device.',
      [
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    console.log('Not Rooted!');
  }
  return;
};

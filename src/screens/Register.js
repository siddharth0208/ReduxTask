import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {registerUserData} from '../redux/Action';

const Register = ({navigation}) => {
  const [Data, SetData] = useState({
    name: '',
    profile: '',
    age: '',
    gender: '',
  });
  const [value, setValue] = useState();

  const onSubmit = () => {
    if (
      Data.name != '' &&
      Data.profile != '' &&
      Data.gender != '' &&
      Data.age != ''
    ) {
      userDataDispatch(registerUserData(Data));
      navigation.navigate('Home');
      SetData({
        name: '',
        profile: '',
        age: '',
        gender: '',
      });
    } else {
      Alert.alert('Fill All The field!');
    }
  };

  const userDataDispatch = useDispatch();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.heading}>Let's Register</Text>
      <View style={styles.middleView}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#9a73ef"
          value={Data.name}
          autoCapitalize="none"
          onChangeText={data => {
            SetData({...Data, name: data});
          }}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Profile"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={Data.profile}
          onChangeText={data => {
            SetData({...Data, profile: data});
          }}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Age"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={Data.age}
          onChangeText={data => {
            SetData({...Data, age: data});
          }}
          keyboardType={'numeric'}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Gender"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={Data.gender}
          onChangeText={data => {
            SetData({...Data, gender: data});
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.botton}
        onPress={() => {
          onSubmit();
        }}>
        <Text style={styles.bottonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    fontSize: 40,
    color: 'black',
    marginTop: 80,
  },
  input: {
    alignSelf: 'center',
    margin: 20,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 1.5,
    color: 'black',
    width: '80%',
    borderRadius: 10,
  },
  middleView: {
    marginTop: 20,
  },
  botton: {
    marginTop: 20,
    backgroundColor: '#7a42f4',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

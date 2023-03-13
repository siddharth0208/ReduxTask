import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateData} from '../redux/Action';

const Home = ({navigation}) => {
  let userDataSelector = useSelector(state => state?.randomData);
  let Dispatch = useDispatch();

  useEffect(() => {
    console.log('before updatation', userDataSelector);
    const interval = setInterval(() => {
      userDataSelector?.map(user => {
        const newData = user.count + 1;
        // console.log('userId', user.id);
        // console.log('newData', newData);
        Dispatch(updateData(user.id, newData));
      });
      console.log('after updatation', userDataSelector);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.list}>
        <Text style={styles.item}>companyName - {item.companyName}</Text>
        <Text style={styles.item}>Value - {item.dayValue}</Text>
        <Text style={styles.item}>Index - {item.index}</Text>
        <Text style={styles.item}>percentage - {item.percentage}</Text>
        <Text style={styles.item}>Count - {item.count}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.head}>Users</Text>

      <FlatList
        style={{
          height: '80%',
          width: '90%',
          alignSelf: 'center',
        }}
        data={userDataSelector}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      <TouchableOpacity
        style={styles.botton}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={styles.bottonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  head: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 25,
    marginTop: 25,
    fontWeight: '500',
  },
  list: {
    borderWidth: 1.5,
    marginVertical: 20,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 10,
  },
  item: {
    color: 'black',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '400',
  },
  botton: {
    marginVertical: 10,
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

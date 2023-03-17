import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateData} from '../redux/Action';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ConstituentsList from '../component/constituentsList';
const Constituents = ({navigation}) => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  // let userDataSelector = useSelector(state => state?.randomData);
  // let internet = useSelector(state => state?.isConnected);
  // let Dispatch = useDispatch();

  // useEffect(() => {
  //   Dispatch(updateData(undefined));
  //   // const interval = setInterval(() => {
  //   //   userDataSelector?.map(user => {
  //   //     const newData = user.count + 1;
  //   //     // console.log('userId', user.id);
  //   //     // console.log('newData', newData);
  //   //     Dispatch(updateData(user.id, newData));
  //   //   });
  //   //   console.log('after updatation', userDataSelector);
  //   // }, 10000);
  //   return () => Dispatch(updateData(true));
  // }, []);

  // const renderItem = ({item}) => {
  //   return (
  //     <View style={styles.list}>
  //       <Text style={styles.item}>companyName - {item.companyName}</Text>
  //       <Text style={styles.item}>Value - {item.dayValue}</Text>
  //       <Text style={styles.item}>Index - {item.index}</Text>
  //       <Text style={styles.item}>percentage - {item.percentage}</Text>
  //       <Text style={styles.item}>Count - {item.count}</Text>
  //     </View>
  //   );
  // };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.switchBotton}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: selectedFilter == 0 ? 'white' : 'transparent',
            }}
            onPress={() => {
              setSelectedFilter(0);
            }}>
            <AntDesign
              name="bars"
              size={25}
              color={selectedFilter == 0 ? 'black' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: selectedFilter == 1 ? 'white' : 'transparent',
            }}
            onPress={() => {
              setSelectedFilter(1);
            }}>
            <AntDesign
              name="appstore1"
              size={22}
              color={selectedFilter == 1 ? 'black' : 'gray'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', marginRight: 20, alignItems: 'center'}}>
          <TouchableOpacity>
            <Ionicons
              name="search-sharp"
              size={20}
              color="black"
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="list-sharp" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ConstituentsList
        stockName={'AXISBANK'}
        stockTtile={'vol.galner'}
        price={'1548.08'}
        changes={'+3.65(+0.44%)'}
      />
    </View>
  );
};
export default Constituents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    marginTop: 10,
    // height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchBotton: {
    flexDirection: 'row',
    padding: 3,
    backgroundColor: 'rgba(0,0,0,0.07)',
    width: 90,
    borderRadius: 5,
    marginLeft: 10,
  },
});

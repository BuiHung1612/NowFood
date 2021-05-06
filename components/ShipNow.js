import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {getShipNow} from '../services/API';
import {getImage} from '../ultis/index';
import {set} from 'react-native-reanimated';

const ShipNow = props => {
  const navigation = useNavigation();
  const [dataNow, setNow] = useState();
  useEffect(() => {
    const getApiProduct = async () => {
      const result = await getShipNow();
      //   console.log('result', result.data.reply.delivery_infos);
      setNow(result.data.reply.delivery_infos);
    };
    getApiProduct();
    return () => {
      setNow({});
    };
  }, []);
  return (
    <View>
      <FlatList
        data={dataNow}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.boxBtn}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('Detail', {
                  id: item.id,
                  idScreen: props.idScreen,
                })
              }>
              <View>
                <Image
                  source={{
                    uri: getImage(
                      item.image_name,
                      item.restaurant_id,
                      item.photos?.[0].value,
                    ),
                  }}
                  style={{width: 110, height: 105}}
                />
              </View>
              <View style={{}}>
                <Text style={styles.text} numberOfLines={2}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 15,
                    width: 260,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="star" size={17} color="#FDC532" />
                    <Text style={{marginLeft: 5}}>{item.rating.avg}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="time-outline" size={17} color="#000" />
                    <Text>15p</Text>
                    <Entypo
                      name="dot-single"
                      size={22}
                      color="#000"
                      style={{bottom: 3, marginLeft: -3, marginRight: -3}}
                    />
                    <Text>0.6km</Text>
                  </View>
                </View>
                {/* <View
                  style={{flexDirection: 'row', marginLeft: 15, marginTop: 5}}>
                  {NearMeData.filter(e => e.id == item.id).map(e =>
                    e.sale.map(a => {
                      if (a.sale1) {
                        return (
                          <View style={styles.boxsale} key={a.id}>
                            <Text style={styles.sale}>{a.sale1}</Text>
                          </View>
                        );
                      }
                    }),
                  )}
                </View> */}
                <TouchableOpacity
                  style={{marginLeft: 15, flexDirection: 'row'}}>
                  <Text style={styles.location}>{item.location_url}</Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={17}
                    color="#9DC5EE"
                    style={{top: 11}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ShipNow;

const styles = StyleSheet.create({
  boxBtn: {
    width: '100%',
    height: 130,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    width: '80%',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sale: {
    fontSize: 11,
    color: '#CB4A50',
  },
  boxsale: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CB4A50',
    paddingLeft: 5,
    paddingRight: 5,
    height: 20,
    marginRight: 8,
  },
  location: {
    color: '#3881E0',
    marginTop: 10,
  },
});

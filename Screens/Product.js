import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FlatlistBtn from '../data/FlatlistBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import NearMe from '../components/nearMe';
import Selling from '../components/selling';
import {getNearMe} from '../services/API';
import Rate from '../components/Rate';
import Order from '../components/order';
import {useDispatch, useSelector} from 'react-redux';
import ShipNow from '../components/ShipNow';
const Product = ({navigation, route}) => {
  const {idShop} = route.params;
  const dispatch = useDispatch();
  const [screen, setscreen] = useState('suggest');
  const Footer = () => {
    if (screen == 'suggest') {
      return <Rate idScreen="3" />;
    }
    if (screen == 'nearme') {
      return <Selling idScreen="2" />;
    }
    if (screen == 'orderalot') {
      return <ShipNow idScreen="4" />;
    }
    if (screen == 'decreased') {
      return <NearMe idScreen="1" />;
    }
  };
  const [dataShop, setDataShop] = useState();
  useEffect(() => {
    const getApiProduct = async () => {
      const result = await getNearMe();
      console.log('result', result.data.reply.delivery_infos);
      setDataShop(result.data.reply.delivery_infos);
      console.log(dataShop);
    };

    getApiProduct();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={Footer}
        initialNumToRender={20}
        data={dataShop}
        renderItem={({item}) => {
          if (item.delivery_id == idShop)
            return (
              <View style={{}}>
                <ImageBackground
                  source={{uri: item.photos?.[10].value}}
                  style={styles.imgbanner}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={40}
                      color={'#fff'}
                      style={{marginLeft: 15, marginTop: 13}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      name="upload"
                      size={30}
                      color="#fff"
                      style={{marginRight: 15, marginTop: 15}}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <View style={{marginLeft: 10, marginTop: 10}}>
                  <Text style={styles.subtitle}>{item.name}</Text>
                  <Text style={styles.describe}>{item.categories?.[0]}</Text>
                </View>
                <View style={styles.boxscreen}>
                  <TouchableOpacity onPress={() => setscreen('suggest')}>
                    <Text
                      style={[
                        styles.scname,
                        {
                          fontWeight: screen == 'suggest' ? 'bold' : '500',
                          borderBottomWidth: 3,
                          borderBottomColor:
                            screen == 'suggest' ? '#EE3331' : '#fff',
                        },
                      ]}>
                      Gợi ý
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setscreen('nearme')}>
                    <Text
                      style={[
                        styles.scname,
                        {
                          fontWeight: screen == 'nearme' ? 'bold' : '500',
                          borderBottomWidth: 3,
                          borderBottomColor:
                            screen == 'nearme' ? '#EE3331' : '#fff',
                        },
                      ]}>
                      Gần tôi
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setscreen('orderalot')}>
                    <Text
                      style={[
                        styles.scname,
                        {
                          fontWeight: screen == 'orderalot' ? 'bold' : '500',
                          borderBottomWidth: 3,
                          borderBottomColor:
                            screen == 'orderalot' ? '#EE3331' : '#fff',
                        },
                      ]}>
                      Đặt nhiều
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setscreen('decreased')}>
                    <Text
                      style={[
                        styles.scname,
                        {
                          fontWeight: screen == 'decreased' ? 'bold' : '500',
                          borderBottomWidth: 3,
                          borderBottomColor:
                            screen == 'decreased' ? '#EE3331' : '#fff',
                        },
                      ]}>
                      Giảm nhiều
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
        }}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgbanner: {
    width: '100%',
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '98%',
  },
  describe: {
    fontSize: 17,
    color: '#929292',
  },
  boxscreen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 15,
    marginTop: 10,
    borderBottomWidth: 4,
    paddingBottom: 8,
    borderBottomColor: '#F7F9FA',
  },
  scname: {
    fontSize: 17,
  },
});

import React, {useState} from 'react';
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
const Product = ({navigation, route}) => {
  const {id} = route.params;
  const [screen, setscreen] = useState('suggest');
  const Footer = () => {
    if (screen == 'suggest') {
      return <NearMe />;
    }
    if (screen == 'nearme') {
      return <Selling />;
    }
    if (screen == 'orderalot') {
      return <NearMe />;
    }
    if (screen == 'decreased') {
      return <Selling />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={Footer}
        initialNumToRender={20}
        data={FlatlistBtn}
        renderItem={({item}) => {
          if (item.id === id) {
            return (
              <View style={{}}>
                <ImageBackground
                  source={{uri: item.url}}
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
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <Text style={styles.describe}>{item.describe}</Text>
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
                          fontWeight: screen == 'suggest' ? 'bold' : '500',
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
                          fontWeight: screen == 'suggest' ? 'bold' : '500',
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
                          fontWeight: screen == 'suggest' ? 'bold' : '500',
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
          }
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

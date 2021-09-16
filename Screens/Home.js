import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imgdata from '../data/ImgData';
import Imgswiper1 from '../data/Imgswiper1';
import FlatlistBtn from '../data/FlatlistBtn';
import Collection from '../data/collection';
import FlatListHome2 from '../data/FlatListHome2';
import Recent from '../data/Recent';
import Swiper from 'react-native-swiper';
import NearMe from '../components/nearMe';
import Selling from '../components/selling';
import Rate from '../components/Rate';
import ShipNow from '../components/ShipNow';
import { useDispatch, useSelector } from 'react-redux';
import { getCollection } from '../services/API';
import { CallCollection } from '../reducers/getApI';
const Home = ({ navigation }) => {
  const [SC, setScreen] = useState('NearMe');
  const dispatch = useDispatch();
  const collections = useSelector(store => store.getApI.Collection);
  // const [collections, setCollections] = useState();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ToggleScreen = () => {
    if (SC) {
      if (SC == 'NearMe') {
        return <NearMe idScreen="1" />;
      }
      if (SC == 'selling') {
        return <Selling idScreen="2" />;
      }
      if (SC == 'rate') {
        return <Rate idScreen="3" />;
      }
      if (SC == 'now') {
        return <ShipNow idScreen="4" />;
      }
    }
  };
  const ListImg = () => {
    return Imgdata.map((e, i) => {
      return (
        <Image
          key={e.id}
          source={{ uri: e.url }}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
      );
    });
  };
  const ListImg1 = () => {
    return Imgswiper1.map((e, i) => {
      return (
        <Image
          key={i}
          source={{ uri: e.url }}
          style={{ width: '95%', height: 120, resizeMode: 'cover' }}
        />
      );
    });
  };
  const Listbtn1 = () => {
    return FlatlistBtn.map((e, i) => {
      if (e.id < 9) {
        return (
          <TouchableOpacity
            style={{ width: 80, marginLeft: 5 }}
            key={e.id}
            onPress={() => {
              return navigation.navigate('Product', { idShop: e.idShop });
            }}>
            <View style={styles.btn}>
              <Image
                source={{ uri: e.url }}
                style={{ width: 45, height: 45, borderRadius: 15 }}
              />
            </View>
            <Text style={{ width: 80, textAlign: 'center', fontSize: 14 }}>
              {e.title}
            </Text>
          </TouchableOpacity>
        );
      }
    });
  };
  const Listbtn2 = () => {
    return FlatlistBtn.map((e, i) => {
      if (e.id > 8 && e.id < 17) {
        return (
          <TouchableOpacity
            style={{ marginLeft: 5, width: 80 }}
            key={e.id}
            onPress={() => {
              return navigation.navigate('Product', { idShop: e.idShop });
            }}>
            <View style={styles.btn}>
              <Image
                source={{ uri: e.url }}
                style={{ width: 45, height: 45, borderRadius: 15 }}
              />
            </View>
            <Text
              style={{ width: 80, fontSize: 14, textAlign: 'center' }}
              numberOfLines={2}>
              {e.title}
            </Text>
          </TouchableOpacity>
        );
      }
    });
  };

  useEffect(() => {
    // const listCollection = async () => {
    //   const result = await getCollection();
    //   setCollections(result.data.reply.collections);
    //   //console.log(result.data.reply.collections);
    // };
    // listCollection();
    // return () => {
    //   setCollections({});
    // };
    dispatch(CallCollection());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={{ flex: 0.17 }}>
              <View style={styles.location}>
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    color: '#848484',
                    fontSize: 15,
                    marginTop: 3,
                    marginBottom: 5,
                  }}>
                  Giao hàng đến:
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="location" size={20} color={'#FF0000'} />
                  <Text
                    style={{
                      fontWeight: '700',
                      marginLeft: 7,
                      fontSize: 17,
                      width: '87%',
                    }}
                    numberOfLines={1}>
                    59b Ngõ 2 Phố Phạm Thận Duật,Mai Dịch,Cầu Giấy,Hà Nội
                  </Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={23}
                    color={'#000'}
                    style={{ bottom: 2 }}
                  />
                </View>
              </View>
              <View style={styles.search}>
                <Ionicons
                  name="search"
                  size={20}
                  color={'#848484'}
                  style={{ position: 'absolute', zIndex: 100, left: 30, top: 10 }}
                />
                <TextInput
                  placeholder="Starbucks Coffee giảm 50%"
                  style={{
                    width: '95%',
                    backgroundColor: '#F2F2F2',
                    paddingLeft: 50,
                    borderRadius: 30,
                  }}
                />
              </View>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View>
              {/* swipeBanner */}

              <View style={styles.swipeBanner}>
                <Swiper
                  height={windowHeight * 0.18}
                  width={windowWidth * 1}
                  style={{
                    backgroundColor: '#d8d8d8',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  autoplay
                  autoplayTimeout={3}>
                  {ListImg()}
                </Swiper>
              </View>
              <View style={styles.FlatlistBtn}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View>
                    <View style={{ flexDirection: 'row' }}>{Listbtn1()}</View>
                    <View style={{ flexDirection: 'row' }}>{Listbtn2()}</View>
                  </View>
                </ScrollView>
              </View>

              {/* bo suu tap */}
              <View style={styles.collecion}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 7,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Lato-Bold',
                      fontSize: 19,
                    }}>
                    Bộ sưu tập
                  </Text>
                  <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => navigation.navigate('Collections')}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        fontFamily: 'Lato-Regular',
                        color: '#848484',
                        marginTop: 3,
                      }}>
                      Xem thêm
                    </Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={23}
                      color={'#000'}
                      style={{ bottom: 2, marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={collections}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={{
                            marginLeft: 10,
                            marginTop: 5,
                            marginBottom: 5,
                          }}
                          key={item.id}>
                          <Image
                            source={{ uri: item.photos?.[0].value }}
                            style={{
                              width: item.photos?.[0].width - 140,
                              height: item.photos?.[0].height - 50,
                            }}
                            resizeMode="contain"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '500',
                              fontFamily: 'Lato-Regularp',
                              textAlign: 'center',
                              marginBottom: 10,
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
              {/* recent */}
              <View style={styles.recent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 7,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Lato-Bold',
                      fontSize: 19,
                    }}>
                    Xem gần đây
                  </Text>
                  <TouchableOpacity
                    style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        fontFamily: 'Lato-Regular',
                        color: '#848484',
                        marginTop: 3,
                      }}>
                      Xem thêm
                    </Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={23}
                      color={'#000'}
                      style={{ bottom: 2, marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={Recent}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <View
                          style={{
                            marginLeft: 5,
                            width: 360,
                            flexDirection: 'row',
                          }}
                          key={item.id}>
                          <Image
                            source={{ uri: item.url }}
                            style={{
                              width: 130,
                              height: 110,
                              borderRadius: 5,
                            }}
                          />
                          <View>
                            <Text
                              style={{
                                fontSize: 18,
                                fontWeight: '500',
                                fontFamily: 'Lato-Regular',
                                marginLeft: 10,
                                width: 200,
                              }}
                              numberOfLines={1}>
                              {item.title}
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: 'Lato-Regular',
                                marginLeft: 10,
                                marginTop: 7,
                                color: '#848484',
                              }}>
                              {item.time}
                            </Text>
                            <View
                              style={{
                                marginTop: 30,
                                marginLeft: 10,
                                flexDirection: 'row',
                              }}>
                              <Text
                                key={item.id}
                                style={{
                                  borderWidth: 1,
                                  width: 70,
                                  borderColor: 'red',
                                  textAlign: 'center',
                                }}>
                                {item.subtitle.map(e => e.subtitle1)}
                              </Text>
                              <Text
                                key={item.id + 1}
                                style={{
                                  borderWidth: 1,
                                  width: 90,
                                  borderColor: 'red',
                                  textAlign: 'center',
                                  marginLeft: 10,
                                }}>
                                {item.subtitle.map(e => e.subtitle2)}
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>

              {/* banner quang cao */}
              <View style={styles.swipeBanner}>
                <Swiper
                  autoplay
                  autoplayTimeout={3}
                  height={130}
                  style={{ margin: 10 }}>
                  {ListImg1()}
                </Swiper>
              </View>

              {/* dong gia 8k */}
              <View style={styles.collecion}>
                <View style={styles.headerItem}>
                  <Text style={styles.headerItemText1}>Đồng giá 8k</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.headerItemText2}>Xem thêm</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={23}
                      color={'#000'}
                      style={{ bottom: 2, marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={Collection}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <View
                          style={{
                            marginLeft: 10,
                          }}>
                          <Image
                            source={{ uri: item.url }}
                            style={styles.imgItem}
                          />
                          <Text numberOfLines={1} style={styles.textItem}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
              {/* mọi người vừa ăn gì */}
              <View style={styles.collecion}>
                <View style={styles.headerItem}>
                  <Text style={styles.headerItemText1}>
                    Mọi người vừa ăn gì ?
                  </Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.headerItemText2}>Xem thêm</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={23}
                      color={'#000'}
                      style={{ bottom: 2, marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={Collection}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ marginLeft: 10 }}>
                          <Image
                            source={{ uri: item.url }}
                            style={styles.imgItem}
                          />
                          <Text numberOfLines={1} style={styles.textItem}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
              {/* freeship extra */}
              <View style={styles.collecion}>
                <View style={styles.headerItem}>
                  <Text style={styles.headerItemText1}>
                    Freeship Xtra + Giảm 50%
                  </Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.headerItemText2}>Xem thêm</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={23}
                      color={'#000'}
                      style={{ bottom: 2, marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={Collection}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ marginLeft: 10 }}>
                          <Image
                            source={{ uri: item.url }}
                            style={styles.imgItem}
                          />
                          <Text numberOfLines={1} style={styles.textItem}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>

              <View style={styles.flatlistdanhmuc}>
                <FlatList
                  data={FlatListHome2}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity style={{ padding: 10 }}>
                        <View style={styles.btnitem1}>
                          <Image
                            source={{ uri: item.img }}
                            style={styles.imgbtn}
                          />
                        </View>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#8D8F92',
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 15,
                  paddingRight: 15,
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => setScreen('NearMe')}
                  style={[
                    styles.btnscreen,
                    { borderBottomColor: SC == 'NearMe' ? 'red' : '#fff' },
                  ]}>
                  <Text
                    style={[
                      styles.textscreen,
                      { fontWeight: SC == 'NearMe' ? 'bold' : '500' },
                    ]}>
                    Gần tôi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen('selling')}
                  style={[
                    styles.btnscreen,
                    { borderBottomColor: SC == 'selling' ? 'red' : '#fff' },
                  ]}>
                  <Text
                    style={
                      (styles.textscreen,
                        { fontWeight: SC == 'selling' ? 'bold' : '500' })
                    }>
                    Đang bán
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen('rate')}
                  style={[
                    styles.btnscreen,
                    { borderBottomColor: SC == 'rate' ? 'red' : '#fff' },
                  ]}>
                  <Text
                    style={
                      (styles.textscreen,
                        { fontWeight: SC == 'rate' ? 'bold' : '500' })
                    }>
                    Đánh giá
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen('now')}
                  style={[
                    styles.btnscreen,
                    { borderBottomColor: SC == 'now' ? 'red' : '#fff' },
                  ]}>
                  <Text
                    style={
                      (styles.textscreen,
                        { fontWeight: SC == 'now' ? 'bold' : '500' })
                    }>
                    Giao nhanh
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderTopColor: '#F8F9FB',
                  borderTopWidth: 2,
                  paddingTop: 6,
                  height: 14 * 111,
                }}>
                <ToggleScreen />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  location: {
    flex: 0.6,
    paddingTop: 5,
    paddingLeft: 5,
  },
  search: {
    flex: 0.4,
    width: '100%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeBanner: {
    marginTop: 5,
    backgroundColor: '#F2F2F2',
  },
  FlatlistBtn: {
    height: 225,
    borderBottomWidth: 10,
    borderBottomColor: '#E6E6E6',
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 0.3,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collecion: {
    borderBottomWidth: 10,
    borderBottomColor: '#E6E6E6',
  },
  recent: {
    borderBottomWidth: 10,
    borderBottomColor: '#E6E6E6',
  },
  flatlistdanhmuc: {
    height: 110,
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginLeft: 10,
  },
  headerItemText1: {
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
    fontSize: 19,
  },
  headerItemText2: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
    color: '#848484',
    marginTop: 3,
  },
  imgbtn: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  imgItem: { width: 130, height: 130, marginTop: 5 },
  textItem: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato-Regularp',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    width: 120,
  },
  btnitem1: {
    backgroundColor: '#F4F3F7',
    borderRadius: 40,
    width: 65,
    height: 65,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 1000,
      height: 90,
    },
    elevation: 100,
  },
  boxBtn: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  textscreen: {
    fontSize: 17,
    width: 60,
    textAlign: 'center',
  },
  btnscreen: {
    borderBottomWidth: 3,
    marginLeft: 10,
    marginBottom: 10,
  },
});

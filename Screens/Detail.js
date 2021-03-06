import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NearMeData from '../data/NearMeData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Order from '../components/order';
import Comment from '../components/comment';
import Information from '../components/Infomation';
import {
  getNearMe,
  getRate,
  getSelling,
  getShipNow,
  getShop,
} from '../services/API';
import {getImage} from '../ultis';
import {useDispatch, useSelector} from 'react-redux';

const Detail = ({route, navigation}) => {
  const {id, idScreen, service_type} = route.params;
  console.log(id, idScreen, service_type);
  const dispatch = useDispatch();
  const ToogleScreen = () => {
    if (idScreen == '1') {
      return getNearMe();
    }
    if (idScreen == '2') {
      return getSelling();
    }
    if (idScreen == '3') {
      return getRate();
    }
    if (idScreen == '4') {
      return getShipNow();
    }
  };

  useEffect(() => {
    dispatch({type: 'idShop', data: id});
    dispatch({type: 'Screen', data: idScreen});
    dispatch({type: 'service_type', data: {service_type: service_type}});
  }, [id]);
  const [DataShop, setDataShop] = useState([]);
  const [screen, setscreen] = useState('order');
  const [heart, setHeart] = useState(false);
  const Heart = useSelector(store => store.favouriteShop.shop);
  console.log('heartr', Heart);
  const Footer = id => {
    if (screen == 'order') {
      return <Order id={id} />;
    }
    if (screen == 'comment') {
      return <Comment />;
    }
    if (screen == 'information') {
      return <Information />;
    }
  };
  const clickHeart = (idShop, name, img, rating, promotions) => () => {
    setHeart(!heart);

    dispatch({
      type: 'addShop',
      data: {
        idShop: idShop,
        title: name,
        img: img,
        rating: rating,
        promotions: promotions,
        heart: !heart,
      },
    });
    // : dispatch({
    //     type: 'removeShop',
    //     data: {
    //       idShop: idShop,
    //     },
    //   });
  };

  useEffect(() => {
    const getApiProduct = async () => {
      const result = await ToogleScreen();

      setDataShop(result.data.reply.delivery_infos);
      if (Heart.length != 0) {
        Heart.map(e => {
          if (e.heart == true && e.idShop == id) {
            setHeart(true);
          }
        });
      }
      console.log('d??t', result.data.reply.delivery_infos);
    };

    getApiProduct();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={Footer(id)}
        data={DataShop}
        keyExtractor={item => item.delivery_id}
        renderItem={({item}) => {
          if (item.id == id) {
            return (
              <View key={item.delivery_id}>
                <ImageBackground
                  source={{
                    uri: getImage(
                      item.image_name,
                      item.restaurant_id,
                      item.photos?.[0].value,
                    ),
                  }}
                  style={styles.imgbackground}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={35}
                      color={'#fff'}
                      style={{marginLeft: 10, marginTop: 13}}
                    />
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row', paddingRight: 15}}>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Ionicons
                        name="search"
                        size={30}
                        color={'#fff'}
                        style={{marginLeft: 15, marginTop: 13}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={clickHeart(
                        item.id,
                        item.name,
                        item.photos?.[10].value,
                        item.rating.avg,
                        item.promotion_groups,
                      )}>
                      <Ionicons
                        name={heart ? 'heart' : 'heart-outline'}
                        size={30}
                        color={heart ? 'red' : '#fff'}
                        style={{marginLeft: 15, marginTop: 13}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                      <Ionicons
                        name="ellipsis-horizontal-outline"
                        size={35}
                        color={'#fff'}
                        style={{marginLeft: 15, marginTop: 13}}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    borderBottomWidth: 15,
                    paddingBottom: 9,
                    borderBottomColor: '#F5F6F8',
                  }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <View style={styles.rate}>
                    <Ionicons name="star" size={20} color="#FEC629" />
                    <Text style={styles.textrate}>
                      {item.rating.avg}({item.rating.total_review}+)
                    </Text>
                    <Entypo
                      name="dot-single"
                      size={15}
                      color="#000"
                      style={{top: 7, left: 4, right: 4}}
                    />
                    <Text style={styles.textrate}>0.5Km</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '70%',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity onPress={() => setscreen('order')}>
                    <Text
                      style={[
                        styles.textscreen,
                        {
                          fontWeight: screen == 'order' ? 'bold' : '500',
                          borderBottomColor:
                            screen == 'order' ? '#EE3231' : '#fff',
                        },
                      ]}>
                      ?????t ????n
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setscreen('comment')}>
                    <Text
                      style={[
                        styles.textscreen,
                        {
                          fontWeight: screen == 'comment' ? 'bold' : '500',
                          borderBottomColor:
                            screen == 'comment' ? '#EE3231' : '#fff',
                        },
                      ]}>
                      B??nh lu???n
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setscreen('information')}>
                    <Text
                      style={[
                        styles.textscreen,
                        {
                          fontWeight: screen == 'information' ? 'bold' : '500',
                          borderBottomColor:
                            screen == 'information' ? '#EE3231' : '#fff',
                        },
                      ]}>
                      Th??ng tin
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

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgbackground: {
    width: '100%',
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '95%',
    marginLeft: 10,
  },
  rate: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  textrate: {
    left: 5,
    top: 2,
    fontSize: 16,
  },
  textscreen: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 2,
  },
});

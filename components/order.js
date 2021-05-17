import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Recent from '../data/Recent';
import Products from '../data/Products';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getShop} from '../services/API';
import {getImage} from '../ultis';
const order = props => {
  const idShop = props.id;
  console.log('idshop', idShop);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const idScreen = useSelector(store => store.Screen.idScreen);
  console.log(idScreen);
  const [shopData, setShopData] = useState();
  useEffect(() => {
    const getApiShop = async () => {
      const result = await getShop(idShop);
      setShopData(result.data.reply.menu_infos);
    };

    getApiShop();
  }, []);
  const data = useSelector(store => store.idShop);
  const onClick = (id_Product, dishes_type_id) => () => {
    dispatch({
      type: 'idProduct',
      data: {id_Product: id_Product, dish_type_id: dishes_type_id},
    });
    navigation.navigate('ProductDescribe', {id: idShop});
  };
  const addCart = (id_Product, price, img, title, dish_type_id) => {
    dispatch({
      type: 'addCart',
      data: {
        idShop: idShop,
        id_Product: id_Product,
        dish_type_id: dish_type_id,
        service_type: data.service_type,
        price: price,
        img: img,
        title: title,
        idScreen: idScreen,
      },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.box}>
          <View style={{width: '15%', paddingLeft: 10}}>
            <Image
              source={{
                uri: 'https://image.vietstock.vn/2019/04/02/GIAO-HANG.jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={{width: '60%', paddingLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', left: 10}}>
              Giao hàng tiêu chuẩn
            </Text>
            <Text style={{fontSize: 15, left: 10}}>Dự kiến giao lúc 09:55</Text>
          </View>
          <TouchableOpacity style={{width: '25%'}}>
            <Text style={{color: '#347EEF', fontWeight: 'bold', top: 5}}>
              Thay đổi
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <View style={{width: '15%', paddingLeft: 10}}>
            <Image
              source={{
                uri:
                  'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={{width: '60%', paddingLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', left: 10}}>
              Đặt nhóm
            </Text>
            <Text style={{fontSize: 15, left: 10}}>Chia tiền nhanh chóng</Text>
          </View>
          <TouchableOpacity style={{width: '15%'}}>
            <Text
              style={{color: '#347EEF', fontWeight: 'bold', top: 5, left: 15}}>
              Mời
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 15,
            borderBottomColor: '#F5F6F8',
            paddingBottom: 25,
          }}>
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <Ionicons
              name="pricetag-outline"
              size={17}
              color="#fff"
              style={{top: 5, backgroundColor: 'red'}}
            />
            <Text style={styles.salecode} numberOfLines={1}>
              Nhập "TUHUKHAO":Giảm 25k trên giá món
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 5}}>
            <Ionicons
              name="pricetag-outline"
              size={17}
              color="#fff"
              style={{top: 5, backgroundColor: '#1593F9'}}
            />
            <Text style={styles.salecode} numberOfLines={1}>
              Nhập "ALLFREE":Freeship tới 3km,đơn tối thiểu 40k
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#3B8AE6', fontWeight: 'bold', top: 7}}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 0.5, paddingTop: 20, paddingLeft: 10}}>
        <FlatList
          data={shopData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return (
              <View key={item.id}>
                {/* {setDish_type_id(item.dish_type_id)} */}
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#676767'}}>
                  {item.dish_type_name}
                </Text>
                {item.dishes.map((e, i) => {
                  return (
                    <TouchableOpacity
                      key={e.id}
                      style={styles.btnContainer}
                      onPress={onClick(e.id, item.dish_type_id)}>
                      <Image
                        key={e.id}
                        source={{
                          uri: e.photos?.[0].value,
                        }}
                        style={styles.image1}
                      />
                      <View key={e.id + 1} style={{left: 15, width: '65%'}}>
                        <Text style={{fontSize: 17}}>{e.name}</Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          Khách hàng vui lòng ghi chú th...
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#959595',
                            marginTop: 6,
                          }}>
                          999+đã bán | {e.total_like}+ thích
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                marginTop: 6,
                                fontSize: 17,
                                fontWeight: 'bold',
                              }}>
                              {e.price.text}
                            </Text>
                            <Text
                              style={{
                                marginTop: 6,
                                marginLeft: 5,
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: '#9B9B9B',
                                textDecorationLine: 'line-through',
                              }}>
                              {e.price.text}
                            </Text>
                          </View>

                          <TouchableOpacity
                            onPress={() =>
                              addCart(
                                e.id,
                                e.price.text,
                                e.photos?.[4].value,
                                e.name,
                                item.dish_type_id,
                                idScreen,
                              )
                            }>
                            <Ionicons
                              name="add-circle"
                              size={30}
                              color="#EA3534"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    top: 15,
    flex: 0.3,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    flexDirection: 'row',
    height: 65,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F9FA',
    paddingBottom: 7,
  },
  salecode: {
    fontSize: 15,
    marginLeft: 7,
    top: 4,
    width: '70%',
  },
  image1: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    height: 130,
    width: Dimensions.get('window').width * 0.97,
  },
});

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
  const dishpatch = useDispatch();
  //const data = useSelector(store => store.idShop.id);
  const [shopData, setShopData] = useState();
  //const [dish_type_id, setDish_type_id] = useState();
  useEffect(() => {
    const getApiShop = async () => {
      //const result = await getShop(data);
      const result = await getShop(idShop);
      setShopData(result.data.reply.menu_infos);
      console.log(shopData);
    };

    getApiShop();
  }, []);
  const onClick = (id_Product, dishes_type_id) => () => {
    dishpatch({
      type: 'idProduct',
      data: {id_Product: id_Product, dish_type_id: dishes_type_id},
    });
    navigation.navigate('ProductDescribe', {id: idShop});
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
          <View style={{width: '65%', paddingLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', left: 10}}>
              Giao hàng tiêu chuẩn
            </Text>
            <Text style={{fontSize: 16, left: 10}}>Dự kiến giao lúc 09:55</Text>
          </View>
          <TouchableOpacity style={{width: '15%'}}>
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
          <View style={{width: '65%', paddingLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', left: 10}}>
              Đặt nhóm
            </Text>
            <Text style={{fontSize: 16, left: 10}}>Chia tiền nhanh chóng</Text>
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
      <View style={{flex: 0.5, paddingTop: 20, paddingLeft: 20}}>
        <FlatList
          data={shopData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View>
                {/* {setDish_type_id(item.dish_type_id)} */}
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#676767'}}>
                  {item.dish_type_name}
                </Text>
                {item.dishes.map(e => {
                  return (
                    <TouchableOpacity
                      key={e.id}
                      style={{
                        flexDirection: 'row',
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        height: 150,
                      }}
                      onPress={onClick(e.id, item.dish_type_id)}>
                      <Image
                        source={{
                          uri: e.photos?.[0].value,
                        }}
                        style={styles.image1}
                      />
                      <View style={{left: 15, width: '65%'}}>
                        <Text style={{fontSize: 18}}>{e.name}</Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          Khách hàng vui lòng ghi chú th...
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
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
                                fontSize: 18,
                                fontWeight: 'bold',
                              }}>
                              {e.price.text}
                            </Text>
                            <Text
                              style={{
                                marginTop: 6,
                                marginLeft: 5,
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#9B9B9B',
                                textDecorationLine: 'line-through',
                              }}>
                              {e.price.text}
                            </Text>
                          </View>

                          <TouchableOpacity>
                            <Ionicons
                              name="add-circle"
                              size={35}
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
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    flexDirection: 'row',
    height: 75,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F9FA',
    paddingBottom: 7,
  },
  salecode: {
    fontSize: 17,
    marginLeft: 7,
    top: 4,
    width: '75%',
  },
  image1: {
    width: 120,
    height: 120,
    marginTop: 10,
  },
});

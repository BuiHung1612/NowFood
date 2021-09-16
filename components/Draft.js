import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useDispatch, useSelector } from 'react-redux';
import Recent from '../data/Recent';
import Services from './Services';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Draft = () => {
  const data = useSelector(store => store.cartReducer.cart);
  const navigation = useNavigation();
  console.log('data', data);
  const dispatch = useDispatch();
  const [text, setText] = useState('Dịch vụ');
  const [idService, setIdService] = useState(1);
  const [dataShop, setDataShop] = useState();
  const [listShop, setListShop] = useState();
  const [onClick, setOnClick] = useState(false);
  const onHandlePress = () => {
    setOnClick(!onClick);
  };

  const show = item => {
    setText(item.title);
    setIdService(item.id);
  };

  useEffect(() => {
    setDataShop(data);
    console.log('dataa:', dataShop);
  }, [data]);

  const deleteCart = () => {
    dispatch({ type: 'removeCart' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headertab}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={onHandlePress}>
          <Text style={styles.text1}>{text}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={17}
            color="#000"
            style={{ top: 3, left: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCart}>
          <Text style={styles.text1}>Xoá hết</Text>
        </TouchableOpacity>
      </View>
      {data?.length != 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            if (item.service_type == idService) {
              return (
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: item.idShop,
                      idScreen: item.idScreen,
                      service_type: item.service_type,
                    })
                  }>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      Đồ ăn
                    </Text>
                    <Image source={{ uri: item.img }} style={styles.image} />
                  </View>
                  <View style={{ marginLeft: 15, width: '100%' }}>
                    <Text
                      style={{ fontSize: 17, fontWeight: 'bold', width: '62%' }}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text
                      style={{ color: '#929292', marginTop: 5, marginBottom: 5 }}>
                      Xóm làng - Mạnh Trữ
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {item.price}
                      {item.quantity}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      ) : (
        <View
          style={styles.noItemView}>
          <Image
            source={{
              uri:
                'https://images.foody.vn/res/g103/1025005/prof/s576x330/foody-upload-api-foody-mobile-hmzz-200522103018.jpg',
            }}
            style={styles.image1}
          />
          <Text style={styles.text3}>Thả tim vào quán bạn yêu nào!</Text>
          <Text style={styles.text2} numberOfLines={3}>
            Hãy lấp đầy dạ dày bằng một trái tim xinh. Thả tim(icon)để lưu lại
            quán ngon bạn thích nhé!
          </Text>
        </View>
      )}

      <Services enable={onClick} toggle={onHandlePress} onsend={show} />
    </View>
  );
};

export default Draft;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#EAEDF4',
  },
  headertab: {
    width: windowWidth,
    height: windowHeight * 0.07,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
  },
  text1: {
    fontSize: 15,
  },
  image1: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  image: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').height * 0.13,
  },
  btn: {
    height: Dimensions.get('window').height * 0.2,
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  text2: {
    fontSize: 15,
    width: Dimensions.get('window').width * 0.8,
    color: '#969696',
    marginTop: 5,
    textAlign: 'center',
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  noItemView: {
    height: windowHeight * 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

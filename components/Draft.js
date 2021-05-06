import React, {useState, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import Recent from '../data/Recent';
import Services from './Services';
import {
  getCart,
  getNearMe,
  getRate,
  getSelling,
  getShipNow,
  getShop,
} from '../services/API';
const Draft = () => {
  const data = useSelector(store => store.cartReducer);
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
    dispatch({type: 'removeCart'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headertab}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={onHandlePress}>
          <Text style={styles.text1}>{text}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={17}
            color="#000"
            style={{top: 3, left: 2}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCart}>
          <Text style={styles.text1}>Xoá hết</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          if (item.id_Product != '')
            // item.dishes.map(e => {
            //   if (
            //     data.id_Product.find(id_Product => id_Product == e.id) &&
            //     data.dish_type_id.find(
            //       dish_type_id => dish_type_id == item.dish_type_id,
            //     ) &&
            //     idService == data.service_type
            //   )
            return (
              <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Đồ ăn
                  </Text>
                  <Image source={{uri: item.img}} style={styles.image} />
                </View>
                <View style={{marginLeft: 15, width: '100%'}}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', width: '62%'}}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={{color: '#929292', marginTop: 5, marginBottom: 5}}>
                    Xóm làng - Mạnh Trữ
                  </Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
        }}
      />

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
    fontSize: 17,
  },
  image: {
    width: 120,
    height: 120,
  },
  btn: {
    height: 170,
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

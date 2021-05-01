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
import {getCart, getShipNow, getShop} from '../services/API';
const Draft = () => {
  const data = useSelector(store => store.cartReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState('Dịch vụ');
  const [dataShop, setDataShop] = useState();
  const [onClick, setOnClick] = useState(false);
  const onHandlePress = () => {
    setOnClick(!onClick);
  };

  const show = item => {
    setText(item);
  };

  useEffect(() => {
    const getShop = async () => {
      const result = await getCart(data.idShop);
      setDataShop(result.data.reply.menu_infos);
      console.log(result);
      //   console.log('dataShop', dataShop);
      //   console.log(
      //     'idShop,idProduct,dish_type',
      //     data.idShop,
      //     data.id_Product,
      //     data.dish_type_id,
      //   );
    };
    getShop();
  }, []);

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
        data={dataShop}
        keyExtractor={item => item.dish_type_id}
        renderItem={({item}) =>
          item.dishes.map(e => {
            if (
              data.id_Product.find(id_Product => id_Product == e.id) &&
              data.dish_type_id.find(
                dish_type_id => dish_type_id == item.dish_type_id,
              )
            )
              return (
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  key={e.id}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      Đồ ăn
                    </Text>
                    <Image
                      source={{uri: e.photos?.[0].value}}
                      style={styles.image}
                    />
                  </View>
                  <View style={{marginLeft: 15, width: '100%'}}>
                    <Text
                      style={{fontSize: 17, fontWeight: 'bold', width: '62%'}}
                      numberOfLines={1}>
                      {e.name}
                    </Text>
                    <Text
                      style={{color: '#929292', marginTop: 5, marginBottom: 5}}>
                      Xóm làng - Mạnh Trữ
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {e.price.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
          })
        }
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
